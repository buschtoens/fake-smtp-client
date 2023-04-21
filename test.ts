import * as dotenv from 'dotenv';
import { getMails, type FakeSMTPOptions } from './api.js';

dotenv.config();

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      FAKE_SMTP_URL: string;
      FAKE_SMTP_USERNAME?: string;
      FAKE_SMTP_PASSWORD?: string;
    }
  }
}

const options: FakeSMTPOptions = {
  url: process.env.FAKE_SMTP_URL,
  username: process.env.FAKE_SMTP_USERNAME,
  password: process.env.FAKE_SMTP_PASSWORD,
};

const mails = await getMails(options);
console.log(mails);
