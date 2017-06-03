export const calLengthMixin = {
  computed: { 
    calLength () {
      return this.secondText + ' (' + this.secondText.length + ')';
    }
  }
}