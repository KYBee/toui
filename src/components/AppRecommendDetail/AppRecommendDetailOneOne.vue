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
        {idx: 1, name: "Samsung Health", src: require("@/assets/img/icon/Samsung Health.png"), function: 1, color: 10, company: 1, numCnt: 100, op: 0},
        {idx: 2, name: "더헬스", src: require("@/assets/img/icon/더헬스.png"), function: 1, color: 10, company: 1, numCnt: 200, op: 0},
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