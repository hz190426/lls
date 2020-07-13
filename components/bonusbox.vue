<template>
    <div>{{label}}:{{state}}
    </div>
</template>
<script>
export default {
  props: {// propsを使うと引数を受け取れるようになる
    "label":String,
},

  computed: {
     state(){
          return this.$store.state.character.point.bonus;
     }
  }
}
</script>