<template>
  <form class="modal-sign-in">
    <v-text-field
      v-model="name"
      :error-messages="nameErrors"
      label="Name"
      required
      @input="$v.name.$touch()"
      @blur="$v.name.$touch()"
    ></v-text-field>
    <v-text-field
      v-model="password"
      :error-messages="passwordErrors"
      label="Password"
      required
      @input="$v.password.$touch()"
      @blur="$v.password.$touch()"
    ></v-text-field>
    <v-text>
      <a href="/admin/reset-password">Forgot your password?</a>
    </v-text>

    <div class="buttons-sign-in">
        <v-btn
      class="mr-4"
      @click="submit"
    >
      submit
    </v-btn>
    <v-btn @click="clear">
      clear
    </v-btn>
    </div>
  </form>
</template>

<script>
  import { validationMixin } from 'vuelidate'
  import { required } from 'vuelidate/lib/validators'
  export default {
    mixins: [validationMixin],
    validations: {
      name: { required },
      password: { required },
    },
    data: () => ({
      name: '',
      password: ''
    }),
    computed: {
      passwordErrors () {
        const errors = []
        if (!this.$v.password.$dirty) return errors
        !this.$v.password.required && errors.push('Item is required')
        return errors
      },
      nameErrors () {
        const errors = []
        if (!this.$v.name.$dirty) return errors
        !this.$v.name.required && errors.push('Name is required.')
        return errors
      },
    },
    methods: {
      submit () {
        this.$v.$touch()
      },
      clear () {
        this.$v.$reset()
        this.name = ''
        this.password = ''
      },
    },
  }
</script>

<codepen-resources lang="json">
  {
    "js": [
      "https://cdn.jsdelivr.net/npm/vuelidate/dist/vuelidate.min.js",
      "https://cdn.jsdelivr.net/npm/vuelidate/dist/validators.min.js"
    ]
  }
</codepen-resources>

<codepen-additional>
  const { required, maxLength, email } = validators
  const validationMixin = vuelidate.validationMixin

  Vue.use(vuelidate.default)
</codepen-additional>

<style scoped>
.modal-sign-in {
    background: #fff;
    position: fixed;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    }

.buttons-sign-in {
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
} 

a {
    font-size: 13px;
}
</style>