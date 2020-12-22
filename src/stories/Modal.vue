<template>
  <!-- Modal -->
  <b-modal
    :id="_id"
    :title="_title"
    :ok-title="_ok_title"
    :ok-variant="_ok_variant"
    :cancel-title="_cancel_title"
    :cancel-variant="_cancel_variant"
    @ok="_ok_action"
    centered
  >
    <p class="my-4">{{ _message }}</p>
  </b-modal>
</template>
<script>
export default {
  name: "c-modal",
  props: {
    _id: String,
    _title: { type: String, required: true },
    _message: { type: String, required: true },
    _ok_title: String,
    _ok_variant: String,
    _cancel_title: String,
    _cancel_variant: { type: String, default: "light" },
    _ok_action: Array,
  },
};
</script>