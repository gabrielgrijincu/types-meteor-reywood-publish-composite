import { Mongo } from 'meteor/mongo';

declare module 'meteor/meteor' {
  interface CompositeHandler<T = any> {
    collectionName?: string;
    children?: CompositeHandler<T>[];
    find(): Mongo.Cursor<T>;
  }

  module Meteor {
    function publishComposite(name: string, config: CompositeHandler<any> | CompositeHandler<any>[]): void;

    function publishComposite(
      name: string,
      configFunc: (this: Subscription, ...args: any[]) => CompositeHandler<any> | CompositeHandler<any>[]
    ): void;
  }
}
