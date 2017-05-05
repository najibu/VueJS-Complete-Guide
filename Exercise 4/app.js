new Vue({
  el: '#exercise',
  data: {
    effectClasses: {
      highlight: false,
      shrink: true
    }
  },
  methods: {
    startEffect: function() {
      var vm = this;
      setInterval(function(){
        vm.effectClasses.highlight = !vm.effectClasses.highlight;
        vm.effectClasses.highlight = !vm.effectClasses.highlight;
      }, 1000);
    },
    startProgress: function(){

    }
  }
});
