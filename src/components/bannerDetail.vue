<template>
  <div style="display: flex; flex-direction: column">
    <img
      width="100%"
      height="400px"
      style="object-fit: cover; mix-blend-mode: overlay"
      :src="`http://image.tmdb.org/t/p/w500/${url.poster_path}`"
      alt=""
    />
    <div style="display: flex; margin-top: -210px; padding-left: 10%">
      <div style="z-index: 1">
        <img
          width="220"
          height="330"
          :src="`http://image.tmdb.org/t/p/w500/${url.poster_path}`"
          alt=""
        />
      </div>
      <div
        style="
          display: flex;
          flex-direction: column;
          padding: 30px;
          margin-left: 9.4%;
          align-items: baseline;
        "
      >
        <span style="font-size: 18px; color: white">
          {{ url.release_date }}
        </span>
        <span style="font-size: 36px; color: white">
          {{ url.title }}
        </span>
        <div style="display: flex">
          <div v-for="(genre, index) in url.genres" :key="index">
            <span style="padding-right: 4px; font-size: 14px; color: white">{{
              genre.name + ","
            }}</span>
          </div>
        </div>
        <div>overview</div>
      </div>
    </div>
    <div
      style="
        display: flex;
        background: rgba(0, 0, 0, 0.5);
        width: 100%;
        height: 60px;
        margin-top: -183px;
      "
    >
      <div
        style="
          display: flex;
          padding-left: 30%;
          align-items: center;
        "
      >
        <div style="padding-right: 10px">
          <svg
            width="28"
            height="27"
            viewBox="0 0 28 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.0815 1.13274C13.4286 0.326776 14.5714 0.326779 14.9185 1.13274L18.0912 8.50027C18.236 8.83645 18.5529 9.06667 18.9173 9.10047L26.9047 9.84128C27.7785 9.92232 28.1316 11.0091 27.4724 11.5883L21.4459 16.8825C21.1709 17.124 21.0499 17.4966 21.1303 17.8536L22.894 25.679C23.087 26.535 22.1625 27.2067 21.4079 26.7587L14.5106 22.6632C14.1958 22.4763 13.8042 22.4763 13.4894 22.6632L6.59208 26.7587C5.83755 27.2067 4.91305 26.535 5.10599 25.679L6.86967 17.8536C6.95015 17.4965 6.82911 17.124 6.55413 16.8825L0.527634 11.5883C-0.131628 11.0091 0.2215 9.92232 1.09527 9.84128L9.08266 9.10047C9.44711 9.06667 9.76399 8.83645 9.90876 8.50027L13.0815 1.13274Z"
              fill="#FFB802"
            />
          </svg>
        </div>
        <div>
          <span>{{ url.vote_average }}</span>
        </div>
        <div class="info-movies">
          <span>USER SCORE</span>
          <span style="color: white">{{ url.vote_count }}</span>
        </div>
        <div class="bordered"></div>
        <div class="info-movies">
          <span>STATUS</span>
          <span style="color: white">{{ url.status }}</span>
        </div>
        <div class="bordered"></div>
        <div class="info-movies">
          <span>LANGUAGE</span>
          <span style="color: white">{{ url.spoken_languages[0].name }}</span>
        </div>
        <div class="bordered"></div>
        <div class="info-movies">
          <span>BUDGET</span>
          <span style="color: white">{{ url.budget }}</span>
        </div>
        <div class="bordered"></div>
        <div class="info-movies">
          <span>PRODUCTION</span>
          <span style="color: white">{{
            url.production_companies[0].name
          }}</span>
        </div>
      </div>
    </div>
    <div style="display: flex; height: 541px; background: white; flex-direction: column;">
        <div style="flex-direction: column; margin: 52px 23% 0px; text-align: initial;">
            <div style="color: #FF0000;">OVERVIEW</div>
            <div>{{url.overview}}</div>
        </div>
        <reviews :id="url.id" />
    </div>
  </div>
</template>

<script>
import reviews from '@/components/reviews'
export default {
  components: {
    reviews
  },
  props: {
    url: {
      type: Object,
      default: {},
    },
  },
};
</script>

<style scoped>
.info-movies {
  text-align: left;
  display: flex;
  font-size: 12px;
  flex-direction: column;
  padding: 0 20px 0 20px;
}
.bordered {
  border-right: 1px solid rgba(255, 255, 255, 0.2);
  padding: 5px 0 5px 0;
  height: 30px;
}
</style>