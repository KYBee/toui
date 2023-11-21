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
      {idx: 36, name: "똑닥", src: require("@/assets/img/icon/똑닥.png"), function: 9, color: 2, company: 10, numCnt: 750, op: 0},
      {idx: 37, name: "삼성서울병원", src: require("@/assets/img/icon/삼성서울병원.png"), function: 9, color: 2, company: 10, numCnt: 780, op: 0},
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