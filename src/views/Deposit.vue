<template>
  <div class="home">
    <h1>Deposit money</h1>
    Enter your account number:
    <input v-model="accountNr">
    <br>
    <br>
    Enter the amount:
    <input v-model="amount">
    <br>
    <br>
    <button v-on:click="deposit">SUBMIT</button>
  </div>
</template>

<script>
export default {
  name: "Deposit",
  data: function () {
    return {
      accountNr:'',
      amount:''
    }
  },
  methods: {
    deposit: function () {
      this.$http.put('/deposit/' + this.accountNr + "/" + this.amount)
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