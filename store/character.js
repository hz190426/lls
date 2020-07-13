export const state = () => ({
    class:"K",
    level:70,
    point:{
      bonus:0,
      maxbonus:0,
      rem:0
    },
    status:{
      base:{
        str:0,
        dex:0,
        con:0,
        int:0,
        wis:0,
        cha:0
      },
      rem:{
        str:0,
        dex:0,
        con:0,
        int:0,
        wis:0,
        cha:0
      },
      add:{
        str:0,
        dex:0,
        con:0,
        int:0,
        wis:0,
        cha:0
      },
      elixir:{
        str:0,
        dex:0,
        con:0,
        int:0,
        wis:0,
        cha:0
      }
   
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
      state.status[param]++;
    },
    set_addstatus(state,args){
  
      state.status.add[args.param] = args.value;
    },
    //クラスを変更する
    changeclass(state,value){
      state.class = value;
    },
    changeclassData(state,classdata){
      state.status.base.str = classdata.str
      state.status.base.int = classdata.int
      state.status.base.dex = classdata.dex
      state.status.base.con = classdata.con
      state.status.base.wis = classdata.wis
      state.status.base.cha = classdata.cha
    },
    //レベルを変更する
    changelevel(state,value){
      state.level = value;
      state.point.maxbonus = state.level - 50
      let bp = state.level - 50
      bp -=  state.status.add.str
      bp -=  state.status.add.dex
      bp -=  state.status.add.int
      bp -=  state.status.add.con
      bp -=  state.status.add.wis
      bp -=  state.status.add.cha
      state.point.bonus = bp
    }
  }

  export const actions  = {
    setClassData(context,value){
      let classdata = context.rootState.json.json.classdata[value];
      context.commit("changeclassData",classdata);

    }

  }