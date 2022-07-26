import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class CreatePhotosAds1648345187266 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
    await queryRunner.createTable(
      new Table({
        name: 'photos_ads',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'photo',
            type: 'text',
            isNullable: true,
          },
          {
            name: 'id_ads',
            type: 'uuid',
          },
          {
            name: 'active',
            type: 'boolean',
            default: true,
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );
    await queryRunner.createForeignKey(
      'photos_ads',
      new TableForeignKey({
        name: 'AdsPhotos',
        columnNames: ['id_ads'],
        referencedTableName: 'photos_ads',
        referencedColumnNames: ['id'],
        onDelete: 'SET NULL',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('ads', 'AdsPeople');
    await queryRunner.dropTable('photos_ads');
  }
}
