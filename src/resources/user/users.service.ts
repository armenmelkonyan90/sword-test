import { ConfigService } from '@nestjs/config';
import { buildResponse } from '@common/helpers';
import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOptionsWhere, Repository } from 'typeorm';

import { User, Customers } from '@common/database/entities';

import * as bcrypt from 'bcrypt';

import { IMessageSuccess, ITokenPayload } from '@common/models';
import { ERROR_MESSAGES } from '@common/messages';

import { Transactional } from 'typeorm-transactional';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,

    @InjectRepository(Customers)
    private readonly customersRepository: Repository<Customers>,

    private readonly _configService: ConfigService,
  ) { }
  private readonly _environment = this._configService.get<string>(
    'APP_CONFIG.ENVIRONMENT',
  );

  @Transactional()
  async getUserProfile(payload: ITokenPayload): Promise<User> {
    return this.usersRepository.findOne({
      where: { id: payload.id },
      relations: ['avatar', 'country', 'integrationServiceStatus'],
    });
  }

  async findOne(
    param: FindOptionsWhere<User> | FindOptionsWhere<User>[],
  ): Promise<User> {
    return this.usersRepository.findOneBy(param);
  }

  async findByEmailOrPhone(login: string): Promise<User> {
    const user: User = await this.usersRepository.findOne({
      where: [{ email: login }, { phone: login }],
    });
    return user;
  }

  async findByUsernameOrPhoneOrEmail(
    username: string,
    email: string,
    phone: string,
  ): Promise<User> {
    const user: User = await this.usersRepository.findOneBy([
      { username },
      { email },
      { phone },
    ]);
    return user;
  }

  async create(body: Partial<User>): Promise<User> {
    if (body.password) {
      body.password = await bcrypt.hash(body.password, 10);
    }
    const user: User = await this.usersRepository.save(body);
    return user;
  }

  async update(id: number, body: Partial<User>): Promise<void> {
    if (body.password) {
      body.password = await bcrypt.hash(body.password, 10);
    }
    await this.usersRepository.update(id, body);
  }

  async createCustomer(customerId: string, phone: string): Promise<Customers> {
    return this.customersRepository.save({
      phone,
      customerId,
    });
  }

  async getCustomerByCustomerId(customerId: string): Promise<Customers> {
    return this.customersRepository.findOneBy({ customerId });
  }

  @Transactional()
  async deleteAuthorizedUser(user: ITokenPayload): Promise<IMessageSuccess> {
    if (this._environment != 'development' && this._environment != 'local' && this._environment != 'AWS') {
      throw buildResponse(
        false,
        null,
        ERROR_MESSAGES.APP_ERROR_ENVIRONMENT,
        HttpStatus.SERVICE_UNAVAILABLE,
      );
    }
    const { id } = user;
    if (!id) {
      throw buildResponse(
        false,
        null,
        ERROR_MESSAGES.USER_NOT_EXISTS,
        HttpStatus.BAD_REQUEST,
      );
    }
    await this.usersRepository.delete({ id });

    return;
  }
}
