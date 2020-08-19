# Welcome to Cureka API Backend App 👋
![Version](https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000)
[![Documentation](https://img.shields.io/badge/documentation-yes-brightgreen.svg)](https://www.notion.so/MVP-8c8d78f815f849dc905f67b491d00013)
[![License: ISC](https://img.shields.io/badge/License-ISC-yellow.svg)](#)

> Backend Express App for Cureka. Spec: https://www.notion.so/MVP-8c8d78f815f849dc905f67b491d00013



## How to install
1. Clone the project
2. Run `yarn install`
3. Create postgres database with name `cureka_development`
4. Run migration: `npx sequelize-cli db:migrate`
5. `yarn start:dev` to run hot reload API server at http://localhost:8000

## Usage

```sh
sample
```

#### Database
We use [Sequelize ORM](https://sequelize.org/master/manual/migrations.html) as data layer to work with database.
Some helpful command:

- Run Migration: `npx sequelize-cli db:migrate`
- Rollback: `npx sequelize-cli db:migrate:undo`
- Seed: `npx sequelize-cli db:seed:all`


## Run tests

```sh
npm run test
```

## Things we used in this project
- Yarn
- Express
- Sequelize

## Deployment
TDB

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
