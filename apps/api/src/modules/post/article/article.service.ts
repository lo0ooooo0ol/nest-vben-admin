import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { paginate } from '~/helper/paginate'
import { Pagination } from '~/helper/paginate/pagination'

import { ArticleEntity } from "./article.entity";
import { PagerDto } from "~/common/dto/pager.dto";

@Injectable()
export class ArticleService {
  constructor(
    @InjectRepository(ArticleEntity)
    private readonly articleRepository: Repository<ArticleEntity>
  ) {}

  async findAll({
    page,
    pageSize,
  }: PagerDto): Promise<Pagination<ArticleEntity>> {
    return paginate(this.articleRepository, { page, pageSize })
  }

}
