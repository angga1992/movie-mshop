<template>
  <div v-if="detail">
    <bannerDetails :url="detail" />
    <headers :transparent="true" />
    <recomendation />
  </div>
</template>

<script>
import headers from "@/components/header";
import recomendation from "@/components/recomendation";
import bannerDetails from "@/components/bannerDetail";
export default {
  components: {
    headers,
    bannerDetails,
    recomendation
  },
  data() {
    return {
      detail: null,
    };
  },
  mounted() {
    this.getDetails(this.$route.query.id);
    this.getReviews(this.$route.query.id)
  },
  methods: {
    getDetails(id) {
      this.$store.dispatch("dispatchDetails", id).then((response) => {
        this.detail = response;
      });
    },
    getReviews(id) {
      this.$store.dispatch("dispatchReviews", id)
    },
  },
};
</script>