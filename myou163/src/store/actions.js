import {
  CHANGE_ACTIVE,
  CHANGE_HEADER_TAB,
  CHANGE_TYPES_TAB,
  CHANGE_MYLIST_TAB
} from "./mutations-type";

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
  }
}
