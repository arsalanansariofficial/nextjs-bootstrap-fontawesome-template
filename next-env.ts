interface ProcessEnv {
  BASE_URL: string;
}

export default process.env as unknown as ProcessEnv;
