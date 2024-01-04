import { BasicPageParams } from '../model/baseModel';
// import { Dept } from './dept';
// import { Role } from './role';
import { defHttp } from '/@/utils/http/axios';






enum Api {
  Article = '/post/article',
}

export const getArticleList = (params?: BasicPageParams) =>
  defHttp.get({ url: Api.Article, params });

