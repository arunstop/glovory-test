<template>
  <div>
    <b-toast :id="_id" auto-hide-delay="1200" no-hover-pause solid v-bind="_others" toaster="b-toaster-top-right">
      <template #toast-title>
        <div class="d-flex flex-grow-1 align-items-center c-fw500">
          <b-icon icon="info-circle-fill" class="mr-2"/>
          <strong class="mr-auto">Notification</strong>
          <!-- <small class="text-muted mr-2">42 seconds ago</small> -->
        </div>
      </template>
      <span>{{_message}}</span>
    </b-toast>
  </div>
</template>
<script>
export default {
  name: "c-toast",
  props: {
    _id: String,
    _message: String,
    _others: Object // add property dynamically
  },
};
</script>

<style>
</style>