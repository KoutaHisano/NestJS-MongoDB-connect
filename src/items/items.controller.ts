import { Body, Controller, Delete, Get, Param, Patch, Post, ValidationPipe } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { ItemsService } from './items.service';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService){}

  // 全取得
  @Get()
  findALl() {
    return this.itemsService.findAll();
  }

  // 個別取得
  @Get(':name')
  findOne(@Param('name') name: string) {
    return this.itemsService.findOne(name);
  }

  // 新規作成
  @Post()
  create(@Body(ValidationPipe) createItem: CreateItemDto) {
    return this.itemsService.create(createItem);
  }

  // 編集機能
  @Patch(':name')
  update(
    @Param('name') name: string,
    @Body(ValidationPipe) updateItem: UpdateItemDto
  ) {
    return this.itemsService.update(name, updateItem);
  }

  // 削除
  @Delete(':name')
  delete(@Param('name') name: string) {
    this.itemsService.delete(name);
  }
}
