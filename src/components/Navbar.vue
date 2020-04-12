<template>
  <nav class="navbar navbar-expand-sm bg-light navbar-light">
    <!-- Brand/logo -->
    <a class="navbar-brand" href="/">
      <img :src="logo" alt="Logo" style="width:120px;" />
    </a>

    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarTogglerDemo01"
      aria-controls="navbarTogglerDemo01"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <!-- Links -->
    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link to="/" class="nav-link">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/characters" class="nav-link">Characters</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/episodes" class="nav-link">Episodes</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import logo from "../assets/logo2.png";

export default {
  name: "Navbar",
  data() {
    return {
      logo
    };
  }
};
</script>