<template>
  <div style="padding: 20px; margin: auto; width: 200px">
    Enter Your Name <br/>
    <input class="textInput" type="text" v-model="name"><br>
    <div class="button" v-on:click="emitLogin()">Login</div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  props: {  },
  data() {
    return {
      name: ''
    }
  },
  mounted() {
  },
  methods: {
    emitLogin() {
      if (this.name === '') {
        this.$noty.error("Oops, Please Enter A Name")
        return
      }
      this.$parent.$parent.login(this.name)
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.button {
  border-radius: 6px;
  color: white;
  width: 100px;
  height: 30px;
  background-color: #1cc91c;
  text-align: center;
  margin-top: 20px;
}
.textInput {
  border: none;
  border-bottom: 1px solid black;
}
</style>
