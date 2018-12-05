import {
  CHANGE_ACTIVE,
  CHANGE_HEADER_TAB,
  CHANGE_TYPES_TAB,
  CHANGE_MYLIST_TAB,
  RECEIVE_KINGKONGMODULE,
  RECEIVE_CATEGORY
} from './mutations-type'
export default {
  [CHANGE_ACTIVE](state, id) {
    state.footList.forEach(list => {
      list.isActive = false
    });
    state.footList[id].isActive = true
  },
  [CHANGE_HEADER_TAB](state, id) {
    state.headertabList.forEach(list => {
      list.isActive = false
    })
    state.headertabList[id].isActive = true
  },
  [CHANGE_TYPES_TAB](state, id) {
    state.typesTabs.forEach(list => {
      list.isActive = false
    })
    state.typesTabs[id].isActive = true
  },
  [CHANGE_MYLIST_TAB](state, id) {
    state.mylist.forEach(list => {
      list.isActive = false
    })
    state.mylist[id].isActive = true
  },
  [RECEIVE_KINGKONGMODULE](state,[kingKongModule]){
    state.kingKongModule= kingKongModule
  },
  [RECEIVE_CATEGORY](state,[category]){
    state.category = category
  }
}
