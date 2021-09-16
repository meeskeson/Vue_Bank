<template>
  <div class="home">
    <h1>TRANSFER MONEY</h1>
    Insert the account number FROM where you take money:
    <input v-model="accountFrom">
    <br>
    <br>
    Insert the account number where you transfer the money TO:
    <input v-model="accountTo">
    <br>
    <br>
    Enter the amount:
    <input v-model="amount">
    <br>
    <br>
    <button v-on:click="transfer">SUBMIT</button>
  </div>
</template>

<script>
export default {
  name: "Transfer",
  data: function () {
    return {
      accountFrom:'',
      accountTo:'',
      amount:''
    }
  },
  methods: {
    transfer: function () {
      this.$http.put('/transfer/' + this.accountFrom + '/' + this.accountTo + '/' + this.amount)
      .then(response => {
        console.log(response.data);
        alert(response.data)
        this.accountFrom = ""
        this.accountTo = ""
        this.amount = ""
      })
      .catch(error => alert(error))
    }
  }
}
</script>

<style scoped>

</style>