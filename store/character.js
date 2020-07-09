export const state = () => ({
    status:{
        str: 10,
        int: 10
    }

  })
  
  export const mutations = {
    add (state, text) {

    },
    remove (state, { todo }) {
    //  state.list.splice(state.list.indexOf(todo), 1)
    },
    toggle (state, todo) {
     // todo.done = !todo.done
    },
    addstatus(state,param){
      console.log(state.status);
      console.log(param)
      state.status[param]++;
      console.log("add")
      console.log(state.status[param]);
    }
  }