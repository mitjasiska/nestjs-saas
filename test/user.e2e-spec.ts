import { Test } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { beforeAll, beforeEach, describe, it } from 'vitest';
import { AppModule } from '../src/app.module';
import { dropAllTables } from '../drizzle/utils/drop';
import { migrateDb } from '../drizzle/utils/migrate';

describe('UserController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    await dropAllTables();
    await migrateDb();
  });

  beforeEach(async () => {
    const moduleFixture = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/user (GET)', () => {
    return request(app.getHttpServer()).get('/user').expect(200).expect([]);
  });
});
