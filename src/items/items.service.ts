import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateItemDto } from './dto/create-item.dto';
import { Item } from './interfaces/item.interface';

@Injectable()
export class ItemsService {
  constructor(@InjectModel('Item') private readonly itemModel: Model<Item>) {}
  items: CreateItemDto[] = [];

  // 新規作成
  async create(item: CreateItemDto) {
    const createdItem = new this.itemModel({
      // id: item.id,
      name: item.name,
      price: item.price,
      description: item.description
    })
    return await createdItem.save()
  }

  // 全取得
  async findAll() {
    return await this.itemModel.find().exec();
  }

  // 個別取得
  async findOne(name: string) {
    const item = await this.itemModel.findOne({ name });
    return item;
  }

  // 編集機能
  async update(name, item: CreateItemDto) {
    const updatedItem = await this.itemModel.findOne({ name })
    updatedItem.name = item.name;
    updatedItem.price = item.price;
    updatedItem.description = item.description;
    return await updatedItem.save();
  }

  // 削除
  async delete(name: string) {
    const item = await this.itemModel.findOne({ name });
    return this.itemModel.remove(item);
  }
}
