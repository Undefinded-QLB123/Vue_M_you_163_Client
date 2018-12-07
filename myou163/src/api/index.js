/*
与后台交互模块
 */
import ajax from './ajax'

export const reqmsite = () => ajax('/msite');
export const reqcategory =() => ajax('/classify');
/*获取搜索列表内容*/
export const reqSearchContent =(keywordPrefix) => ajax('/api/xhr/search/searchAutoComplete.json',keywordPrefix,'POST');

/*http://m.you.163.com/xhr/search/searchAutoComplete.json*/
