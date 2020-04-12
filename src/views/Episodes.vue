<template>
  <div class="episodes-wrapper">
    <h1>Episodes</h1>
    <ul>
      <li v-for="(item, index) in episodes" :key="index">{{ item.name }}</li>
    </ul>
  </div>
</template>


<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "Episodes",
  computed: {
      ...mapState(["episodes"])
  },
  methods: {
      ...mapActions(['getEpisodes'])
  },
  mounted: async function(){
      await this.getEpisodes()
  } 
};
</script>

<style scoped>
    .episodes-wrapper{
        height: 100vh;
        color: white;
    }
</style>