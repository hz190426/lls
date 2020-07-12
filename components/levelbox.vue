<template>
    <div>{{label}}
        <select v-model="state">
            <option v-for="i in levelList" :value="i" :key="i" >{{i}}</option>
        </select>

    </div>
</template>
<script>
export default {
  props: {// propsを使うと引数を受け取れるようになる
    "label":String,
},

  computed: {
     state: {
       get(){
        return this.$store.state.character.level;
       },
       set(value){
              this.$store.commit('character/changelevel',value);
  //        this.$store.dispatch('character/setClassData',value,{ root: true });
       }
      
    },
    levelList() {
        return [...Array(100)].map((_, i) => i+1) 
    }
  },
  methods:{
      changeclass(){

      }
  },
  mounted:function(){
    //   this.$store.dispatch('character/setClassData',this.$store.state.character.class,{ root: true });
  }
}
</script>