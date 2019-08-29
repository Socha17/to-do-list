<template>
  <div style="margin-top:25px;">
    <h2 v-if="items.length === 0">No Items In List</h2>
    <div v-for="item in items" class="card">
      <div class="listItem">
        <h4>Title: {{ item.title }}</h4>
        <h4>Created By: {{ item.creator }}</h4>
      </div>
      <div class="listItem">
        <h4>Description: {{ item.description }}</h4>
        <h4>Staus: {{ item.status }}</h4>
      </div>
    </div>
  </div>
</template>

<script>

import Datepicker from 'vuejs-datepicker';


export default {
  name: 'AddItem',
  props: ['items'],
  components: {
    Datepicker
  },
  data() {
    return {
    }
  },
  mounted() {

  },
  methods: {

  },
}
</script>

<style scoped>
.card {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}
.listItem {
  display: flex;
  justify-content: space-around;
}
</style>
