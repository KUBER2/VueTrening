<template>
  <form>
    <label>Email</label>
    <input type="email" v-model="email" required />
    <label>Password</label>
    <input type="password" v-model="password" required />
    <label>Role:</label>
    <select v-model="role">
      <option value="dev">Web developer</option>
      <option value="des">Designer</option>
    </select>
    <label>Skills</label>
    <input type="text" v-model="tempSkill" @keyup="skillHandler" />
    <div class="pill" v-for="s in skills" :key="s">
      <span>{{ s }}</span>
    </div>
    <div class="terms">
      <input type="checkbox" required v-model="terms" />
      <label>Accept terms and conditions</label>
    </div>
  </form>
</template>

<script>
export default {
  name: "SignUpForm",
  data() {
    return {
      email: "",
      password: "",
      role: "",
      terms: false,
      tempSkill: "",
      skills: [],
    };
  },
  methods: {
    skillHandler(e) {
      if (e.key == "," && this.tempSkill) {
        let skillToAdd = this.tempSkill.substring(0, this.tempSkill.length - 1);
        console.log(skillToAdd);
        this.skills.push(skillToAdd);
        this.tempSkill = "";
      }
    },
  },
};
</script>

<style scoped>
form {
  max-width: 420px;
  margin: 30px auto;
  background: white;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}
label {
  color: #aaa;
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 0.6rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}
input,
select {
  display: block;
  padding: 10px 6px;
  width: 100%;
  border: none;
  border-bottom: 1px solid #ddd;
  color: #555;
}
input:focus,
select:focus {
  border: none;
  outline: none;
  border-bottom: 1px solid #141414;
}
input[type="checkbox"] {
  display: inline-block;
  width: 16px;
  margin: 0 10px 0;
  position: relative;
  top: 2px;
}
.pill {
  display: inline-block;
  background-color: #eee;
  border-radius: 5px;
  text-transform: uppercase;
  font-size: 0.8rem;
  padding: 5px;
  margin: 4px;
}
</style>
