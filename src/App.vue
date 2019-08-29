<template>
  <div id="app">
    <ToDoApp/>
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
      showLogin: true,
    }
  },
  mounted() {

    this.$modal.show('login');
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
.button {
  color: white;
  width: 100px;
  height: 50px;
  background-color: green;
}
</style>
