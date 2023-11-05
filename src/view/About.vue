<template>
  <h1>About page</h1>
  <h4>Our Team:</h4>
  <div>
    <div class="person" v-for="p in people" :key="p.id">
      <router-link :to="{ name: 'Person', params: { id: p.id } }">
        <h4>
          {{ p.name }}
        </h4>
      </router-link>

      <p>
        {{ p.description }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutView",
  data() {
    return {
      people: [],
    };
  },
  mounted() {
    fetch("http://localhost:3000/people", { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.people = data;
      })
      .catch((e) => console.log(e));
  },
};
</script>

<style></style>
