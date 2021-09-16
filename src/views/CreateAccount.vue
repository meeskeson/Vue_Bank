<template>
  <div class="home">
    <h1>Let's create an account!</h1>

    Enter id: <input v-model="account.id">
    <br>
    <br>
    Enter new account number: <input v-model="account.number">
    <br>
    <br>
    <button v-on:click="accountcreate">SUBMIT</button>
  </div>
</template>

<script>
export default {
  name: "CreateAccount",
  data: function () {
    return {
      account: {}
    }
  },
  methods: {
    accountcreate: function () {
      this.$http.post('createaccount', this.account)
          .then(response => {
          console.log(response.data);
          alert("Success!")
            this.account.id = ""
            this.account.number = ""
          })
      .catch(error => alert(error))
    }
  }
}
</script>

<style scoped>

</style>