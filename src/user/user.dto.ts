import {
  IsEmail,
  IsNotEmpty,
  IsString,
  IsNumber,
  IsOptional,
} from 'class-validator';
import { User } from './entities/user.entity';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty({ message: 'Tên không được để trống' })
  fullName: string;

  @IsEmail({}, { message: 'Không đúng định dạng email' })
  @IsNotEmpty({ message: 'Email không được để trống' })
  email: string;

  @IsString()
  @IsNotEmpty({ message: 'Mật khẩu không được để trống' })
  password: string;

  @IsString()
  @IsOptional()
  phone?: string;
}

export class UserResponseDto {
  id: number;
  fullName: string;
  email: string;
  phone: string;
  isActive: boolean;
  isSuperuser: boolean;
  isStaff: boolean;
  isUser: boolean;
  createdAt: Date | string;
  updatedAt: Date | string;

  constructor(user: User) {
    this.id = user.id;
    this.fullName = user.fullName;
    this.email = user.email;
    this.phone = user.phone;
    this.isActive = user.isActive;
    this.isSuperuser = user.isSuperuser;
    this.isStaff = user.isStaff;
    this.isUser = user.isUser;
    this.createdAt = user.createdAt;
    this.updatedAt = user.updatedAt;
  }
}

export class SearchDto {
  keyword: string;

  @IsNumber()
  @IsNotEmpty()
  page: number;

  @IsNumber()
  @IsNotEmpty()
  limit: number;
}

export class SearchResponseDto {
  data: UserResponseDto[];
  total: number;
  page: number;
  limit: number;
}
