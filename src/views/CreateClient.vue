<template>
  <div class="home">
    <h1>Become our client!</h1>

    Enter first name: <input v-model="client.firstname">
    <br>
    <br>
    Enter last name: <input v-model="client.lastname">
    <br>
    <br>
    Enter your address: <input v-model="client.address">
    <br>
    <br>
    <button v-on:click="clientcreate">SUBMIT</button>
  </div>
</template>

<script>
export default {
  name: "CreateClient",
  data: function () {
    return {
      client: {}
    }
  },
  methods: {
    clientcreate: function () {
      this.$http.post('/createclient', this.client)
          .then(response => {
            console.log(response.data);
            alert("Your account id is " + response.data)
            this.client.firstname = ""
            this.client.lastname = ""
            this.client.address = ""
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