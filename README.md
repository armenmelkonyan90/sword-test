## Description

Sword project..

## Installation

```bash
$ npm run install --frozen-lockfile
```

## .env

All of the environment keys are stored in the hidden file.

## Running the app locally

```bash
# docker-compose db
$ docker-compose -f postgres.yml up

# development
$ npm run start

# watch mode
$ npm run start:dev

```

### Database

```
To create the database.
Create the environment keys in the docker.env file. 

And run

$ docker-compose -f postgres.yml up

The container will be created. And you can ping to database with the PORT which you provided in the docker env.

```

## Database migration

1st option.

```
Make synchronize property in the Database connection instance as true.  NOT RECOMMENDED. As per there is a risk to lose a data.
(USE in development mode).
```

2nd option.

```bash
# The migration file will be created in the /src/common/database/migrations/ folder.
$ npm run migration:generate tutorial

# Build the project
$ npm run build

# Migration will be done
$ npm run migration:up

# Migration will be reverted.
$ npm run migration:down

```

### AWS

```
To deploy the project into AWS lambda function you should have correct
AWS keys.

To set the keys use these commands

WINDOWS

SET AWS_ACCESS_KEY_ID=
SET AWS_SECRET_ACCESS_KEY=

LINUX 

export AWS_ACCESS_KEY_ID=
export AWS_SECRET_ACCESS_KEY=

To deploy the project into lambda use the following command.

sls deploy -v

Make sure the serverless.yaml is setup correctly before doing any updates in
lambda version. 

```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Test environment keys

```
Please be sure to have your environment keys in the jest/.env.ts file(The file is ignored in git).
Example format of the enviroment key.

jest/.env.ts

process.env.ENVIRONMENT=development

```

## Basics

```
1. The project includes swagger to document all of the API endpoints. To see the swagger list use this link ${host}:${port}/api
2. Use .env files (.development.env , .production.env & etc.) to set environment variables, which will never be pushed to the repo, because the .env files exists in .gitignore.
3. Here is simple example of .env file.

PORT=5000
DATABASE_USER=test_user
DATABASE_PASSWORD=test_password
DATABASE_NAME=test_name
DATABASE_PORT=5432
DATABASE_HOST=test_host
NODE_TLS_REJECT_UNAUTHORIZED=0

4. Using class-validator to validate requests.
 Read more here (https://www.npmjs.com/package/class-validator).

```

## SRC

The source(src) folder of project includes 2 basic folders.

They are: common and resources.

- common

Under common folder shared the files which could be used in multiple places.

E.g:

```
- Constants

1. All constants kept in constants file are also sorted. Placed into `src/common/constants`.

- Models

1. All the shared models can be used in different functions placed into `src/common/models`.

- Middlewares

1. All of the middlewares placed into `src/common/middlewares`.

- Cron

1. All of the cron jobs placed into `src/common/cron.

- Database

1. Database folder placed into `src/common/database`.
2. Under database folder kept the entitites, migrations and mocks(For test purposes).

- Helpers

1. All of the helper functions can be used in different functions placed into `src/common/helpers`.

```

- resources

Using resources folder to create API endpoints.

```
All of the resources placed into `src/resources/`.

Each of the resources should contain 3 files.

1. ${resource_name}.controller.ts
2. ${resource_name}.module.ts
3. ${resource_name}.service.ts

For creating a resource, use cli running following command

nest g res ${resource-name} resources

Add --no-spec to disable spec files generation.

Depending on resource requirement it may contain other folders, such as dto, helpers, strategies,
 guards and etc, Please note, the files in the folder will not be used in other resources, otherwise
 you should put them in common folder.

```

## Features

- i18n

I18n is a lightweight simple translation module with dynamic JSON storage.
Please see this documentation for the details. (https://www.npmjs.com/package/nestjs-i18n)
Keep all kind of messages under i18n folder, sorted by language and resource.

```
This is the example to use the message from this folder.

await this.i18n.translate('auth.WRONG_CREDENTIALS');

```

## Stay in touch

- Documented By - [Matevos Karapetyan]
