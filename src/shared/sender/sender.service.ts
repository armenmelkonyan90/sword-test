/* eslint-disable @typescript-eslint/no-unused-vars */
import { IEmailConfig, ISmsConfig } from '@common/models';

import { ConfigService } from '@nestjs/config';
import { Injectable } from '@nestjs/common';

import { SESV2, SNS } from 'aws-sdk';
import { getSES, getSNS } from '@common/helpers';

import twilio from 'twilio';

@Injectable()
export class SenderService {
  private readonly smtpConfig =
    this.configService.get<IEmailConfig>('EMAIL_CONFIG');

  private readonly smsConfig = this.configService.get<ISmsConfig>('SMS_CONFIG');
  // private readonly client = twilio(
  //   this.smsConfig.accountSid,
  //   this.smsConfig.authToken,
  // );

  constructor(private readonly configService: ConfigService) {}

  async sendSMS(
    message: string,
    phoneNumber: string,
    subject: string,
  ): Promise<SNS.PublishResponse> {
    const params = {
      Message: message,
      PhoneNumber: phoneNumber,
      Subject: subject,
    };
    const sns = getSNS();
    return sns.publish(params).promise();
  }

  // async sendSMSToPhone(phone: string, message: string): Promise<void> {
  //   await this.client.messages.create({
  //     body: message,
  //     from: this.smsConfig.phoneNumber,
  //     to: phone,
  //   });
  // }

  async sendEmailViaTemplate(
    email: string,
    templateName: string, // e.g: `REPORT_EMAIL`
    templateData: string, // e.g: `{ "link" : "test.com" }`
  ): Promise<SESV2.SendEmailResponse> {
    const params = {
      FromEmailAddress: this.smtpConfig.from, // `no-reply@notifications.sword.money`,
      Content: {
        Template: {
          TemplateName: templateName,
          TemplateData: templateData,
        },
      },
      Destination: {
        ToAddresses: [email],
      },
    };

    // Create the promise and SES service object
    const sendPromise = getSES().sendEmail(params).promise();

    // Handle promise's fulfilled/rejected states
    return sendPromise;
  }
}
