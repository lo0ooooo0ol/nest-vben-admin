import { ApiProperty } from "@nestjs/swagger";
import { Column, CreateDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToOne, Relation } from "typeorm";
import { AbstractEntity } from "~/common/entity/abstract.entity";
import { UserEntity } from "~/modules/user/entities/user.entity";
import { ColumnEntity } from "../column/column.entity";

@Entity({ name: 'blog_article' })
export class ArticleEntity extends AbstractEntity {
  @Column()
  @ApiProperty({ description: '文章标题' })
  title: string;
  @Column()
  @ApiProperty({ description: '文章内容' })
  content: string;
  @Column()
  @ApiProperty({ description: '文章封面' })
  cover: string
  @Column({ type: 'tinyint', nullable: true, default: 0 })
  @ApiProperty({ description: '点赞' })
  likes: number
  @Column({ type: 'tinyint', nullable: true, default: 0 })
  @ApiProperty({ description: '浏览量' })
  views: number
  @Column({ name: 'comments_count', type: 'tinyint', nullable: true, default: 0 })
  @ApiProperty({ description: '评论量' })
  commentsCount: number
  @Column({ name: 'is_delete', type: 'tinyint', nullable: true, default: 0 })
  @ApiProperty({ description: '删除' })
  isDelete: number
  @Column({ type: 'tinyint', nullable: true, default: 0 })
  @ApiProperty({ description: '草稿箱' })
  is_draft: number

  @Column({ type: 'simple-array' })
  tags: string[];

  @ManyToMany(() => ColumnEntity, column => column.article)
  @JoinTable({
    name: 'blog_article_column',
    joinColumn: { name: 'article_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'column_id', referencedColumnName: 'id' },
  })
  column: Relation<ColumnEntity[]>

  @Column()
  author_id: number

  @CreateDateColumn({ name: 'publish_at',nullable: true, comment: '发布时间',type: 'datetime' })
  publishAt: Date

  @Column({ type: 'tinyint', nullable: true, default: 0 })
  @ApiProperty({ description: '状态' })
  status: number
}