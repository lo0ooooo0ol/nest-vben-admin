/*
 * @Author: lion mleganza@163.com
 * @Date: 2024-01-04 20:04:17
 * @LastEditors: lion mleganza@163.com
 * @LastEditTime: 2024-01-04 20:08:37
 * @FilePath: \nest-vben-admin\apps\api\src\modules\blog\article\article.entity.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
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