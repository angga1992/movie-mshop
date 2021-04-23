<template>
  <div class="row">
    <div v-for="(list, index) in getMovies" :key="index" class="column">
      <div class="card" @click="movies(list.id)">
        <img style="height: 100%; width: 100%; object-fit: cover;" :src="`http://image.tmdb.org/t/p/w200/${list.poster_path}`" alt="">
        <div style="display: flex; flex-direction: column">
          <span class="list-title">{{list.title}}</span>
          <span class="realese-date">{{list.release_date}}</span>
        </div>
      </div>
    </div>

    <div style="display: flex; width: 100%; justify-content: center">
      <div>Loadmore</div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      key: ''
    };
  },
  methods: {
    movies(id) {
      this.key = "";
      this.$router.push({
        path: "/details",
        query: { id: id },
      });
    }
  },
  computed: {
      getMovies () {
          return this.$store.getters.getListMovies
      }
  }
};
</script>


<style scoped>
* {
  box-sizing: border-box;
}

body {
  font-family: Arial, Helvetica, sans-serif;
}

/* Float four columns side by side */
.column {
  float: left;
  width: 25%;
  padding: 0 10px;
  margin-bottom: 20px;
}

/* Remove extra left and right margins, due to padding */
.row {
  margin: 0 -5px;
  position: absolute;
  top: 55%;
  width: 100%;
  justify-content: center;
  /* display: flex; */
  padding: 0 15% 0 27%;
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}

/* Responsive columns */
@media screen and (max-width: 600px) {
  .column {
    width: 100%;
    display: block;
    margin-bottom: 20px;
  }
}

/* Style the counter cards */
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  /* padding: 16px; */
  text-align: center;
  background-color: #f1f1f1;
  width: 220px;
  height: 330px;
  margin-bottom: 60px;
  cursor: pointer;
}
.list-title {
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
  color:white;
}
.realese-date {
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 17px;
  letter-spacing: 0em;
  text-align: left;
}
</style>