<template>
  <div class="home">
    <h1>WITHDRAW SOME MONEY</h1>
    Enter your account number:
    <input v-model="accountNr">
    <br>
    <br>
    Enter the amount:
    <input v-model="amount">
    <br>
    <br>
    <button v-on:click="withdraw">SUBMIT</button>
  </div>
</template>

<script>
export default {
  name: "Withdraw",
  data: function () {
    return {
      accountNr:'',
      amount:''
    }
  },
  methods: {
    withdraw: function () {
      this.$http.put('/withdraw/' + this.accountNr + "/" + this.amount)
          .then(response => {
            console.log(response.data);
            alert(response.data)
            this.accountNr = ""
            this.amount = ""
          })
          .catch(error => alert(error))
    }
  }
}
</script>

<style scoped>

</style>