import dotenv from 'dotenv';

const envFile = () => {
  switch (process.env.NODE_ENV) {
    case 'prod':
      return '.env';
    case 'dev':
      return '.env.dev';
    default:
      return '.env.test';
  }
};

dotenv.config({
  path: envFile,
});
