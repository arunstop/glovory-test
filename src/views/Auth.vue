<template>
  <div class="w-100 d-flex px-3 pt-3 pb-5">
    <div class="m-auto p-0 d-flex flex-column c-login-panel">
      <img class="c-logo-auth mx-auto" :src="logoUrl" />
      <b-card class="p-0 mt-3" no-body>
        <b-tabs
          class="m-0"
          content-class="mx-3 my-2"
          justified
          active-nav-item-class="font-weight-bold text-primary"
          card
          v-model="tabIndex"
        >
          <b-tab title="Login" active>
            <b-form>
              <h5>Welcome to</h5>
              <h2 class="c-text-primary">GLOVORYMART</h2>
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

              <b-button class="mt-5" block variant="primary" pill>
                Login
              </b-button>
              <b-button class="mt-3" variant="light" @click="tabIndex++">
                <u
                  >Don't have an account yet? <br />
                  Register here!
                </u>
              </b-button>
            </b-form>
          </b-tab>
          <b-tab title="Register">
            <b-form>
              <h5>Fill in the form to join us!</h5>
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
                :_withIcon="false"
                :_state="null"
                :_placeHolder="'First Name...'"
                :_type="'text'"
              />
              <c-input
                class="mt-3 w-100"
                :_withIcon="false"
                :_state="null"
                :_placeHolder="'Last Name...'"
                :_type="'text'"
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

              <c-input
                class="mt-3 w-100"
                :_withIcon="true"
                :_iconName="'lock'"
                :_state="null"
                :_placeHolder="'Confirm Password...'"
                :_type="'password'"
              />

              <c-input
                class="mt-3 w-100"
                :_withIcon="true"
                :_iconName="'telephone'"
                :_state="null"
                :_placeHolder="'Telephone... (eg. 081234567890)'"
                :_type="'number'"
              />

              <b-button class="mt-5" block variant="primary">
                Register
              </b-button>
            </b-form>
          </b-tab>
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
      tabIndex: 1,
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
        } else {
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
        } else {
          this.passwordState = false;
        }
      },
    },
  },
};
</script>

<style scoped>
.c-login-panel {
  width: 100%;
  max-width: 540px !important;
}
.c-logo-auth {
  height: 90px;
  width: 180px;
}
</style>
