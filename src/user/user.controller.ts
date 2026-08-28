import { Controller, Get, Query, Param,Put, Post, Body, Delete, ParseIntPipe, UseGuards} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserService } from './user.service';
import { RoleGuard } from 'src/guards/role.guard';
// Do not export entity types from controller method signatures



@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    //GET /user
    @Get()
    getUsers(@Query('name') name: string): unknown {
      
      return this.userService.findAllUsers(name);
    }
    @Get(':id')
    getUserById(@Param('id', ParseIntPipe) id: number) {
        return this.userService.findOneUser(id);
  }
  @Post()
  createUser(@Body() createUserDto: CreateUserDto): any {
    return this.userService.createUser(createUserDto);
  }

  @Put(':id')
    updateUser(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto): any {
      return  this.userService.updateUser(Number(id), updateUserDto);
    }

  @Delete(':id')
  @UseGuards(RoleGuard)
  deleteUser(@Param('id') id: string): any {
    return this.userService.deleteUser(Number(id));
  }
 }
