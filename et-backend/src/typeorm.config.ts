import { join } from 'path';
import { DataSource } from 'typeorm';

const AppDataSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'test',
    database: 'postgres',
    entities: [join(__dirname, '**', '*.entity.{ts,js}')],
    synchronize: true,
    migrations: ['dist/migrations/*.js'],
});

export default AppDataSource;
