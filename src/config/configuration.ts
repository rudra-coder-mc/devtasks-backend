export default () => ({
  PORT: parseInt(process.env.PORT ?? '3000', 10),
  JWT_SECRET: process.env.JWT_SECRET ?? 'supersecret',
  DATABASE_URL: process.env.DATABASE_URL,
});

export type AppConfig = {
  PORT: number;
  JWT_SECRET: string;
  DATABASE_URL: string;
};
