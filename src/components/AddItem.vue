<template>
  <div style="padding: 20px; margin: auto; width: 300px">
    <h2>Add Item</h2>
    Title:
    <input class="textInput" type="text" v-model="name"><br>
    Due Date:
    <datepicker :value="date"></datepicker>
    Description:
    <input class="textInput" type="text" v-model="name"><br>
    Staus:
    <select id="country" name="country">
      <option value="australia">Idle</option>
      <option value="canada">In Progress</option>
      <option value="usa">Done</option>
    </select>
    <input type="submit" value="Submit">
  </div>
</template>

<script>

import Datepicker from 'vuejs-datepicker';


export default {
  name: 'AddItem',
  props: {  },
  components: {
    Datepicker
  },
  data() {
    return {
      name: '',
      date: new Date(2016, 9,  16)
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

</style>
