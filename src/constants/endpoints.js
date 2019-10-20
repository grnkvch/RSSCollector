export const BACK_END = process.env.NODE_ENV === 'development'
  ? 'http://localhost:3001'
  : 'https://rss-collector-back.herokuapp.com';