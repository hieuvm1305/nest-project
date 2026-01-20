
Nest use DI pattern, class OOP and is simmilar to Spring boot of Java
The project connect to Postgres database with TypeORM and use migration to control db changes.
## Project setup
```bash
$ yarn
```
## Compile and run the project
# development
$ yarn start

# watch mode
$ yarn start:dev

# production mode
$ yarn start:prod
```
# nest cli
$ nest g module ${ModuleName}
$ nest g controller ${ControllerName}
$ nest g service ${ServiceName}
$ nest g guard auth
cli command to generate resource(rcmd)
$ nest g resource ${resourceName}
# generate migration

```bash
$ yarn run migration:generate -- src/migrations/${MigrationName}
```
# run migration
```bash
$ yarn run migration:run
```
# revert migration
```bash
$ yarn run migration:revert
```
## Run tests

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ yarn install -g @nestjs/mau
$ mau deploy
```
