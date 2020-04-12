<template>
  <div class="container">
    <h1>Characaters</h1>
    <div class="row">
      <div class="col-sm-4" v-for="(item, index) in characters" :key="index">
        <div class="card" style="margin: 10px">
          <img class="card-img-top" :src="item.image" alt="Card image" />
          <div class="card-body">
            <h4 class="card-title">{{item.name}}</h4>
            <p class="card-text">{{item.species}}</p>
            <router-link :to="'character/' + item.id" class="btn btn-primary">See Details</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "Characters",
  computed: {
    ...mapState(["characters"])
  },
  methods: {
    ...mapActions(["getCharacters"])
  },
  mounted: async function() {
    await this.getCharacters();
  }
};
</script>