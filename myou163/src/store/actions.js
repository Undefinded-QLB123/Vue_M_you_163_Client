import {
  CHANGE_ACTIVE,
  CHANGE_HEADER_TAB,
  CHANGE_TYPES_TAB,
  CHANGE_MYLIST_TAB,
  RECEIVE_KINGKONGMODULE
} from "./mutations-type";

import {
  reqmsite
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
}
