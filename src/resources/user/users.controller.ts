import { ResponseInterceptor } from '@common/interceptors';

import { UsersService } from './users.service';

import { ApiBearerAuth, ApiTags, ApiOperation } from '@nestjs/swagger';
import {
  Controller,
  Delete,
  Get,
  HttpCode,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { AuthUserGuard, CheckTokenGuard } from '@common/guards';

import { User } from '@common/database/entities';
import { AuthUser } from '@common/decorators';

import { ITokenPayload } from '@common/models';
import { MessageSuccessDTO } from '@common/dtos';
import { HttpStatus } from '@nestjs/common/enums';

@ApiTags('Users')
@Controller('users')
@ApiBearerAuth()
export class UsersController {
  constructor(private readonly _usersService: UsersService) { }

  @Get('me')
  @UseGuards(AuthUserGuard)
  @UseInterceptors(new ResponseInterceptor(User))
  @ApiOperation({
    summary: 'This API aimed to get the users data.',
  })
  async getUserProfile(@AuthUser() user: ITokenPayload): Promise<User> {
    return this._usersService.getUserProfile(user);
  }

  @Delete()
  @HttpCode(HttpStatus.NO_CONTENT)
  @UseGuards(CheckTokenGuard)
  @ApiOperation({
    summary: 'This API aimed to delete the authorized user.',
    description: 'This API is working ONLY in DEV environment',
  })
  async deleteAuthorizedUser(
    @AuthUser() user: ITokenPayload,
  ): Promise<MessageSuccessDTO> {
    return this._usersService.deleteAuthorizedUser(user);
  }
}
