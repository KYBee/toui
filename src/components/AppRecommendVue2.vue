<template>
  <div class="recommend"> 
    <div class="app-info-top">
      <div style="cursor: pointer"><font-awesome-icon :icon="['fas', 'chevron-left']" @click="closeSelectItemModal" /></div>
      <div class="app-info-title">그룹화 옵션</div>
    </div>
    <div class="recommend-container">
      <div class="recommend-item recommend-{{ index }}" v-for="(item, index) in selectedItem" :key="index">
        <div class="recommend-title"  @click="openRecommendGroupingModal(index + 1)">{{ item }}</div>
        <div class="app-option-toggle">
            <img v-if="this.checked[index] === true" src="@/assets/toggle/toggle-on.svg" alt="" @click="changeMode(index)">
            <img v-if="this.checked[index] === false" src="@/assets/toggle/toggle-off.svg" alt="" @click="changeMode(index)">
        </div>
      </div>
    </div>
  </div>
  <div>
    <AppRecommendDetailTwoOne v-show="closeRecommendGroupCheck1" @closeRecommendGroupingModal="closeRecommendGroupingModal"/>
    <AppRecommendDetailTwoTwo v-show="closeRecommendGroupCheck2" @closeRecommendGroupingModal="closeRecommendGroupingModal"/>
    <AppRecommendDetailTwoThree v-show="closeRecommendGroupCheck3" @closeRecommendGroupingModal="closeRecommendGroupingModal"/>
    <AppRecommendDetailTwoFour v-show="closeRecommendGroupCheck4" @closeRecommendGroupingModal="closeRecommendGroupingModal"/>
  </div>
</template>

<script>
import AppRecommendDetailTwoOne from '@/components/AppRecommendDetail/AppRecommendDetailTwoOne';
import AppRecommendDetailTwoTwo from '@/components/AppRecommendDetail/AppRecommendDetailTwoTwo';
import AppRecommendDetailTwoThree from '@/components/AppRecommendDetail/AppRecommendDetailTwoThree';
import AppRecommendDetailTwoFour from '@/components/AppRecommendDetail/AppRecommendDetailTwoFour';




export default {
  components: {
    AppRecommendDetailTwoOne,
    AppRecommendDetailTwoTwo,
    AppRecommendDetailTwoThree,
    AppRecommendDetailTwoFour,

  },
  created() {
    let index = 0;

    for (let item of this.name) {
      if (index === this.categoryType) {
        this.selectedItem = item;
        break;
      } else {
        index += 1;
      }
    }
  },
  mounted() {

  },
  methods: {
    closeSelectItemModal : function() {
      let op = [];
      
      for (let i = 0; i < this.checked.length; i++) {
        if (this.checked[i] === true) op.push(i + 1)
      }
      this.$emit("closeSelectItemModal", op);
    },
    changeMode : function(value) {
      this.checked[value] = !this.checked[value];
    },
    closeRecommendGroupingModal: function() {
      this.closeRecommendGroupCheck1 = false;
      this.closeRecommendGroupCheck2 = false;
      this.closeRecommendGroupCheck3 = false;
      this.closeRecommendGroupCheck4 = false;
      this.closeRecommendGroupCheck5 = false;
      this.closeRecommendGroupCheck6 = false;
      this.closeRecommendGroupCheck7 = false;
      this.closeRecommendGroupCheck8 = false;
      this.closeRecommendGroupCheck9 = false;
      this.closeRecommendGroupCheck10 = false;
    },
    openRecommendGroupingModal: function(value) {
      if (value === 1) {
        this.closeRecommendGroupCheck1 = true;
      } else if (value === 2) {
        this.closeRecommendGroupCheck2 = true;
      } else if (value === 3) {
        this.closeRecommendGroupCheck3 = true;
      } else if (value === 4) {
        this.closeRecommendGroupCheck4 = true;
      } else if (value === 5) {
        this.closeRecommendGroupCheck5 = true;
      } else if (value === 6) {
        this.closeRecommendGroupCheck6 = true;
      } else if (value === 7) {
        this.closeRecommendGroupCheck7 = true;
      } else if (value === 8) {
        this.closeRecommendGroupCheck8 = true;
      } else if (value === 9) {
        this.closeRecommendGroupCheck9 = true;
      } else if (value === 10) {
        this.closeRecommendGroupCheck10 = true;
      }
    }
  },

  data() {
    return {
      closeRecommendGroupCheck1: false,
      closeRecommendGroupCheck2: false,
      closeRecommendGroupCheck3: false,
      closeRecommendGroupCheck4: false,
      closeRecommendGroupCheck5: false,
      closeRecommendGroupCheck6: false,
      closeRecommendGroupCheck7: false,
      closeRecommendGroupCheck8: false,
      closeRecommendGroupCheck9: false,
      closeRecommendGroupCheck10: false,

      checked:[true, true, true, true],
      categoryType: 2,
      selectedItem:[],
      name : [
        [],
        [
          "건강/운동",
          "금융",
          "기본",
          "소셜",
          "쇼핑",
          "지도",
          "엔터테인먼트",
          "식음료",
          "의료"
        ],
        [
          "빨강",
          "노랑",
          "파랑",
          "하양"
        ],
        [
          "삼성",
          "구글",
          "카카오",
          "Meta",
          "네이버",
          "KB국민은행"
        ],
      ]
    }
  }

}
</script>

<style scoped>
.recommend {
  margin:0 auto;
  display:flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 360px;
  height: 730px;
  background: #F6F6F6;
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

.recommend-item {
  width: 90%;
  margin: 0 auto;
  border-bottom: 1px solid #EFEFEF;
  height: 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  cursor: pointer;
}

.recommend-item:last-child {
  border-bottom: 0px;
}

.recommend-title {
  font-size: 16px;
  width: 250px;
  text-align: left;
}

</style>