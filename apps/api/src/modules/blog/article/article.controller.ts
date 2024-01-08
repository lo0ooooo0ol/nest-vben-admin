import { Body, Controller, Get, Post, Query } from "@nestjs/common";
import { ArticleService } from "./article.service";
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { ApiSecurityAuth } from "~/common/decorators/swagger.decorator";
import {
  Perm,
  PermissionMap,
} from "~/modules/auth/decorators/permission.decorator";
import { PagerDto } from "~/common/dto/pager.dto";
import { ArticleDto } from "./article.dto";
import { UserEntity } from "~/modules/user/entities/user.entity";

export const permissions: PermissionMap<"blog:article"> = {
  LIST: "blog:article:list",
  CREATE:"blog:article:create",
} as const;

@ApiTags("Blog - 内容模块")
@ApiSecurityAuth()
@Controller("article")
export class ArticleController {
  constructor(private articleService: ArticleService) {}
  @Get()
  @ApiOperation({ summary: "获取内容列表" })
  @Perm(permissions.LIST)
  async list(@Query() dto: PagerDto) {
    return this.articleService.findAll(dto)
  }
  @Post("/create")
  @ApiOperation({ summary: "创建内容" })
  @Perm(permissions.CREATE)
  async create(@Body() dto: ArticleDto) {
    return await this.articleService.create(dto)
  }
}
