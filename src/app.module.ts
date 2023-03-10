import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoController } from './todo/todo.controller';
import { TodoService } from './todo/todo.service';
import { TodoModule } from './todo/todo.module';

@Module({
  imports: [TodoModule, MongooseModule.forRoot('mogongodb://localhost/nest')],
  controllers: [AppController, TodoController],
  providers: [AppService, TodoService],
})
export class AppModule {}
