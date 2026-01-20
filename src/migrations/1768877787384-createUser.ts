import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateUser1768877787384 implements MigrationInterface {
  name = 'CreateUser1768877787384';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "user" ("id" SERIAL NOT NULL, "fullName" character varying(255) NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "phone" character varying, "isActive" boolean NOT NULL DEFAULT true, "isSuperuser" boolean NOT NULL DEFAULT false, "isStaff" boolean NOT NULL DEFAULT false, "isUser" boolean NOT NULL DEFAULT true, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "UQ_638bac731294171648258260ff2" UNIQUE ("password"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "user"`);
  }
}
