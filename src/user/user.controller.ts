import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateUserDto, SearchDto } from './user.dto';
import { UserService } from './user.service';
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.userService.createUser(createUserDto);
  }

  @Get('getAll')
  findAll() {
    return this.userService.findAll();
  }

  @Get('getById/:id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Post('search')
  search(@Body() searchDto: SearchDto) {
    return this.userService.findBySearch(searchDto);
  }
}
