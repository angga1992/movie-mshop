<template>
  <div class="home">
    <headers></headers>
    <sliders></sliders>
    <wall></wall>
    <div style="display: inline-flex; width: 100%;">
        <filters></filters>
        <cardMovie></cardMovie>
    </div>
    <!-- <footers></footers> -->
  </div>
</template>

<script>
// @ is an alias to /src
import headers from '@/components/header'
import sliders from '@/components/sliders'
import wall from '@/components/wallDiscover'
import filters from '@/components/filterMovie'
import cardMovie from '@/components/cardMovie'
import footers from '@/components/footer'
export default {
  name: 'Home',
  components: {
    headers,
    sliders,
    wall,
    filters,
    cardMovie,
    footers
  },
  mounted () {
    this.getList()
    this.getGenres()
    this.getSlider()
  },
  methods: {
    getList () {
      this.$store.dispatch('getList')
    },
    getGenres () {
      this.$store.dispatch('getGenres')
    },
    getSlider () {
      this.$store.dispatch('dispatchSlider')
    }
  }
}
</script>
