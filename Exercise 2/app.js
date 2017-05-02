new Vue({
  el: '#exercise',
  data: {
    value: ''
  },
  methods: {
    showAlert: function(){
      return alert('Alert!');
    },
    store: function(){
      this.value = event.target.value;
    },
    storeEnter: function(){
      this.value = event.target.value;
    }
  }
});