<template>
  <div id="app">
    <ToDoApp v-if="userLoggedIn" :name="name"/>
    <modal name="login" width="85%" height="auto" class="customModal">
      <Login/>
    </modal>
  </div>
</template>

<script>
import ToDoApp from './components/ToDoApp.vue'
import Login from './components/Login.vue'

export default {
  name: 'app',
  components: {
    ToDoApp,
    Login,
  },
  data() {
    return {
      userLoggedIn: false,
      name: null,
    }
  },
  mounted() {
    this.$modal.show('login');
  },
  methods: {
    login(name) {
      this.name = name
      this.userLoggedIn = true;
      this.$modal.hide('login');
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.customModal {
  padding: 20px;
}
</style>
