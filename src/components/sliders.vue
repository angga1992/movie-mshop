<template>
  <div style="justify-content: center; display: flex; background: #1E232B;">
    <transition-group v-if="getMovies" name="fade" tag="div" style="padding: 50px; ">
      <div v-for="i in [currentIndex]" :key="i" style="    display: flex; width: 518px; height: 324px; align-items: center;">
        <img :src="`http://image.tmdb.org/t/p/w200/${currentImg}`" />
        <div style="display: flex; flex-direction: column; text-align: left; background: #000000;">
            <span>rating</span>
            <span>title</span>
            <span>time and genre</span>
            <span>When the crew of a space junk collector ship called The Victory discovers a humanoid robot named Dorothy that's known to be a weapon of mass destruction, they get involved in a risky business deal which puts their lives at stake.</span>
        </div>
      </div>
    </transition-group>
    <a class="prev" @click="prev" href="#">&#10094; Previous</a>
    <a class="next" @click="next" href="#">&#10095; Next</a>
  </div>
</template>

<script>
export default {
  name: "Slider",
  data() {
    return {
      images: [],
      timer: null,
      currentIndex: 0,
    };
  },

  mounted: function () {
    this.startSlide();
    setTimeout(() => {
        this.createImage()
    }, 300);
  },

  methods: {
    startSlide: function () {
      this.timer = setInterval(this.next, 4000);
    },

    next: function () {
      this.currentIndex += 1;
    },
    prev: function () {
      this.currentIndex -= 1;
    },
    createImage () {
        for (let i = 0; i < this.getMovies.length; i++) {
            this.images.push(this.getMovies[i].poster_path)
        }
        console.log(this.images)
    }
  },

  computed: {
    currentImg: function () {
      return this.images[Math.abs(this.currentIndex) % this.images.length];
    },
    getMovies () {
        console.log('component', this.$store.getters.gettersSlider)
        return this.$store.getters.gettersSlider
    }
  },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.9s ease;
  overflow: hidden;
  visibility: visible;
  position: absolute;
  width: 100%;
  opacity: 1;
}

.fade-enter,
.fade-leave-to {
  visibility: hidden;
  width: 100%;
  opacity: 0;
}

img {
  height: 364px;
  width: 243px;
  object-fit: cover;
}

.prev,
.next {
  cursor: pointer;
  position: absolute;
  top: 40%;
  width: auto;
  padding: 16px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.7s ease;
  border-radius: 0 4px 4px 0;
  text-decoration: none;
  user-select: none;
}

.next {
  right: 0;
  color: black
}

.prev {
  left: 0;
  color: black
}

.prev:hover,
.next:hover {
  background-color: rgba(0, 0, 0, 0.9);
}
</style>