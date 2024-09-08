import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { DRIZZLE } from '../drizzle/drizzle.module';
import { DrizzleDB } from '../drizzle/types/drizzle';
import { users } from '../drizzle/schema/users.schema';
import { roles, userRole } from '../drizzle/schema/roles.schema';
import { eq } from 'drizzle-orm';

@Injectable()
export class UserService {
  constructor(@Inject(DRIZZLE) private db: DrizzleDB) {}

  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  findAll() {
    return this.db.query.users.findMany({
      with: {
        userRole: {
          columns: {},
          with: {
            role: true,
          },
        },
      },
    });
  }

  findOne(id: number) {
    return this.db.query.users.findMany({
      where: eq(users.id, id),
      with: {
        userRole: {
          columns: {},
          with: {
            role: true,
          },
        },
      },
    });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
