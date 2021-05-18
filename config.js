const env = process.env.REACT_APP_ENV;
const dev = process.env.REACT_APP_ENV === 'development';

const config = {
  env,
  dev,
}

export default config;