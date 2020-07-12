<template>
    <div>{{label}}
        <select v-model="state">
            <option v-for="(data,idx) in classList" :value="idx" :key="idx" >{{data.name}}</option>
        </select>
        {{state}}
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
        return this.$store.state.character.class;
       },
       set(value){
         console.log(value);
          this.$store.commit('character/changeclass',value);
          this.$store.dispatch('character/setClassData',value,{ root: true });
       }
      
    },
    classList() {
        return this.$store.state.json.json.classdata;
    }
  },
  methods:{
      changeclass(){

      }
  },
  mounted:function(){
       this.$store.dispatch('character/setClassData',this.$store.state.character.class,{ root: true });
  }
}
</script>