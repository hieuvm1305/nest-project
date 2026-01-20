import { Injectable } from '@nestjs/common/decorators';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import {
  CreateUserDto,
  SearchDto,
  SearchResponseDto,
  UpdateUserDto,
  UserResponseDto,
} from './user.dto';
import { Like } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const user = this.userRepository.create(createUserDto);
    const existingUser = await this.userRepository.findOne({
      where: { email: createUserDto.email },
    });
    if (existingUser) {
      throw new Error('User already exists');
    }
    return this.userRepository.save(user);
  }

  async findAll(): Promise<UserResponseDto[]> {
    const users = await this.userRepository.find({
      order: {
        id: 'DESC',
      },
    });
    return users.map((user: User) => new UserResponseDto(user));
  }

  async findOne(id: number): Promise<UserResponseDto | null> {
    const user = await this.userRepository.findOneBy({ id });
    if (!user) {
      throw new Error('User not found');
    }
    return new UserResponseDto(user);
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    const idNumber = Number(id);
    const user = await this.userRepository.findOneBy({ id: idNumber });
    if (!user) {
      throw new Error('User not found');
    }
    return this.userRepository.save({ ...user, ...updateUserDto });
  }

  async findBySearch(searchData: SearchDto): Promise<SearchResponseDto> {
    const { keyword, page, limit } = searchData;
    const condition = keyword
      ? [{ fullName: Like(`%${keyword}%`) }, { email: Like(`%${keyword}%`) }]
      : {};
    const [users, total] = await this.userRepository.findAndCount({
      where: condition,
      take: limit,
      skip: (page - 1) * limit,
    });
    return {
      data: users.map((user: User) => new UserResponseDto(user)),
      total,
      page,
      limit,
    };
  }
}
