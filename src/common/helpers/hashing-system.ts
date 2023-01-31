import { ConfigService } from '@nestjs/config';
import {
  Cipher,
  Decipher,
  createCipheriv,
  createDecipheriv,
  randomBytes,
} from 'crypto';

import { IApp } from '@common/models';

export class HashingSystem {
  private readonly algorithm = `aes-256-ctr`;
  private readonly iv = randomBytes(16);

  constructor(private readonly configService: ConfigService) { }

  // Passing password for the tests.
  encrypt(text: string, password: string = null) {
    const ENCRYPTION_PASSWORD: string =
      this.configService?.get<IApp>('APP_CONFIG')?.ENCRYPTION_PASSWORD ??
      password ??
      process.env.ENCRYPTION_PASSWORD;

    const cipher: Cipher = createCipheriv(
      this.algorithm,
      Buffer.from(ENCRYPTION_PASSWORD),
      this.iv,
    );

    let encrypted = cipher.update(text);

    encrypted = Buffer.concat([encrypted, cipher.final()]);

    return this.iv.toString('hex') + ':' + encrypted.toString('hex');
  }

  decrypt(text: string, password: string = null) {
    const ENCRYPTION_PASSWORD: string =
      this.configService?.get<IApp>('APP_CONFIG')?.ENCRYPTION_PASSWORD ??
      password ??
      process.env.ENCRYPTION_PASSWORD;

    const textParts = text.split(':');
    const iv = Buffer.from(textParts.shift(), 'hex');
    const encryptedText = Buffer.from(textParts.join(':'), 'hex');
    const decipher: Decipher = createDecipheriv(
      this.algorithm,
      Buffer.from(ENCRYPTION_PASSWORD),
      iv,
    );
    let decrypted = decipher.update(encryptedText);

    decrypted = Buffer.concat([decrypted, decipher.final()]);

    return decrypted.toString();
  }
}
