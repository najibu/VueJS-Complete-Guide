<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
              <button @click="selectedComponent= 'appQuote'">Quote</button>
              <button @click="selectedComponent= 'appAuthor'">Author</button>
              <button @click="selectedComponent= 'appNew'">New</button>
              <hr>
              <keep-alive>
                <component :is="selectedComponent"></component>
              </keep-alive>
               <!-- <appQuote>
                 <h2 slot="title">{{ quoteTitle }}</h2>
                 <p>A wonderful quote</p>
               </appQuote> -->
            </div>
        </div>
    </div>
</template>

<script>
  import Quote from './components/Quote.vue';
  import Author from './components/Author.vue';
  import New from './components/New.vue';

    export default {
        data () {
          return {
            quoteTitle: 'The Qoute',
            selectedComponent: 'appQuote'
          }
        },
        components: {
          appQuote: Quote,
          appAuthor: Author,
          appNew: New
        }
    }
</script>

<style>
</style>
