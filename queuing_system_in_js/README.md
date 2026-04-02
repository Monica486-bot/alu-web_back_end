# Queuing System in JS

Redis-based queuing system using Node.js, Kue, and Express.

## Setup

```bash
npm install
```

## Redis

Download and compile Redis:
```bash
wget http://download.redis.io/releases/redis-6.0.10.tar.gz
tar xzf redis-6.0.10.tar.gz
cd redis-6.0.10
make
src/redis-server &
```

Set the Holberton key:
```bash
src/redis-cli set Holberton School
```
