import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity } from "typeorm";
import { AbstractEntity } from "~/common/entity/abstract.entity";

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
    like:number
    @Column({ type: 'tinyint', nullable: true, default: 0 })
    @ApiProperty({ description: '浏览量' })
    view:number
    @Column({name:'is_delete' ,type: 'tinyint', nullable: true, default: 0 })
    @ApiProperty({ description: '删除' })
    isDelete:number
}