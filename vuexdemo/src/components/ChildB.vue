<template>
  <div class="child-b">
      <p>ChildB:{{countB}}</p>
      <button @click="handleClick(20)">ChildB-Add</button>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'ChildB',
  data () {
    return {
    }
  },
  computed: {
      ...mapState({
        countB: 'count'
      })
  },
  methods: {
    handleClick:function(num){
      //this.$store.commit('countAdd',num)
      this.countAdd(num)
    },
    ...mapMutations(['countAdd'])
  }
}
</script>
<style scoped>

</style>
