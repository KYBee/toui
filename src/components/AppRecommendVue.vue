<template>
  <div class="recommend"> 
    <div class="app-info-top">
      <div style="cursor: pointer"><font-awesome-icon :icon="['fas', 'chevron-left']" @click="closeSelectItemModal" /></div>
      <div class="app-info-title">그룹화 옵션</div>
    </div>
    <div class="recommend-container">
      <div class="recommend-item" v-for="(item, index) in selectedItem" :key="index">
        <div class="recommend-title">{{ item }}</div>
        <div class="app-option-toggle">
            <img v-if="this.checked[index] === true" src="@/assets/toggle/toggle-on.svg" alt="" @click="changeMode(index)">
            <img v-if="this.checked[index] === false" src="@/assets/toggle/toggle-off.svg" alt="" @click="changeMode(index)">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

  created() {
    let index = 0;

    console.log(index);

    for (let item of this.name) {
      if (index === this.categoryType) {
        console.log("hello");
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
    }
  },

  data() {
    return {
      checked:[true, true, true, true, true, true, true, true, true],
      categoryType: 1,
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