import { Module } from "@nestjs/common";
import { ArticleController } from "./article.controller";
import { ArticleService } from "./article.service";
import { ArticleEntity } from "./article.entity";
import { UserEntity } from "~/modules/user/entities/user.entity";
import { TypeOrmModule } from "@nestjs/typeorm";

const providers = [ArticleService];

@Module({
  imports: [TypeOrmModule.forFeature([ArticleEntity,UserEntity])], // 导入其他模块
  controllers: [ArticleController],
  providers: [...providers],
  exports: [TypeOrmModule, ...providers],
})
export class ArticleModule {}
