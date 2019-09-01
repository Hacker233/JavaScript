<template>
  <div class="parent">
      <child-a></child-a>
      <child-b></child-b>
  </div>
</template>

<script>
import ChildA from './ChildA'
import ChildB from './ChildB'
export default {
  name: 'Parent',
  data () {
    return {
      
    }
  },
  components: {
      ChildA,
      ChildB
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
