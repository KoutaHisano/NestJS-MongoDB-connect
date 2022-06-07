import * as mongoose from 'mongoose';

export interface Item extends mongoose.Document {
  // id: string;
  name: string;
  price: number;
  description: string;
}