new Vue({
  el: '#app',
  data: {
    counter: 0,
    clicks: 0
  },
  methods: {
    increment(){
      this.clicks++;
    }
  },
  computed: {
    counter(){
      return this.clicks * 2;
    }
  }
});