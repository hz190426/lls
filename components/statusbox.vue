<template>
    <div>
      <div>{{label}}</div>
      <div>Base:{{basestatus}}</div>
      <div>Add:
        <select v-model="state">
            <option v-for="i in maxpoint" :value="i" :key="i" >{{i}}</option>
        </select>
      </div>
        {{state}}
    </div>
</template>
<script>
export default {
  props: {// propsを使うと引数を受け取れるようになる
    "label":String,
    "param":String,
    "maxstatus":Number
},

  computed: {
    basestatus(){
        return this.$store.state.character.status.base[this.param]
    },
     state: {
       get(){
        return this.$store.state.character.status.add[this.param]
       },
       set(value){
         console.log(value);
          this.$store.commit('character/set_addstatus',{param:this.param,value:value})
       }
      
    },
    maxpoint(){
      let maxpoint = 50
      let usepoint = maxpoint - this.$store.state.character.status.base[this.param] - this.$store.state.character.status.rem[this.param] - this.$store.state.character.status.elixir[this.param]
      if(usepoint < 0)usepoint = 0
      return [...Array(usepoint+1)].map((_, i) => i) 

    }
 
  }
}
</script>