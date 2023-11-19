<template>
  <div class="selectBox" v-show="defaultOptionCheck">
    <div class="selectItem" @click="sortingOptions">정렬</div>
    <div class="selectItem" @click="categorizingOptions">카테고리</div>
    <div class="selectItem">설정</div>
  </div>
  <div class="selectBox dark" v-show="sortingOptionCheck">
    <div class="selectItem" @click="appSorting(0)">직접 설정</div>
    <div class="selectItem" @click="appSorting(1)">가나다 순</div>
    <div class="selectItem" @click="appSorting(2)">설치 순</div>
    <div class="selectItem" @click="appSorting(3)">빈도 순</div>
  </div>
  <div class="selectBox dark" v-show="categorizingOptionCheck">
    <div class="selectItem" @click="appCategorizing(0)">직접 설정</div>
    <div class="selectItem" @click="appCategorizing(1)">기능 별</div>
    <div class="selectItem" @click="appCategorizing(2)">색상 별</div>
    <div class="selectItem" @click="appCategorizing(3)">회사 별</div>
  </div>
</template>

<script>
export default {
  props: {
    numberCnt:Number,
  },
  data() {
    return {
      defaultOptionCheck: true,
      sortingOptionCheck: false,
      categorizingOptionCheck: false,
    }
  },
  watch: {
    numberCnt: function() {
      this.defaultOptionCheck = true;
      this.categorizingOptionCheck = false;
      this.sortingOptionCheck = false;
    }
  },
  methods: {
    sortingOptions: function() {
      this.defaultOptionCheck = false;
      this.categorizingOptionCheck = false;
      this.sortingOptionCheck = true;
    },
    categorizingOptions: function() {
      this.defaultOptionCheck = false;
      this.sortingOptionCheck = false;
      this.categorizingOptionCheck = true;
    },
    appSorting: function(value) {
      this.$emit("appSorting", value);
      this.defaultOptionCheck = true;
      this.categorizingOptionCheck = false;
      this.sortingOptionCheck = false;
    },
    appCategorizing: function(value) {
      this.$emit("appCategorizing", value);
      this.defaultOptionCheck = true;
      this.categorizingOptionCheck = false;
      this.sortingOptionCheck = false;
    }
  }
}
</script>

<style>

.selectBox {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 160px;
  border-radius: 20px;
  background: #EFEFEF;
  opacity: 0.9;
  top: 30px;
  left: 190px;
  position: relative;
}

.selectItem {
  width: 80%;
  margin: 0 auto;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.dark {
  background: #E6E6E6;
  opacity: 0.9;
}
</style>