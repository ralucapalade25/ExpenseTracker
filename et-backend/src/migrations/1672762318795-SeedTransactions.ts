import { MigrationInterface, QueryRunner } from 'typeorm';

export class SeedCategories1672762318795 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
     INSERT INTO public.transaction(
        transaction_id, amount, date, description, creation_date, updated_date, active, user_id, category_id)
        VALUES 
        (1, 250.75, '2025-01-01', 'Grocery shopping', '2025-01-01 10:00:00', '2025-01-01 10:00:00', true, 26, 1),
        (2, 1500.00, '2025-01-02', 'Monthly rent', '2025-01-02 09:00:00', '2025-01-02 09:00:00', true, 25, 9),
        (3, 120.30, '2025-01-03', 'Utility bill', '2025-01-03 08:30:00', '2025-01-03 08:30:00', true, 26, 9),
        (4, 45.00, '2025-01-04', 'Coffee shop', '2025-01-04 14:00:00', '2025-01-04 14:00:00', true, 26, 2),
        (5, 300.50, '2025-01-05', 'Car maintenance', '2025-01-05 11:00:00', '2025-01-05 11:00:00', true, 26, 5),
        (6, 75.25, '2025-01-06', 'Gym membership', '2025-01-06 07:00:00', '2025-01-06 07:00:00', true, 25, 7),
        (7, 60.00, '2025-01-07', 'Book purchase', '2025-01-07 16:00:00', '2025-01-07 16:00:00', true, 25, 3),
        (8, 500.00, '2025-01-08', 'Insurance premium', '2025-01-08 10:00:00', '2025-01-08 10:00:00', true, 25, 5),
        (9, 20.00, '2025-01-09', 'Movie ticket', '2025-01-09 19:00:00', '2025-01-09 19:00:00', true, 25, 6);
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      DELETE FROM public.transaction;
    `);
  }
}