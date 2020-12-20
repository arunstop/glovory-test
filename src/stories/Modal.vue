<template>
  <!-- Modal -->
  <b-modal :id="_id" centered :title="_title">
    <p class="my-4">{{_message}}</p>
  </b-modal>
</template>
<script>
export default {
  name: "c-modal",
  props:{
      _id: String,
      _title : String,
      _message : String,
  }
};
</script>