<template>
  <div style="padding: 20px; margin: auto; width: 300px">
    <h2>Add Item</h2>
    Title:
    <input class="textInput" type="text" v-model="title"><br>
    Due Date:
    <datepicker v-model="date"></datepicker>
    Description:
    <input class="textInput" type="text" v-model="description"><br>
    Staus:
    <select v-model="status">
      <option value="Idle">Idle</option>
      <option value="In Progress">In Progress</option>
      <option value="Done">Done</option>
    </select>
    <input type="submit" :value="itemToEdit ? 'Update' : 'Add'" v-on:click="emitAdditem()">
  </div>
</template>

<script>

import Datepicker from 'vuejs-datepicker';


export default {
  name: 'AddItem',
  props: ['itemToEdit'],
  components: {
    Datepicker
  },
  data() {
    return {
      title: '',
      status: 'Idle',
      description: '',
      date: new Date(2019, 7,  16)
    }
  },
  mounted() {
    if (this.itemToEdit) {
      this.title = this.itemToEdit.title;
      this.date = this.itemToEdit.date;
      this.status = this.itemToEdit.status;
      this.title = this.itemToEdit.title;
    }
  },
  methods: {
    emitAdditem() {
      if (this.title === '') {
        this.$noty.error("Oops, Please Enter A Title")
        return
      }
      let item = {title: this.title, status: this.status, description: this.description, date: this.date}
      if (this.itemToEdit) {
        this.$parent.$parent.updateItem(item)
      } else {
        this.$parent.$parent.addItem(item)
      }
    },
  },
}
</script>

<style scoped>

</style>
