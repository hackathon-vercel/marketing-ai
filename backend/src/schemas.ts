import * as Joi from 'joi';

import { Environment } from './enviroments';

export const validationEnvSchema = Joi.object({
  NODE_ENV: Joi.string().equal(Environment.Development, Environment.Production, Environment.Staging).required(),
  DATABASE_NAME: Joi.string().required(),
  DATABASE_PORT: Joi.string().required(),
  DATABASE_HOST: Joi.string().required(),
  DATABASE_PASSWORD: Joi.string().required(),
  DATABASE_USER: Joi.string().required(),
  GOOGLE_GENERATIVE_AI_API_KEY: Joi.string().required(),
});
