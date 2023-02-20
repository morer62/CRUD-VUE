var app = new Vue({
  el: '#app',
  data: {
    name: '',
    email: '',
    users: []
  },
  methods: {
    addUser: function() {
      this.users.push({
        name: this.name,
        email: this.email
      });
      this.name = '';
      this.email = '';
    },
    editUser: function(index) {
      var user = this.users[index];
      this.name = user.name;
      this.email = user.email;
      this.deleteUser(index);
    },
    deleteUser: function(index) {
      this.users.splice(index, 1);
    }
  }
});
