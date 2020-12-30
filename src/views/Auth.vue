<template>
  <div class="w-100 c-auth-bg">
    <div class="h-100 d-flex px-3 pt-3 pb-5 c-bg-translucent">
      <div class="m-auto p-0 d-flex flex-column c-auth-panel">
        <img class="c-logo-auth mx-auto" :src="logoUrl" />
        <b-card class="p-0 mt-3 shadow" no-body>
          <b-tabs
            class="m-0"
            content-class="mx-3 my-2"
            justified
            active-nav-item-class="font-weight-bold text-primary"
            card
            v-model="tabIndex"
          >
            <b-tab title="Sign in" active>
              <b-form @submit.prevent="m_submit_sign_in">
                <h5>Welcome to</h5>
                <h3 class="c-text-primary font-weight-bold">GLOVORYMART</h3>
                <c-input
                  class="mt-5 w-100"
                  _withIcon
                  :_iconName="'envelope'"
                  :_state="emailState"
                  :_placeHolder="'Email...'"
                  :_type="'email'"
                  _required
                  v-model="dataEmailInput"
                />

                <c-input
                  class="mt-3 w-100"
                  _withIcon
                  :_iconName="'key'"
                  :_state="passwordState"
                  :_placeHolder="'Password... (min. 8 chars)'"
                  :_type="'password'"
                  _required
                  v-model="dataPasswordInput"
                />
                <b-row class="m-0 mt-3">
                  <a class="my-auto clickable" v-b-modal.reset-pass-modal>
                    Forgot Password?
                  </a>
                  <c-auth-reset-password-modal :_id="'reset-pass-modal'" />
                  <b-form-checkbox class="ml-auto"
                    >Remember me!</b-form-checkbox
                  >
                </b-row>
                <b-button
                  type="submit"
                  class="mt-5"
                  block
                  variant="primary"
                  pill
                >
                  Sign in
                </b-button>
                <b-button class="mt-3" variant="light" @click="tabIndex++">
                  <u>
                    Don't have an account yet? <br />
                    Register here!
                  </u>
                </b-button>
              </b-form>
            </b-tab>
            <b-tab title="Register">
              <b-form @submit.prevent="m_submit_register">
                <h5>Fill in the form to join us!</h5>
                <c-input
                  class="mt-5 w-100"
                  _withIcon
                  :_iconName="'envelope'"
                  :_state="emailState"
                  :_placeHolder="'Email...'"
                  :_type="'email'"
                  _required
                  v-model="dataEmailInput"
                />

                <c-input
                  class="mt-3 w-100"
                  :_withIcon="false"
                  :_state="null"
                  :_placeHolder="'First Name...'"
                  :_type="'text'"
                  _required
                />
                <c-input
                  class="mt-3 w-100"
                  :_withIcon="false"
                  :_state="null"
                  :_placeHolder="'Last Name...'"
                  :_type="'text'"
                  _required
                />

                <c-input
                  class="mt-3 w-100"
                  _withIcon
                  :_iconName="'key'"
                  :_state="passwordState"
                  :_placeHolder="'Password...'"
                  :_type="'password'"
                  _required
                  v-model="dataPasswordInput"
                />

                <c-input
                  class="mt-3 w-100"
                  _withIcon
                  :_iconName="'lock'"
                  :_state="null"
                  :_placeHolder="'Confirm Password...'"
                  :_type="'password'"
                  _required
                />

                <c-input
                  class="mt-3 w-100"
                  _withIcon
                  :_iconName="'telephone'"
                  :_state="null"
                  :_placeHolder="'Telephone... (eg. 081234567890)'"
                  :_type="'number'"
                  _required
                />

                <b-row class="mt-3 m-0">
                  <b-form-checkbox name="tnc" required >
                    I Agree With This <a href="#">Terms And Conditions.</a>
                  </b-form-checkbox>
                </b-row>

                <b-button
                  type="submit"
                  class="mt-5"
                  block
                  variant="primary"
                  pill
                >
                  Register
                </b-button>
                <b-button type="reset" class="mt-2" block variant="danger" pill>
                  Reset
                </b-button>
                <b-button class="mt-3" variant="light" @click="tabIndex--">
                  <u>
                    Already have account? <br />
                    Sign in here!
                  </u>
                </b-button>
              </b-form>
            </b-tab>
          </b-tabs>
        </b-card>
        <!-- BACK BUTTON -->
        <c-back-button :_label="'Back'" :_path="'/'" />
      </div>
    </div>
  </div>
</template>
<script>
import CInput from "../stories/Input.vue";
import CBackButton from "../stories/BackButton.vue";
import CAuthResetPasswordModal from "./AuthResetPasswordModal.vue";

export default {
  components: { CInput, CBackButton, CAuthResetPasswordModal },
  data() {
    return {
      tabIndex: 1,
      emailState: null,
      passwordState: null,
      emailInput: "",
      passwordInput: "",
    };
  },
  methods: {
    m_submit_sign_in() {
      // alert(this.emailState + '&&' +this.passwordState)

      if (!this.emailState || !this.passwordState) {
        // alert('KAPPA')
        return false;
      }
      var newUserData = {
        email: this.emailInput,
        password: this.passwordInput,
        latestSession: Date.now(),
      };
      this.$store.dispatch("userSignIn", newUserData);
      var userData = this.$store.getters.getUserData;
      this.$globals.ui.showToast(
        "Welcome to glovory mart " + userData.email + "!",
        { variant: "success" }
      );
      if (this.$store.getters.isSignedIn) {
        this.$router.push("/");
      }
    },
    m_submit_register(){
      
    }
  },
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
  beforeCreate: function () {
    if (this.$store.getters.isSignedIn) {
      this.$router.replace("/");
    }
  },
  created: function () {},
};
</script>

<style scoped>
.c-auth-panel {
  width: 100%;
  max-width: 540px !important;
}
.c-logo-auth {
  height: 90px;
  width: 180px;
}
.c-auth-bg {
  background-image: url("../assets/bg_supermarket.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
</style>
