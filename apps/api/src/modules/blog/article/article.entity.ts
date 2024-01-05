import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, JoinColumn, OneToOne, Relation } from "typeorm";
import { AbstractEntity } from "~/common/entity/abstract.entity";
import { UserEntity } from "~/modules/user/entities/user.entity";

@Entity({name:'blog_article'})
export class ArticleEntity extends AbstractEntity{
    @Column()
    @ApiProperty({ description: '文章标题' })
    title: string;
    @Column()
    @ApiProperty({ description: '文章内容' })
    content: string;
    @Column()
    @ApiProperty({ description: '文章作者' })
    author: string;
    @Column()
    @ApiProperty({ description: '文章封面' })
    cover:string
    @Column({ type: 'tinyint', nullable: true, default: 0})
    @ApiProperty({ description: '点赞' })
    likes:number
    @Column({ type: 'tinyint', nullable: true, default: 0 })
    @ApiProperty({ description: '浏览量' })
    views:number
    @Column({name:'comments_count', type: 'tinyint', nullable: true, default: 0 })
    @ApiProperty({ description: '评论量' })
    commentsCount:number
    @Column({name:'is_delete' ,type: 'tinyint', nullable: true, default: 0 })
    @ApiProperty({ description: '删除' })
    isDelete:number
    @Column({type: 'tinyint', nullable: true, default: 0 })
    @ApiProperty({ description: '草稿箱' })
    is_draft:number
    @OneToOne(() => UserEntity)
    @JoinColumn({ name: 'author_id' })
    @ApiProperty({ description: '用户id' })
    article: Relation<UserEntity>
}