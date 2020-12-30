<template>
  <b-modal :id="_id" title="Reset password" hide-footer centered>
    <b-col class="container-fluid p-3">
      <p>
        We will send password request to your email, as long as it is
        <strong>registered</strong> before
      </p>
      <p>
        If you see any reset password requests email that are not from your
        previous actions, <strong>DO NOT RESPONSE</strong>
      </p>
      <b-form @submit.prevent="m_reset_password()">
        <c-input
          class="mt-5 w-100"
          _withIcon
          :_iconName="'envelope'"
          :_state="emailState"
          :_placeHolder="'Enter email here...'"
          :_type="'email'"
          _required
          v-model="dataEmailInput"
        />
        <b-button class="mt-5" block size="md" variant="danger" type="submit">
          Reset password
        </b-button>
        <b-button
          class="mt-3 font-weight-bold"
          block
          size="md"
          variant="light"
          @click="m_modal_hide()"
        >
          Cancel
        </b-button>
      </b-form>
    </b-col>
  </b-modal>
</template>

<script>
import CInput from "../stories/Input";

export default {
  components: { CInput },
  props: {
    _id: String,
  },
  data() {
    return {
      emailState: null,
      emailInput: "",
    };
  },
  methods: {
    m_modal_hide() {
      this.$bvModal.hide(this._id);
    },
    m_reset_password() {
      this.m_modal_hide();
      this.$globals.ui.showToast(
        "Request password email has been sent to your registered email",
        { variant: "success" }
      );
    },
  },
  computed: {
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
  },
};
</script>

<style>
</style>