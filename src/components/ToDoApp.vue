<template>
  <div class="container">
    <h1>Welcome {{name}}</h1>
    <h3>This is your to do list</h3>

    <input type="submit" value="Add Item" v-on:click="showAddItemModal()">

    <span v-if="items.length !== 0">Search:</span>
    <input v-if="items.length !== 0" class="textInput" type="text" v-model="searchFilter" @input="filterItems"><br>

    <span v-if="items.length !== 0">Filter status:</span>
    <select v-model="status" v-if="items.length !== 0" @change="filterStatus">
      <option value="All">All</option>
      <option value="Idle">Idle</option>
      <option value="In Progress">In Progress</option>
      <option value="Done">Done</option>
    </select>
    <itemList :items="showFilteredItems ? searchedItems : items"/>
    <modal name="createItem" width="85%" height="600px">
      <AddItem :itemToEdit="itemToEdit"/>
    </modal>
  </div>
</template>

<script>

import AddItem from './AddItem.vue'
import itemList from './itemList.vue'


export default {
  name: 'ToDoApp',
  props: {
    name: String
  },
  components: {
    AddItem,
    itemList,
  },
  data() {
    return {
      items: [],
      searchedItems: [],
      searchFilter: '',
      showFilteredItems: false,
      itemToEdit: null,
      status: 'All',
    }
  },
  mounted() {
  },
  methods: {
    filterStatus() {
      this.status !== 'All' ? this.showFilteredItems = true : this.showFilteredItems = false;
      this.searchedItems = this.items.filter((item) => {
        return item.status.toLowerCase().indexOf(this.status.toLowerCase()) !== -1;
      });
    },
    filterItems() {
      this.searchFilter !== '' ? this.showFilteredItems = true : this.showFilteredItems = false;
      this.searchedItems = this.items.filter((item) => {
        return item.title.toLowerCase().indexOf(this.searchFilter.toLowerCase()) !== -1;
      });
    },
    showAddItemModal() {
      this.$modal.show('createItem');
    },
    addItem(item) {
      item.creator = this.name;
      this.items.push(item);
      this.$modal.hide('createItem');
    },
    selectItemToEdit(item) {
      this.itemToEdit = item;
      this.$modal.show('createItem');
    },
    updateItem(updatedItem) {
      updatedItem.creator = this.name;
      let index = this.items.map(item => item.title).indexOf(this.itemToEdit.title);
      this.items.splice(index, 1, updatedItem)
      this.$modal.hide('createItem');
    },
    deleteItem(itemToDelete) {
      let index = this.items.map(item => item.title).indexOf(itemToDelete.title);
      this.items.splice(index, 1)
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
