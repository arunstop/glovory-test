<template>
  <div class="w-100 d-flex px-3 pt-3 pb-5">
    <div class="m-auto p-0 d-flex flex-column c-login-panel">
      <img class="c-logo-auth mx-auto" :src="logoUrl" />
      <b-card class="p-0 mt-5">
        <b-tabs
          content-class="m-3 mt-5"
          justified
          active-nav-item-class="font-weight-bold"
        >
          <b-tab title="Login">
            <b-form>
              <c-input
                class="mt-3 w-100"
                :_withIcon="true"
                :_iconName="'envelope'"
                :_state="emailState"
                :_placeHolder="'Email...'"
                :_type="'email'"
                v-model="dataEmailInput"
              />

              <c-input
                class="mt-3 w-100"
                :_withIcon="true"
                :_iconName="'key'"
                :_state="passwordState"
                :_placeHolder="'Password...'"
                :_type="'password'"
                v-model="dataPasswordInput"
              />

              <b-button class="mt-5" block variant="primary">
                Login
              </b-button>
              <b-button class="mt-3" variant="light">
                <u
                  >Don't have an account yet? <br />
                  Register here!
                </u></b-button
              >
            </b-form>
          </b-tab>
          <b-tab title="Register"> </b-tab>
        </b-tabs>
      </b-card>
    </div>
  </div>
</template>
<script>
import CInput from "../stories/Input.vue";

export default {
  components: { CInput },
  data() {
    return {
      emailState: null,
      passwordState: null,
      emailInput: "",
      passwordInput: "",
    };
  },
  methods: {},
  computed: {
    logoUrl() {
      return this.$globals.props.logoUrl;
    },
    dataEmailInput: {
      get: function () {
        return this.emailInput;
      },
      set: function (value) {
        this.emailInput = value;
        if (this.emailInput.includes("@")) {
          this.emailState = true;
        }else{
          this.emailState = false;
        }
      },
    },
    dataPasswordInput: {
      get: function () {
        return this.passwordInput;
      },
      set: function (value) {
        this.passwordInput = value;
        if (this.passwordInput.length >= 8) {
          this.passwordState = true;
        }else{
          this.passwordState = false;
        }
      },
    },
  },
};
</script>

<style scoped>
.c-login-panel{
  width: 100%;
  max-width: 540px !important;
}
.c-logo-auth{
  height: 90px;
  width: 180px;
}
</style>
