<template>
  <div class="container">
    <h1>Welcome {{name}}</h1>
    <h3>This is your to do list</h3>

    <input type="submit" value="Add Item" v-on:click="showAddItemModal()">

    <span v-if="items.length !== 0">Search:</span>
    <input v-if="items.length !== 0" class="textInput" type="text" v-model="searchFilter" @input="filterItems"><br>
    <itemList :items="showFilteredItems ? searchedItems : items"/>
    <modal name="createItem" width="85%" height="600px">
      <AddItem/>
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
    }
  },
  mounted() {
  },
  methods: {
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
      item.creator = this.name
      this.items.push(item);
      this.$modal.hide('createItem');
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
