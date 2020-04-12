<template>
  <div class="character-wrapper">
    <div class="container mt-5 details-container" v-if="character">
      <div class="row">
        <div class="col-sm-4">
          <img :src="character.image" alt="profile" class="rounded" width="100%" />
        </div>
        <div class="col-sm-8 info-column">
          <h2 class="title">{{ character.name }}</h2>
          <hr />

          <h4>Status</h4>
          <p>{{ character.status }}</p>

          <h4>Specie</h4>
          <p>{{ character.species }}</p>

          <h4>Gender</h4>
          <p>{{ character.gender }}</p>

          <h4>Origin</h4>
          <p>{{ character.origin.name }}</p>
        </div>
      </div>
    </div>
    <div class="loading-container" v-else>
      <h2>Loading...</h2>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Character",
  data() {
    return {
      id: this.$route.params.id,
      character: null
    };
  },
  methods: {
    ...mapGetters(["getCharacter"])
  },
  beforeMount: function(){
      window.scrollTo(0,0)
  },
  mounted: async function() {
    const base_url = "https://rickandmortyapi.com/api/character/" + this.id;
    const response = await fetch(base_url);
    this.character = await response.json();
    console.log("loggin from mounted hook" + this.character);
  }
};
</script>

<style scoped>
.info-column {
  text-align: start;
}

.character-wrapper {
  min-height: 100vh;
}

.details-container {
  background-color: snow;
  padding: 10px;
  border-radius: 5px;
}

.loading-container {
  color: white;
  font-size: 40px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
}
</style>