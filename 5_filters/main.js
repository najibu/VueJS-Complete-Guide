Vue.filter('uppercase', function(value){
  return value.toUpperCase();
});

new Vue({
  el: '#app',
  data: {
    title: 'hello world!',
    message: 'something'
  },
  computed: {
    theTitle: function(){
      return this.title.toUpperCase();
    }
  },
  filters: {
    lowercase: function(value){
    return value.toLowerCase();
    }
  }
});