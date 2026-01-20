import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { CreateUserDto, SearchDto, UpdateUserDto } from './user.dto';
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

  @Put('update/:id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(id, updateUserDto);
  }
}
