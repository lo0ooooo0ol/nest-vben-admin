import { ApiProperty, IntersectionType, PartialType } from '@nestjs/swagger'
import { Type } from 'class-transformer'
import {
  ArrayMaxSize,
  ArrayMinSize,
  ArrayNotEmpty,
  IsArray,
  IsDate,
  IsEmail,
  IsIn,
  IsInt,
  IsNumber,
  IsOptional,
  IsString,
  Matches,
  MaxLength,
  MinLength,
  ValidateIf,
} from 'class-validator'
import { isEmpty } from 'lodash'

import { PagerDto } from '~/common/dto/pager.dto'

export class ArticleDto {
  @ApiProperty({ description: '文章标题', example: 'Nest的基本概念，以及如何使用Nest CLI来构建一个简单的Web应用程序' })
  @IsString()
  @MinLength(5)
  @MaxLength(100)
  title: string

  @ApiProperty({ description: '文章内容', example: 'Nest是一个用于构建高效、可扩展的Node.js服务器端应用程序的框架。它是基于Express.js构建的，并且提供了多种新特性和抽象层，可以让开发者更加轻松地构建复杂的应用程序。' })
  @IsOptional()
  content: string

  @ApiProperty({ description: '所在分类专栏' })
  columns: []


  @IsString({ each: true })
  @IsArray()
  tags: string[];

  @ApiProperty({ description: '作者id', type: Number })
  @Type(() => Number)
  @IsInt()
  @IsOptional()
  author_id: number

  
  @ApiProperty({ description: '文章封面', example: 'https://static.iamxk.com/wp-content/uploads/2020/11/9671b598-b7ec-4713-ae35-a44b386f5912.jpg' })
  @IsOptional()
  @IsString()
  cover: string


  @ApiProperty({ description: '保存到草稿箱' })
  @IsOptional()
  @IsNumber()
  is_draft?: number
  @ApiProperty({ description: '发布日期' })
  @IsDate()
  publish_at:Date
  @ApiProperty({ description: '状态' })
  @IsIn([0, 1])
  status: number
}