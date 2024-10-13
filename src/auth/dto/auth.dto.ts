import { ApiProperty } from '@nestjs/swagger';

export class AuthPayloadDto {
  @ApiProperty()
  usernameOrEmail: string;

  @ApiProperty()
  password: string;
}
