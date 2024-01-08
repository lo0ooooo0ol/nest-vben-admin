import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { paginate } from '~/helper/paginate'
import { Pagination } from '~/helper/paginate/pagination'
import dayjs from "dayjs";

import { ArticleEntity } from "./article.entity";
import { UserEntity } from "~/modules/user/entities/user.entity";
import { PagerDto } from "~/common/dto/pager.dto";
import { ArticleDto } from "./article.dto";

@Injectable()
export class ArticleService {
  constructor(
    @InjectRepository(ArticleEntity)
    private readonly articleRepository: Repository<ArticleEntity>
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>
  ) {}

  async findAll({
    page,
    pageSize,
  }: PagerDto): Promise<Pagination<ArticleEntity>> {
    
    return paginate(this.articleRepository, { page, pageSize })
  }
async create(dto:ArticleDto){
  console.log(dto)
  // const user = await this.userRepository.findOne({id:dto.userId})
  // dto.userId = user.id
  dto.publish_at=dayjs(dto.publish_at).format('YYYY-MM-DD HH:mm:ss') as any
  console.log(dto)
  const article =  this.articleRepository.create(dto)
  return await this.articleRepository.save(article)
}
}
