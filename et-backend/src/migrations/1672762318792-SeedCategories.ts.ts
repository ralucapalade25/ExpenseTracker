import { MigrationInterface, QueryRunner } from 'typeorm';

export class SeedCategories1672762318791 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
     INSERT INTO public.category(
        category_id, name, image_path, creation_date, updated_date, active)
        VALUES 
        (1, 'Groceries', 'groceries.png', '2025-01-01 10:00:00', '2025-01-01 10:00:00', true),
        (2, 'Coffee', 'coffee.png', '2025-01-02 12:00:00', '2025-01-02 12:00:00', true),
        (3, 'Gifts', 'gifts.png', '2025-01-09 13:25:00', '2025-01-09 13:25:00', true),
        (4, 'Health', 'health.png', '2025-01-08 16:00:00', '2025-01-08 16:00:00', true),
        (5, 'Transportation', 'transportation.png', '2025-01-03 08:30:00', '2025-01-03 08:30:00', true),
        (6, 'Social life', 'social-life.png', '2025-01-05 09:20:00', '2025-01-05 09:20:00', true),
        (7, 'Sport', 'sport.png', '2025-01-07 11:15:00', '2025-01-07 11:15:00', true),
        (8, 'Education', 'education.png', '2025-01-07 11:15:00', '2025-01-07 11:15:00', true),
        (9, 'Savings', 'savings.png', '2025-01-10 10:05:00', '2025-01-10 10:05:00', true);
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      DELETE FROM public.category;
    `);
  }
}