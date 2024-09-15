import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DrizzleModule } from './drizzle/drizzle.module';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';

const envFilePath =
  process.env.NODE_ENV !== 'test'
    ? ['.env.local', '.env']
    : ['.env.test.local', '.env.test'];

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath,
    }),
    DrizzleModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
