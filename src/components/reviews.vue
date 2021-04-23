<template>
  <div>
    <h3 style="text-align: initial; padding: 0 10%; margin-top: 75px">
      reviews
    </h3>
    <div  style="display: flex; margin: 0px -13.5px; justify-content: space-between; padding: 10px;">
      <div
        style="
          width: 46%;
          margin: 0 2% 0 10%;
          background: #f9f9f9;
          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
        "
      >
        <div style="display: flex; justify-content: space-between">
          <div style="display: flex">
            <div
              style="
                margin: 5px;
                height: 48px;
                width: 48px;
                border: 1px solid gray;
                border-radius: 100%;
                background: rgba(30, 35, 43, 0.21);
              "
            ></div>
            <div style="padding: 10px; text-align: initial">
              <div style="font-size: 14px; color: #1e232a; font-weight: 700">
                {{getReviews[0].author}}
              </div>
              <div style="font-size: 12px; font-weight: 400; color: #666666">
                {{getReviews[0].created_at}}
              </div>
            </div>
          </div>
          <div
            style="
              border-radius: 7px;
              margin: 10px;
              height: 42px;
              width: 82px;
              background: rgba(196, 196, 196, 0.28);
              text-align: initial;
            "
          >
            <svg
              style="margin: 0 0 14px 0"
              width="15"
              height="14"
              viewBox="0 0 15 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.58155 1.13274C6.92863 0.326777 8.07137 0.326779 8.41845 1.13274L9.56338 3.79138C9.70816 4.12756 10.025 4.35778 10.3895 4.39158L13.2718 4.65891C14.1456 4.73995 14.4987 5.82676 13.8394 6.40591L11.6647 8.31637C11.3897 8.55794 11.2687 8.93044 11.3492 9.28751L11.9856 12.1114C12.1786 12.9674 11.2541 13.6391 10.4995 13.1911L8.01056 11.7132C7.69584 11.5263 7.30416 11.5263 6.98944 11.7132L4.50046 13.1911C3.74593 13.6391 2.82144 12.9674 3.01437 12.1114L3.65082 9.28751C3.73129 8.93044 3.61026 8.55794 3.33527 8.31637L1.16056 6.40591C0.501297 5.82676 0.854425 4.73995 1.7282 4.65891L4.61051 4.39158C4.97497 4.35778 5.29184 4.12756 5.43662 3.79138L6.58155 1.13274Z"
                fill="#FFB802"
              />
            </svg>
            <span style="font-size: 36px; font-weight: 600"> {{getReviews[0].author_details.rating}} </span>
          </div>
        </div>
        <div style="text-align: initial; padding: 10px; line-height: 19.5px">
          {{getReviews[1].content}}
        </div>
      </div>
      <div
        style="
          width: 46%;
          margin: 0px 10% 0px 2%;
          background: #f9f9f9;
          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
        "
      >
        <div style="display: flex; justify-content: space-between">
          <div style="display: flex">
            <div
              style="
                margin: 5px;
                height: 48px;
                width: 48px;
                border: 1px solid gray;
                border-radius: 100%;
                background: rgba(30, 35, 43, 0.21);
              "
            ></div>
            <div style="padding: 10px; text-align: initial">
              <div style="font-size: 14px; color: #1e232a; font-weight: 700">
                {{getReviews[1].author}}
              </div>
              <div style="font-size: 12px; font-weight: 400; color: #666666">
                {{getReviews[1].created_at}}
              </div>
            </div>
          </div>
          <div
            style="
              border-radius: 7px;
              margin: 10px;
              height: 42px;
              width: 82px;
              background: rgba(196, 196, 196, 0.28);
              text-align: initial;
            "
          >
            <svg
              style="margin: 0 0 14px 0"
              width="15"
              height="14"
              viewBox="0 0 15 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.58155 1.13274C6.92863 0.326777 8.07137 0.326779 8.41845 1.13274L9.56338 3.79138C9.70816 4.12756 10.025 4.35778 10.3895 4.39158L13.2718 4.65891C14.1456 4.73995 14.4987 5.82676 13.8394 6.40591L11.6647 8.31637C11.3897 8.55794 11.2687 8.93044 11.3492 9.28751L11.9856 12.1114C12.1786 12.9674 11.2541 13.6391 10.4995 13.1911L8.01056 11.7132C7.69584 11.5263 7.30416 11.5263 6.98944 11.7132L4.50046 13.1911C3.74593 13.6391 2.82144 12.9674 3.01437 12.1114L3.65082 9.28751C3.73129 8.93044 3.61026 8.55794 3.33527 8.31637L1.16056 6.40591C0.501297 5.82676 0.854425 4.73995 1.7282 4.65891L4.61051 4.39158C4.97497 4.35778 5.29184 4.12756 5.43662 3.79138L6.58155 1.13274Z"
                fill="#FFB802"
              />
            </svg>
            <span style="font-size: 36px; font-weight: 600"> {{getReviews[1].author_details.rating}} </span>
          </div>
        </div>
        <div style="text-align: initial; padding: 10px; line-height: 19.5px">
          {{getReviews[1].content}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: {
        type: Number,
        default: 0
    },
  },
  data () {
      return {
          reviews: []
      }
  },
  computed: {
    getReviews () {
      return this.$store.getters.getReviews
    }
  }
};
</script>