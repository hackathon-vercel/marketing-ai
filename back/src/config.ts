import { registerAs } from '@nestjs/config';

import { Environment } from './enviroments';

const enviroment = process.env.NODE_ENV;

export default registerAs('config', () => ({
  database: {
    name: process.env.DATABASE_NAME,
    port: process.env.DATABASE_PORT,
    host: process.env.DATABASE_HOST,
    password: process.env.DATABASE_PASSWORD,
    user: process.env.DATABASE_USER,
  },
  ai: {
    gemini: {
      key: process.env.GOOGLE_GENERATIVE_AI_API_KEY,
    },
  },
  enviroment: enviroment,
  isDev: enviroment ? Environment.Development : false,
  isStg: enviroment ? Environment.Staging : false,
  isProd: enviroment ? Environment.Production : false,
}));
