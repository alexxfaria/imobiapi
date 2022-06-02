import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateAds1648345841558 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
    await queryRunner.createTable(
      new Table({
        name: 'ads',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'description',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'type',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'sale_price',
            type: 'decimal',
            precision: 10,
            scale: 2,
            isNullable: true,
          },
          {
            name: 'rent_price',
            type: 'decimal',
            precision: 10,
            scale: 2,
            isNullable: true,
          },
          {
            name: 'sale',
            type: 'boolean',
            default: false,
          },
          {
            name: 'rent',
            type: 'boolean',
            default: false,
          },
          {
            name: 'land_area',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'building_area',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'bedrooms',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'suite',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'restroom',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'garage',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'address',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'number',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'complements',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'district',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'city',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'state',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'country',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'zip',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'id_people',
            type: 'uuid',
            isNullable: true,
          },
          {
            name: 'service_area',
            type: 'boolean',
            default: false,
          },
          {
            name: 'closets_room',
            type: 'boolean',
            default: false,
          },
          {
            name: 'cabinets_kitchen',
            type: 'boolean',
            default: false,
          },
          {
            name: 'furnished',
            type: 'boolean',
            default: false,
          },
          {
            name: 'air_conditioning',
            type: 'boolean',
            default: false,
          },
          {
            name: 'grill',
            type: 'boolean',
            default: false,
          },
          {
            name: 'balcony',
            type: 'boolean',
            default: false,
          },
          {
            name: 'gym',
            type: 'boolean',
            default: false,
          },
          {
            name: 'pool',
            type: 'boolean',
            default: false,
          },
          {
            name: 'servant_room',
            type: 'boolean',
            default: false,
          },
          {
            name: 'gated_community',
            type: 'boolean',
            default: false,
          },
          {
            name: 'elevator',
            type: 'boolean',
            default: false,
          },
          {
            name: 'security',
            type: 'boolean',
            default: false,
          },
          {
            name: 'concierge',
            type: 'boolean',
            default: false,
          },
          {
            name: 'animals_allowed',
            type: 'boolean',
            default: false,
          },
          {
            name: 'condominium_gym',
            type: 'boolean',
            default: false,
          },
          {
            name: 'condominium_pool',
            type: 'boolean',
            default: false,
          },
          {
            name: 'party_room',
            type: 'boolean',
            default: false,
          },
          {
            name: 'exclusive',
            type: 'boolean',
            default: false,
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
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('ads');
  }
}
