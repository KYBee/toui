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
      {idx: 21, name: "11번가", src: require("@/assets/img/icon/11번가.png"), function: 5, color: 1, company: 10, numCnt: 600, op: 0},
      {idx: 27, name: "AliExpress", src: require("@/assets/img/icon/AliExpress.png"), function: 5, color: 10, company: 3, numCnt: 650, op: 0},
      {idx: 24, name: "이마트몰", src: require("@/assets/img/icon/이마트몰.png"), function: 5, color: 2, company: 10, numCnt: 670, op: 0},
      {idx: 26, name: "당근", src: require("@/assets/img/icon/당근.png"), function: 5, color: 4, company: 10, numCnt: 110, op: 0},

    
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