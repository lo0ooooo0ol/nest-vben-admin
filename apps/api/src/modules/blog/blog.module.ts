import { Module } from "@nestjs/common";
import { ArticleModule } from "./article/article.module";
import { RouterModule } from "@nestjs/core";
const modules = [ArticleModule];

@Module({
  imports: [
    ...modules,
    RouterModule.register([
      { path: "blog", module: BlogModule, children: [...modules] },
    ]),
  ],
  exports: [...modules],
})
export class BlogModule {}
