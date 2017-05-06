new Vue({
  el: '#app',
  data: {
    title: 'hello world!'
  },
  methods: {
    changeTitle() {
      this.title = 'Changed title';
    },
    writeTitle(event){
      this.title = event.target.value;
    },
    sayHello: function(){
      return 'Hello!';
    }
  }
});