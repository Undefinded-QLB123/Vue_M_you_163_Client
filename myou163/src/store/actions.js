import {
  CHANGE_ACTIVE,
  CHANGE_HEADER_TAB,
  CHANGE_TYPES_TAB,
  CHANGE_MYLIST_TAB,
  RECEIVE_KINGKONGMODULE,
  RECEIVE_CATEGORY
} from "./mutations-type";

import {
  reqmsite,
  reqcategory
} from '../api'

export default {
  changeActive({commit}, id) {
    commit(CHANGE_ACTIVE, id)
  },
  changeHeadertabActive({commit}, id) {
    commit(CHANGE_HEADER_TAB, id)
  },
  changeTypesabActive({commit}, id) {
    commit(CHANGE_TYPES_TAB, id)
  },
  changeMylistActive({commit}, id) {
    commit(CHANGE_MYLIST_TAB, id)
  },
  async getkingKongModule({commit},callback) {
    const result = await reqmsite();
    if (result.code===0) {
      const kingKongModule = result;
      commit(RECEIVE_KINGKONGMODULE, [kingKongModule]);
      typeof callback === 'function' && callback()
    }
  },
  async getcategory({commit}, callback) {
    const result = await reqcategory();
    if (result.code === 0) {
      const category = result;
      commit(RECEIVE_CATEGORY, [category]);
      typeof callback === 'function' && callback()
    }
  },
}
