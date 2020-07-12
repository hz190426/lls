import ClassData from '~/assets/json/character_class_data.json'

// 状態管理
export const state = () => ({
    json: {
      classdata:ClassData
    }
})

// getters
export const getters = {
  getAll (state) {
    return state.json
  },
  getclass(state,key){
    return state.json.classdata[key];
  }
}