import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CatsService } from './cats.service';
import { ApiBody, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateCatDto } from './models/create-cat.dto';
import { UpdateCatDto } from './models/update-cat.dto';
import { CatResponse, CatsListResponse } from './models/response-cat.dto';

@ApiTags('cats')
@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Post()
  @ApiBody({ type: CreateCatDto })
  @ApiResponse({ status: 201, type: CatResponse })
  create(@Body() createCatDto: CreateCatDto) {
    return this.catsService.create(createCatDto);
  }

  @Get()
  @ApiResponse({ status: 200, type: CatsListResponse })
  findAll() {
    return this.catsService.findAll();
  }

  @Get(':id')
  @ApiParam({ name: 'id', type: String })
  @ApiResponse({ status: 200, type: CatResponse })
  findOne(@Param('id') id: string) {
    return this.catsService.findOne(id);
  }

  @Put(':id')
  @ApiParam({ name: 'id', type: String })
  @ApiBody({ type: UpdateCatDto })
  @ApiResponse({ status: 200, type: CatResponse })
  update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
    return this.catsService.update(id, updateCatDto);
  }

  @Delete(':id')
  @ApiParam({ name: 'id', type: String })
  @ApiResponse({ status: 204 })
  delete(@Param('id') id: string) {
    return this.catsService.delete(id);
  }
}
