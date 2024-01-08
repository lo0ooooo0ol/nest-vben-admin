import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToOne, Relation } from "typeorm";
import { AbstractEntity } from "~/common/entity/abstract.entity";
import { UserEntity } from "~/modules/user/entities/user.entity";
import { ArticleEntity } from "../article/article.entity";

@Entity({name:'blog_column'})
export class ColumnEntity extends AbstractEntity{
    @Column()
    @ApiProperty({ description: '分类专栏标题' })
    title: string;
    @Column()
    @ApiProperty({ description: '分类专栏内容' })
    description: string;
    @Column()
    @ApiProperty({ description: '分类专栏封面' })
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
    @ManyToOne(() => UserEntity)
    @JoinColumn({ name: 'user_id' })
    user: Relation<UserEntity>
    article:Relation<ArticleEntity>
}