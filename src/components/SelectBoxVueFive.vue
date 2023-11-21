<template>
  <div class="selectBox" v-show="defaultOptionCheck">
    <div class="selectItem" @click="sortingOptions">정렬</div>
    <div class="selectItem" v-if="sortingOp !== 0" @click="categorizingOptions">그룹핑</div>
    <div class="selectItem">설정</div>
  </div>
  <div class="selectBox" v-show="sortingOptionCheck">
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
    <div class="selectItem" v-if="categorizingOp === 0" style="color: darkblue;" @click="appSorting(99)">없음&nbsp;<font-awesome-icon :icon="['fas', 'check']" /></div>
    <div class="selectItem" v-else @click="appSorting(99)">없음</div>

    <div class="selectItem" v-if="categorizingOp === 1" style="color: darkblue;" @click="appCategorizing(1)">기능 별&nbsp;<font-awesome-icon :icon="['fas', 'check']" /></div>
    <div class="selectItem" v-else @click="appCategorizing(1)">기능 별</div>

    <div class="selectItem" v-if="categorizingOp === 2" style="color: darkblue;" @click="appCategorizing(2)">색상 별&nbsp;<font-awesome-icon :icon="['fas', 'check']" /></div>
    <div class="selectItem" v-else @click="appCategorizing(2)">색상 별</div>

    <div class="selectItem" v-if="categorizingOp === 3" style="color: darkblue;" @click="appCategorizing(3)">회사 별&nbsp;<font-awesome-icon :icon="['fas', 'check']" /></div>
    <div class="selectItem" v-else @click="appCategorizing(3)">회사 별</div>
  </div>
  <div class="selectBoxDetail" v-show="categoryItemSelectCheck1">
    <AppRecommendVue1 v-model:categoryType="this.categorizingOp" @closeSelectItemModal="closeSelectItemModal" />
  </div>
  <div class="selectBoxDetail" v-show="categoryItemSelectCheck2">
    <AppRecommendVue2 v-model:categoryType="this.categorizingOp" @closeSelectItemModal="closeSelectItemModal" />
  </div>
  <div class="selectBoxDetail" v-show="categoryItemSelectCheck3">
    <AppRecommendVue3 v-model:categoryType="this.categorizingOp" @closeSelectItemModal="closeSelectItemModal" />
  </div>

</template>

<script>
import AppRecommendVue1 from './AppRecommendVue1.vue';
import AppRecommendVue2 from './AppRecommendVue2.vue';
import AppRecommendVue3 from './AppRecommendVue3.vue';

export default {
  components: {
    AppRecommendVue1,
    AppRecommendVue2,
    AppRecommendVue3,

  },
  props: {
    numberCnt:Number,
    sortingOption:Number,
  },
  data() {
    return {
      defaultOptionCheck: true,
      sortingOptionCheck: false,
      categorizingOptionCheck: false,
      categoryItemSelectCheck1: false,
      categoryItemSelectCheck2: false,
      categoryItemSelectCheck3: false,
      sortingOp: 1,
      categorizingOp: 0,
    }
  },
  watch: {
    numberCnt: function() {
      this.defaultOptionCheck = true;
      this.categorizingOptionCheck = false;
      this.sortingOptionCheck = false;
      this.categoryItemSelectCheck1 = false;
      this.categoryItemSelectCheck2 = false;
      this.categoryItemSelectCheck3 = false;

    },

    sortingOption: function() {
      this.sortingOp = this.sortingOption;
    }
  },
  created() {
    this.appSorting(this.sortingOp);
    this.sortingOp = this.sortingOption;
  },
  methods: {
    sortingOptions: function() {
      this.defaultOptionCheck = false;
      this.categorizingOptionCheck = false;
      this.sortingOptionCheck = true;
      this.categoryItemSelectCheck1 = false;
      this.categoryItemSelectCheck2 = false;
      this.categoryItemSelectCheck3 = false;

    },
    categorizingOptions: function() {
      this.defaultOptionCheck = false;
      this.sortingOptionCheck = false;
      this.categorizingOptionCheck = true;
      this.categoryItemSelectCheck1 = false;
      this.categoryItemSelectCheck2 = false;
      this.categoryItemSelectCheck3 = false;

    },
    appSorting: function(value) {
      this.$emit("appSorting", value);
      this.defaultOptionCheck = true;
      this.categorizingOptionCheck = false;
      this.sortingOptionCheck = false;
      this.categoryItemSelectCheck1 = false;
      this.categoryItemSelectCheck2 = false;
      this.categoryItemSelectCheck3 = false;

      if (value == 0) {
        this.categorizingOp = 0;
      }

      if (value == 99) {
        this.categorizingOp = 0;
      } else {
        this.sortingOp = value;
      }
      
    },
    appCategorizing: function(value) {
      this.defaultOptionCheck = false;
      this.categorizingOptionCheck = false;
      this.sortingOptionCheck = false;

      this.categorizingOp = value;

      if (value === 1) {
        this.categoryItemSelectCheck1 = true;
        this.categoryItemSelectCheck2 = false;
        this.categoryItemSelectCheck3 = false;
      } else if (value === 2) {
        this.categoryItemSelectCheck1 = false;
        this.categoryItemSelectCheck2 = true;
        this.categoryItemSelectCheck3 = false;
      } else {
        this.categoryItemSelectCheck1 = false;
        this.categoryItemSelectCheck2 = false;
        this.categoryItemSelectCheck3 = true;
      }
    },
    closeSelectItemModal: function(value) {
      this.$emit("appCategorizing", this.categorizingOp, value);

      this.defaultOptionCheck = true;
      this.sortingOptionCheck = false;
      this.categoryItemSelectCheck = false;
      this.categorizingOptionCheck = false;
      this.categoryItemSelectCheck1 = false;
      this.categoryItemSelectCheck2 = false;
      this.categoryItemSelectCheck3 = false;
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
  border-radius: 25px;
  background: #FFF;
  top: 30px;
  left: 190px;
  position: relative;
  box-shadow: 0 2px 8px rgba(0,0,0,0.2);
}

.selectItem {
  width: 70%;
  margin: 0 auto;
  height: 50px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
}

</style>
