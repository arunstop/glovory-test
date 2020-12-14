<template>
    <div class="navbar">
      <div class="wrapper">
        <img
          class="logo"
          src="https://assets.website-files.com/5fafb178b3236f251c2ec605/5fafe519c3163b6fd26dd449_logo-color.svg"
        />
        <input
          type="text"
          class="btn-search"
          maxlength="256"
          name="Search"
          data-name="Search"
          placeholder="Search products"
          id="Search"
        />
        <div class="g-right">
          <my-button
            size="small"
            @onClick="onLogout"
            label="Log out"
            v-if="user"
          />
          <my-button
            size="small"
            @onClick="onLogin"
            label="Log in"
            v-if="!user"
          />
          <my-button
            primary
            size="small"
            @onClick="onCreateAccount"
            label="Sign up"
            v-if="!user"
          />
        </div>
      </div>
    </div>
</template>

<script>
import "./global.css";
import "./header.css";
import MyButton from "./Button.vue";

export default {
  name: "my-header",

  components: { MyButton },

  props: {
    user: {
      type: String
    }
  },

  methods: {
    onLogin() {
      this.$emit("onLogin");
    },
    onLogout() {
      this.$emit("onLogout");
    },
    onCreateAccount() {
      this.$emit("onCreateAccount");
    }
  }
};
</script>
