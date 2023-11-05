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
      people: [
        { name: "Kuba", id: 1, description: "To ja Kuba, kliknij tutaj" },
        { name: "Wojtek", id: 2, description: "Lubie placki" },
        { name: "Maria", id: 3, description: "Losuje nagrody zawodowo" },
      ],
    };
  },
};
</script>

<style></style>
