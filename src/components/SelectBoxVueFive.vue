<template>
  <div class="selectBox" v-show="defaultOptionCheck">
    <div class="selectItem" @click="sortingOptions">정렬</div>
    <div class="selectItem" @click="categorizingOptions">카테고리</div>
    <div class="selectItem">설정</div>
  </div>
  <div class="selectBox dark" v-show="sortingOptionCheck">
    <div class="selectItem" v-if="sortingOp === 0" style="color: darkblue;" @click="appSorting(0)">직접 설정&nbsp;<font-awesome-icon :icon="['fas', 'check']" /> </div>
    <div class="selectItem" v-else @click="appSorting(0)">직접 설정</div>

    <div class="selectItem" v-if="sortingOp === 1" style="color: darkblue;" @click="appSorting(1)">가나다 순&nbsp;<font-awesome-icon :icon="['fas', 'check']" /></div>
    <div class="selectItem" v-else @click="appSorting(1)">가나다 순</div>

    <div class="selectItem" v-if="sortingOp === 2" style="color: darkblue;" @click="appSorting(2)">설치 순&nbsp;<font-awesome-icon :icon="['fas', 'check']" /></div>
    <div class="selectItem" v-else @click="appSorting(2)">설치 순</div>

    <div class="selectItem" v-if="sortingOp === 3" style="color: darkblue;" @click="appSorting(3)">빈도 순&nbsp;<font-awesome-icon :icon="['fas', 'check']" /></div>
    <div class="selectItem" v-else @click="appSorting(3)">빈도 순</div>

  </div>
  <div class="selectBox dark" v-show="categorizingOptionCheck">
    <div class="selectItem" v-if="categorizingOp === 0" style="color: darkblue;" @click="appCategorizing(0)">직접 설정&nbsp;<font-awesome-icon :icon="['fas', 'check']" /></div>
    <div class="selectItem" v-else @click="appCategorizing(0)">직접 설정</div>

    <div class="selectItem" v-if="categorizingOp === 1" style="color: darkblue;" @click="appCategorizing(1)">기능 별&nbsp;<font-awesome-icon :icon="['fas', 'check']" /></div>
    <div class="selectItem" v-else @click="appCategorizing(1)">기능 별</div>

    <div class="selectItem" v-if="categorizingOp === 2" style="color: darkblue;" @click="appCategorizing(2)">색상 별&nbsp;<font-awesome-icon :icon="['fas', 'check']" /></div>
    <div class="selectItem" v-else @click="appCategorizing(2)">색상 별</div>

    <div class="selectItem" v-if="categorizingOp === 3" style="color: darkblue;" @click="appCategorizing(3)">회사 별&nbsp;<font-awesome-icon :icon="['fas', 'check']" /></div>
    <div class="selectItem" v-else @click="appCategorizing(3)">회사 별</div>
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
      sortingOp: 0,
      categorizingOp: 0,
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
      this.sortingOp = value;
    },
    appCategorizing: function(value) {
      this.$emit("appCategorizing", value);
      this.defaultOptionCheck = true;
      this.categorizingOptionCheck = false;
      this.sortingOptionCheck = false;
      this.categorizingOp = value;
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
