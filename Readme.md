# Cryptodex

Invest in all the coins. App for making your own cryptocurrency index fund.

## One-Time Setup

Install NPM: https://nodejs.org/en/download/

Clone this repo:

```
git clone https://github.com/rossgeesman/cryptodex.git cryptodex
```
Install app and client dependencies:

```
cd client
npm install

cd server
npm install
```

##Login
Login is handled through a non-graphql endpoint at /login.
Using curl:
```
curl -H "Content-type: application/json" "http://localhost:3001/login" -X POST -d '{"email":"User1@email.com", "password":"password"}'
```

