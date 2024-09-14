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

  async create(createUserDto: CreateUserDto) {
    return this.db
      .insert(users)
      .values(createUserDto)
      .returning({ insertedId: users.id });
  }

  async findAll() {
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

  async findOne(id: number) {
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

  async update(id: number, updateUserDto: UpdateUserDto) {
    const updatedUserId: { updatedId: number }[] = await this.db
      .update(users)
      .set(updateUserDto)
      .where(eq(users.id, id))
      .returning({ updatedId: users.id });

    return updatedUserId;
  }

  async remove(id: number) {
    this.db.delete(users).where(eq(users.id, id));
  }
}
