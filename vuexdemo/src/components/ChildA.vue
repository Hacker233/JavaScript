<template>
  <div class="child-a">
    <p>ChildA:{{countA}}</p>
    <button @click="handleClick(10)">ChildA-Add</button>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'ChildA',
  data () {
    return {
    }
  },
  computed: {
    ...mapState({
      countA: 'count'
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
