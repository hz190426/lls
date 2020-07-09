<template>
    <div>
        <select>
            <option v-for="i in maxstatus" :value="i" :key="i">{{i}}</option>
        </select>
    </div>
</template>
<script>
export default {
  props: {// propsを使うと引数を受け取れるようになる
    "param":String,
    "maxstatus":Number
},
  computed: {
    articleList() {

    }
  }
}
</script>