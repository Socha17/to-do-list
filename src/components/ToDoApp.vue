<template>
  <div class="container">
    <h1>Welcome {{name}}</h1>
    <h3>This is your to do list</h3>

    <input type="submit" value="Add Item" v-on:click="showAddItemModal()">
    <modal name="createItem" width="85%" height="600px" scrollable="true">
      <AddItem/>
    </modal>
  </div>
</template>

<script>

import AddItem from './AddItem.vue'


export default {
  name: 'HelloWorld',
  props: {
    name: String
  },
  components: {
    AddItem,
  },
  mounted() {
    console.log("toDoApp");
    console.log(this.name);
  },
  methods: {
    showAddItemModal() {
      this.$modal.show('createItem');
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.container {
  max-width: 800px;
  margin: auto;
}
</style>
