import { Module } from "@nestjs/common";
import { RouterModule } from "@nestjs/core";
import { ArticleModule } from "./article/article.module";
import { ColumnModule } from './column/column.module';
const modules = [ArticleModule,ColumnModule];

@Module({
  imports: [
    ...modules,
    RouterModule.register([
      { path: "blog", module: BlogModule, children: [...modules] },
    ]),
  ],
  exports: [...modules],
  controllers: [],
  providers: [],
})
export class BlogModule {}
