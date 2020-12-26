<template>
  <b-input-group>
    <b-input-group-prepend>
      <b-input-group-text v-if="_withIcon">
        <b-icon :icon="_iconName"></b-icon>
      </b-input-group-text>
    </b-input-group-prepend>
    <!-- 
        vue cannot use v-model on custom component 
        USE THIS INSTEAD : 
        v-bind:value="searchText"
        v-on:input="searchText = $event.target.value"

        -->
    <b-form-input
      :state="_state"
      :placeholder="_placeHolder"
      :type="_type"
      :value="value"
      @input.native="$emit('input', $event.target.value)"
    >
    </b-form-input>
  </b-input-group>
</template>

<script>
// for this to actually work though, the <input> inside the component must:

// Bind the value attribute to a 'value' prop
// On input, emit its own custom input event with the new value

export default {
    name: 'c-input',
    props:{
        _withIcon: Boolean,
        _iconName: String,
        _state: Boolean,
        _placeHolder: String,
        _type: String,
        value: String, // for v-model
    }
};
</script>

<style>
</style>