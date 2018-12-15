<template>
    <div>
        <input type="email" v-model="email" />
        <input type="password" v-model="password" />
        <button @click="login">login</button>
    </div>
</template>

<script>
import {router} from '../router/index.js'
export default {
    data() {
        return {
            email : '',
            password : '',
        }
    },
  methods: {
    login() {
      // https://firebase.google.com/docs/auth/web/password-auth?hl=ko
      firebase.auth().signInWithEmailAndPassword(
        this.email,
        this.password
      )
        .then(function (response) {
            console.log(response);
            router.push('/main');
        })
        .catch((err) => {
            console.log(err);
        })
    }
  }
}
</script>

<style>

</style>
