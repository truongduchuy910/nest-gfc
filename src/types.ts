import type { FilterQuery, SortOrder } from 'mongoose';
import { PagingInput } from './cursor.entity';

export interface FindManyProps<T = any> {
  filter: FilterQuery<T>;
  paging: PagingInputInterface;
  sort?: {
    key: keyof T;
    KeyType: any;
    order: SortOrder;
  };
  search?: string;
  access?: any;
}

export type Sort<T> = { [K in keyof T]: SortOrder | 'ASC' | 'DESC' };

export class CursorInputInterface {
  after?: string;

  before?: string;
}

export interface PagingInputInterface {
  until?: Date;

  since?: Date;

  limit?: number;

  offset?: number;

  cursors?: CursorInputInterface;

  size?: number;

  search?: string;

  sortBy?: string;
}

export interface PagingProps<T> {
  filter: any;

  key?: keyof T;
  keyBuilder?: any;
  keyOrder?: any;
  sort?: {
    key?: keyof T;
    keyBuilder?: any;
    keyOrder?: any;
  };

  order?: SortOrder;
  search?: string;
  cursors?: {
    after?: any;
    before?: any;
  };

  paging?: PagingInput;
  toEntity?: any;
  limit?: number;
  skip?: number;
}
