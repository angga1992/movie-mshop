<template>
  <div class="filter-container">
    <div>Sort Result By</div>
    <form action="#" method="post">
      <div class="select">
        <select name="nameValueSelect" class="select__field" @change="onChange($event)" v-model="key" required>
          <option value="" selected>Popularity</option>
          <option value="popularity.asc">Popularity Ascending</option>
          <option value="popularity.desc">Popularity Descending </option>
          <option value="release_date.asc">Release Date Ascending</option>
          <option value="release_date.desc">Release Date Descending</option>
          <option value="revenue.asc">Rating Ascending</option>
          <option value="revenue.desc">Rating Descending</option>
        </select>
      </div>
    </form>
    <div
      style="
        display: flex;
        justify-content: space-between;
        padding: 18px 18px 0 18px;
      "
      v-for="(category, index) in getGenres"
      :key="index"
    >
      <!-- <pre>{{category.name}}</pre> -->
      <span>{{ category.name }}</span>
      <input
        type="checkbox"
        @click="changeGenre(category.id)"
        :name="category.name"
      />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tempId: [],
      key: ''
    };
  },
  methods: {
    onChange (event) {
        this.$store.commit('SORT_BY', event.target.value)
        setTimeout(() => {
            this.changeGenre()
        }, 300);
    },
    changeGenre(id) {
      this.tempId.push(id);
      console.log(`id: ${this.tempId}`);
      this.$store.dispatch("getList", this.tempId);
    },
  },
  computed: {
    getGenres() {
      return this.$store.getters.gettersGenres;
    },
  },
};
</script>


<style scoped>
.filter-container {
  width: 240px;
  height: 586px;
  background: linear-gradient(180deg, #0e1723 0%, rgba(30, 35, 42, 0) 100%);
  border-radius: 8px;
  position: absolute;
  top: 55%;
  left: 10%;
  z-index: 10;
}
*,
*:before,
*:after {
  box-sizing: border-box;
}

* {
  padding: 0;
  margin: 0;
}

form {
  padding: 1rem;
  max-width: 400px;
  margin: 1em auto;
}

.select {
  height: 40px;
  width: 100%;
  overflow: hidden;
  position: relative;
  border-radius: 3px;
  margin-bottom: 1em;
}

.select:after {
  content: "▼";
  padding: 12px 8px;
  position: absolute;
  right: 10px;
  top: 0;
  z-index: 1;
  text-align: center;
  width: 10%;
  height: 100%;
  pointer-events: none;
}

.select__field {
  height: 40px;
  width: 100%;
  padding: 5px 15px;
  color: #616263;
  background-color: rgba(224, 224, 224, 0.13);
  border: 1px solid #e3e3e3;
  outline: none;
  font-size: 16px;
  -webkit-appearance: none;
  /* for webkit browsers */
  -moz-appearance: none;
  /* for firefox */
  appearance: none;
  /* for modern browsers */
}

/* remove default caret for ie */

.select__field::-ms-expand {
  display: none;
}

.select__field:focus:invalid {
  border-color: #fd6347;
}

.select__field:required:valid {
  border-color: rgba(224, 224, 224, 0.13);;
}
</style>