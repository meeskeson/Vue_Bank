<template>
<div class="home">
  Enter your account number:
  <input placeholder="Type account nr" v-model="accountNr"> <button v-on:click="transaction">Get data</button>
  <br>
  <br>
  Search by account to:
  <input placeholder="Type name" v-model="searchTerm"> <button v-on:click="search">SEARCH</button>
  <table>
    <tr>
      <th>Index</th>
      <th>Account nr</th>
      <th>Amount</th>
      <th>Account to/from</th>
      <th>Time</th>
      <th></th>
      <th><button v-on:click="sortRow">SORT</button></th>

    </tr>
    <tr v-for="row in table">
      <td>{{row.index}}</td>
      <td>{{row.number}}</td>
      <td>{{row.amount}}</td>
      <td>{{row.number_to}}</td>
      <td>{{row.time}}</td>
      <td><button v-on:click="deleteRow(row.index)">Delete</button></td>
    </tr>
  </table>
</div>
</template>

<script>
export default {
  name: "ShowList",
  data: function () {
    return {
      accountNr:'',
      table:'',
      searchTerm:''
    }
  },
  methods: {
    transaction: function () {
      this.$http.get("/gethistory/" + this.accountNr)
      .then(response => {
        console.log(response.data);
        this.table = response.data;
      })
        .catch(function (error) {
          alert(error)
        })
    },
    deleteRow: function (index) {
      this.$http.delete("/delete/" + index)
      .then(response => {
        console.log(response.data);
        alert(response.data);
        this.transaction(this.accountNr);
      })
      .catch(error => alert(error))
    },
    sortRow: function () {
      this.$http.get("/sort/" + this.accountNr)
      .then(response => {
        this.table = response.data
      })
          .catch(function (error) {
            alert(error)
      })
    },
    search: function () {
      this.$http.get("/search/" + this.searchTerm + "/" + this.accountNr)
      .then(response => {
        console.log(response.data);
        this.table = response.data;
      })
          .catch(function (error) {
            alert(error)
          })
    }
  }
}
</script>


<style scoped>
table {
  margin-left: 30%;
}
</style>