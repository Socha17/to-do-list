<template>
  <div class="container">
    <h1>Welcome {{name}}</h1>
    <h3>This is your Teams to do list</h3>

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
    
    <modal name="createItem" width="85%" height="600px" @before-close="itemToEdit = null">
      <AddItem :itemToEdit="itemToEdit"/>
    </modal>
  </div>
</template>

<script>

import AddItem from './AddItem.vue'
import itemList from './itemList.vue'
import { db } from '../db'

export default {
  name: 'ToDoApp',
  props: ['name'],
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
      documents: [],
    }
  },
  firebase: {
    documents: db.ref('toDoList'),
  },
  mounted() {
    db.ref('toDoList').on("child_added", (snapshot) => {
      var newPost = snapshot.val();
      this.items.push(newPost)
    });

    db.ref('toDoList').on("child_changed", (snapshot) => {
      var changedPost = snapshot.val();
      let index = this.items.map(item => item.title).indexOf(changedPost.title);
      this.items.splice(index, 1, changedPost)
    } );


    db.ref('toDoList').on("child_removed", (snapshot) => {
      var deletedPost = snapshot.val();
      let index = this.items.map(item => item.title).indexOf(deletedPost.title);
      this.items.splice(index, 1)
    });
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
      let id = Math.random().toString(36).substring(7);
      item.creator = this.name;
      item.id = id;
      this.$modal.hide('createItem');
      db.ref('toDoList/' + id)
      .set(item)
    },
    selectItemToEdit(item) {
      this.itemToEdit = item;
      this.$modal.show('createItem');
    },
    updateItem(updatedItem) {
      db.ref('toDoList/' + updatedItem.id)
      .update(updatedItem)
      this.$modal.hide('createItem');
    },
    deleteItem(itemToDelete) {
      db.ref('toDoList/' + itemToDelete.id).remove()
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
