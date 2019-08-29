<template>
  <div style="margin-top:25px;">
    <h2 v-if="items.length === 0">No Items In List</h2>
    <div v-for="item in items" class="card" v-bind:key="item.title">
      <div class="topSide">
        <div class="cardHeader">
          <h4 style="margin:5px;">Title: {{ item.title }}</h4>
          <span>Created By: {{ item.creator }}</span>
        </div>
        <div class="cardHeader">
          <h4 style="margin:5px;">Description: {{ item.description }}</h4>
          <h4 style="margin:5px;">Staus: {{ item.status }}</h4>
        </div>
        <div class="cardHeader">
          <h4 style="margin:5px;">Due Date: {{ item.date | moment("dddd, MMMM Do YYYY") }}</h4>
        </div>
      </div>
      <div class="listItem">
      </div>
      <div class="listItem">
        <div>
          <input type="submit" style="width:100%;" value="Edit Item" v-on:click="emitEditItem(item)">
        </div>
        <div>
          <input type="submit" style="width:100%; background-color:red;" value="Delete Item" v-on:click="emitDeleteItem(item)">
        </div>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  name: 'AddItem',
  props: ['items'],
  components: {
  },
  data() {
    return {
    }
  },
  mounted() {

  },
  methods: {
    emitEditItem(item) {
      this.$parent.selectItemToEdit(item)
    },
    emitDeleteItem(item) {
      this.$parent.deleteItem(item)
    }
  },
}
</script>

<style scoped>

.topSide {
  justify-content: space-around;
  display: flex;
}
.card {
  margin: 20px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

.cardHeader {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.listItem {
  display: flex;
  justify-content: space-around;
}
</style>
