<template>
  <nav>
    <div class="navigation">
      <div class="navLink">
        <router-link to="/">Home</router-link>
      </div>
      <div class="navLink">
        <router-link :to="{ name: 'About' }">About</router-link>
      </div>
    </div>
  </nav>
  <div class="view">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
body {
  margin: 0;
  background-color: #eee;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.navigation {
  width: 100%;
  height: 40px;
  background-color: white;
  align-content: center;
  padding: 10px;
}
.navigation > .navLink {
  float: left;
}
.navLink > a {
  text-decoration: none;
  padding: 5px;
  border-radius: 4px;
  margin-top: 10px;
}
.router-link-exact-active {
  background-color: #960c0c;
  color: white;
}
</style>
