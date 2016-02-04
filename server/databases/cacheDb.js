import redis from 'redis';

export const connectToCacheDatabase = () => {
  try {
    const url = process.env.REDISCLOUD_URL || 'redis://toomastahvesredis:password@pub-redis-10130.eu-central-1-1.1.ec2.redislabs.com:10130';
    const client = redis.createClient(url, { no_ready_check: true });
    client.on('connect', () => {
      console.log('Connected to redis connectToCacheDatabase');
    });
    return client;
  } catch(e) {
    console.log('Error while connecting to Redis. Check connection string.');
  }
};
