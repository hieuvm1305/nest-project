import { MigrationInterface, QueryRunner } from 'typeorm';

export class UpdateUserTable1768893411040 implements MigrationInterface {
  name = 'UpdateUserTable1768893411040';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "user" DROP CONSTRAINT "UQ_638bac731294171648258260ff2"`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "user" ADD CONSTRAINT "UQ_638bac731294171648258260ff2" UNIQUE ("password")`,
    );
  }
}
