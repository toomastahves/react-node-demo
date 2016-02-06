import redis from 'redis';
import config from '../config/';

export const connectToCacheDatabase = () => {
  try {
    const url = process.env.REDISCLOUD_URL || config.REDISCLOUD_URL;
    const client = redis.createClient(url, { no_ready_check: true });
    client.on('connect', () => {
      console.log('Connected to redis connectToCacheDatabase');
    });
    return client;
  } catch(e) {
    console.log('Error while connecting to Redis. Check connection string.');
  }
};
