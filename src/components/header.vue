<template>
  <div class="header" v-bind:class="[transparent ? 'transparentHeader' : '']">
    <img
      @click="back()"
      style="cursor: pointer"
      src="@/assets/moovietime-logo@2x.png"
      alt="movie-logo"
    />
    <svg
      style="position: absolute; left: 353px"
      width="20"
      height="16"
      viewBox="0 0 20 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16 0L18 4H15L13 0H11L13 4H10L8 0H6L8 4H5L3 0H2C0.895 0 0.00999999 0.895 0.00999999 2L0 14C0 15.105 0.895 16 2 16H18C19.105 16 20 15.105 20 14V0H16Z"
        fill="white"
        fill-opacity="0.17"
      />
    </svg>

    <input
      style="background: rgba(0, 0, 0, 0.13)"
      type="text"
      v-model="key"
      placeholder="find movie"
    />
    <svg
      style="position: absolute; left: 45%;"
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.76562 7.3125C9.23438 6.575 9.50937 5.7 9.50937 4.75938C9.50937 2.13125 7.38125 0 4.75625 0C2.12812 0 0 2.13125 0 4.75938C0 7.3875 2.12813 9.51875 4.75313 9.51875C5.70625 9.51875 6.59375 9.2375 7.3375 8.75625L7.55313 8.60625L10.9469 12L12 10.9281L8.60938 7.53438L8.76562 7.3125ZM7.41875 2.1C8.12813 2.80937 8.51875 3.75312 8.51875 4.75625C8.51875 5.75937 8.12813 6.70313 7.41875 7.4125C6.70937 8.12188 5.76562 8.5125 4.7625 8.5125C3.75937 8.5125 2.81562 8.12188 2.10625 7.4125C1.39687 6.70313 1.00625 5.75937 1.00625 4.75625C1.00625 3.75312 1.39687 2.80937 2.10625 2.1C2.81562 1.39062 3.75937 1 4.7625 1C5.76562 1 6.70937 1.39062 7.41875 2.1Z"
        fill="white"
      />
    </svg>

    <div
      v-if="key !== ''"
      style="
        position: fixed;
        z-index: 1000;
           left: 16.3%;
    top: 5%;
        color: white;
        background: rgba(0, 0, 0, 0.9);
            width: 642px;
      "
    >
      <ul style="list-style-type:none" v-for="(autocomplete, index) in suggest" :key="index">
        <li @click="movies(autocomplete.id)">{{ autocomplete.title }}</li>
      </ul>
    </div>
    <pre>searchMovie</pre>
    <div style="color: white" class="menus">
      <a class="active" href="#home">CATEGORIES</a>
      <a href="#news">MOVIES</a>
      <a href="#contact">TV Shows</a>
      <a href="#about">LOGIN</a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    transparent: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      key: "",
      suggest: null,
    };
  },
  methods: {
    back() {
      this.$router.push({
        path: "/",
      });
    },
    movies(id) {
      this.key = "";
      this.$router.push({
        path: "/details",
        query: { id: id },
      });
    },
  },
  watch: {
    key: {
      handler: function (val, oldVal) {
        console.log("watch 1", "newval: ", val, "   oldVal:", oldVal);
        if (val) {
          this.$store.dispatch("dispatchSearch", val).then((response) => {
            console.log("asaa", response);
            this.suggest = response;
          });
        }
      },
      deep: true,
    },
  },
};
</script>


<style lang="scss" scoped>
.transparentHeader {
  position: fixed;
  top: 0;
}
.header {
  height: 66px;
  width: 100%;
  display: flex;
  color: rgba(41, 30, 30, 0.13);
  background: rgba(255, 255, 255, 0.05);
  align-items: center;
  img {
    width: 112.1px;
    height: 31px;
    padding: 0 21px 0 10%;
  }
  input {
    width: 600px;
    height: 36px;
    margin: 0 21px 0 0;
    padding-left: 36px;
  }
  .menus {
    display: inline;
    a {
      padding: 0 30px 0 30px;
      color: white;
      text-decoration: none;
    }
  }
}
</style>