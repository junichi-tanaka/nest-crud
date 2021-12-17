import {MigrationInterface, QueryRunner} from "typeorm";

export class createUser1639752880654 implements MigrationInterface {
    name = 'createUser1639752880654'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "firstName" varchar NOT NULL, "lastName" varchar NOT NULL, "age" integer NOT NULL, "isActive" boolean NOT NULL DEFAULT (1))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
