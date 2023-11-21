<template>
  <div class="recommend-detail"> 
    <div class="app-info-top">
      <div style="cursor: pointer"><font-awesome-icon :icon="['fas', 'chevron-left']" @click="closeSelectItemModal" /></div>
      <div class="app-info-title">그룹화 대상 어플리케이션</div>
    </div>
    <div class="recommend-container">
      <div class="recommend-application">
        <div v-for="(item, index) in applications" :key="index">
          <ApplicationVue v-bind:application="item" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ApplicationVue from '@/components/ApplicationVueBlack';
export default {
  components: {
    ApplicationVue,
  },
  data () {
    return {
      applications:[
        {idx: 9, name: "캘린더", src: require("@/assets/img/icon/캘린더.png"), function: 3, color: 2, company: 1, numCnt: 160, op: 0},
        {idx: 10, name: "내 파일", src: require("@/assets/img/icon/내 파일.png"), function: 3, color: 2, company: 1, numCnt: 180, op: 0},
        {idx: 5, name: "SmartThings", src: require("@/assets/img/icon/SmartThings.png"), function: 3, color: 4, company: 1, numCnt: 220, op: 0},
        {idx: 4, name: "Samsung Notes", src: require("@/assets/img/icon/Samsung Notes.png"), function: 3, color: 1, company: 1, numCnt: 240, op: 0},
        {idx: 6, name: "음성 녹음", src: require("@/assets/img/icon/삼성 음성녹음.png"), function: 3, color: 1, company: 1, numCnt: 260, op: 0},
        {idx: 16, name: "Galaxy Wearable", src: require("@/assets/img/icon/Galaxy Wearable.png"), function: 3, color: 3, company: 1, numCnt: 350, op: 0},
        {idx: 13, name: "Good Lock", src: require("@/assets/img/icon/Good Lock.png"), function: 3, color: 1, company: 1, numCnt: 320, op: 0},
        {idx: 12, name: "Bixby", src: require("@/assets/img/icon/Bixby.png"), function: 3, color: 10, company: 1, numCnt: 420, op: 0},
        {idx: 14, name: "카메라", src: require("@/assets/img/icon/카메라.png"), function: 3, color: 1, company: 1, numCnt: 80, op: 0},
        {idx: 15, name: "갤러리", src: require("@/assets/img/icon/갤러리.png"), function: 3, color: 1, company: 1, numCnt: 130, op: 0},
      ],
    }
  },

  methods: {
    closeSelectItemModal: function() {
      this.$emit("closeRecommendGroupingModal");
    }
  }
}
</script>

<style>
.recommend-detail {
  margin: 0 auto;
  background: #F6F6F6;
  position: relative;
  top: -730px;
  height: 730px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 360px;
}

.app-info-top {
  margin-top: 12px;
  display: flex;
  height: 60px;
  align-items: center;
  justify-content: flex-start;
  width: 90%;
}

.app-info-title {
  margin: 16px;
  font-size: 20px;
  font-weight: 700;
}

.recommend-container {
  width: 360px;
  height: 680px;
  background: white;
  border-radius: 25px 25px 0px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: scroll;
}

.recommend-application {
  width: 320px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  padding: 50px 20px 50px 20px;
}


</style>