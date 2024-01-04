import { Controller, Get, Query } from "@nestjs/common";
import { ArticleService } from "./article.service";
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { ApiSecurityAuth } from "~/common/decorators/swagger.decorator";
import {
  Perm,
  PermissionMap,
} from "~/modules/auth/decorators/permission.decorator";
import { PagerDto } from "~/common/dto/pager.dto";

export const permissions: PermissionMap<"post:article"> = {
  LIST: "post:article:list",
} as const;

@ApiTags("Post - 内容模块")
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
}
