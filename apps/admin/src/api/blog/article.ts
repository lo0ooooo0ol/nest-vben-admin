/*
 * @Author: lion mleganza@163.com
 * @Date: 2024-01-04 20:04:17
 * @LastEditors: lion mleganza@163.com
 * @LastEditTime: 2024-01-04 20:09:22
 * @FilePath: \nest-vben-admin\apps\admin\src\api\blog\article.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { BasicPageParams } from '../model/baseModel';
// import { Dept } from './dept';
// import { Role } from './role';
import { defHttp } from '/@/utils/http/axios';






enum Api {
  Article = '/blog/article',
}

export const getArticleList = (params?: BasicPageParams) =>
  defHttp.get({ url: Api.Article, params });

