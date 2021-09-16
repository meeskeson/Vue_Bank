<template>
  <div class="home">
    <h1>Find your balance</h1>
    Enter your account number:
    <input v-model="accountNr">
    <br>
    <br>
    <button v-on:click="submit">SUBMIT</button>
  </div>
</template>

<script>
export default {
  name: "Balance",
  data: function () {
    return {
      accountNr: ''
    }
  },
  methods: {
    submit: function () {
      this.$http.get('/balance/' + this.accountNr)
      .then(response => {
        console.log(response.data);
        alert("Your balance is " + response.data)
        this.accountNr = ""
      })
          .catch(function (error) {
            alert(error)
          })
  }
}
}
</script>

<style scoped>

</style>