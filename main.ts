import { NestFactory } from "@nestjs/core";
import { Module } from "@nestjs/common";
import "@nestjs/platform-express";
import {HelloService} from "./services/HelloService.ts";
import {HelloController} from "./controllers/HelloController.ts";

@Module({
  providers: [HelloService],
  controllers: [HelloController],
})
class AppModule {}

const app = await NestFactory.create(AppModule);
app.listen(3000);
