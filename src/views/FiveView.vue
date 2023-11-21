<template>
  <div class="phoneContainer5">
    <div class="phone-background5">
      <PhoneTopBarVue />
      <div class="phone searchbar5">
        <input class="search5" type="text" placeholder="검색">
        <font-awesome-icon class="top-item5" style="color: white; cursor: pointer;" :icon="['fas', 'ellipsis-vertical']" @click="openSelectBoxModal" />
      </div>

      <div class="select-box-modal-wrap5" v-show="selectBoxModalCheck" @click.self="closeSelectBoxModal">
        <SelectBoxView @appSorting="appSorting" @appCategorizing="appCategorizing" :numberCnt="numberCnt" v-model:sortingOption="sortingOption"/>
      </div>

      <div class="content-middle5" :key="needToChange">
        <div class="appContainer5" v-for="(appPage, index) in this.application" :key="index">
          <div class="appLine5" v-for="(appList, index) in appPage" :key="index">
            <div class="appItem5" v-for="(app, i) in appList" :key="i">
              <ApplicationVue v-if="app.op === 0" v-bind:application="app" /> 
              <AppFolderVue v-else v-bind:application="app" v-bind:appList="app.appList" v-model:sortingOption="sortingOption"/>
            </div>
          </div>
        </div>
      </div>
      <PhoneBottomBarVue /> 
    </div>
  </div>
</template>

<script>
import PhoneTopBarVue from '@/components/PhoneTopBarVue.vue';
import PhoneBottomBarVue from '@/components/PhoneBottomBarVue.vue';
import ApplicationVue from '@/components/ApplicationVue';
import SelectBoxView from '@/components/SelectBoxVueFive.vue';
import AppFolderVue from '@/components/AppFolderVue.vue';

export default {
  components: {
    PhoneTopBarVue,
    PhoneBottomBarVue,
    ApplicationVue,
    SelectBoxView,
    AppFolderVue,
  },
  data() {
    return {
      functionList: [[], [], [], [], [], [], [], [], [],],
      colorList: [[], [], [], []],
      companyList: [[], [], [], [], [], []],
      needToChange: 0,
      numberCnt: 0,
      sortingOption: 1,
      selectBoxModalCheck: false,
      application: [
        [],
        [],
      ],

      applicationsOriginal: [
      {idx: 1, name: "Samsung Health", src: require("@/assets/img/icon/Samsung Health.png"), function: 1, color: 10, company: 1, numCnt: 100, op: 0},
        {idx: 2, name: "더헬스", src: require("@/assets/img/icon/더헬스.png"), function: 1, color: 10, company: 1, numCnt: 200, op: 0},
        {idx: 3, name: "카카오뱅크", src: require("@/assets/img/icon/카카오뱅크.png"), function: 2, color: 2, company: 3, numCnt: 300, op: 0},
        {idx: 0, name: "카카오페이", src: require("@/assets/img/icon/카카오페이.png"), function: 2, color: 2, company: 3, numCnt: 500, op: 0},
        {idx: 7, name: "KB국민은행", src: require("@/assets/img/icon/KB국민은행.png"), function: 2, color: 2, company: 6, numCnt: 120, op: 0},
        {idx: 8, name: "Samsung Pay", src: require("@/assets/img/icon/Samsung Pay.png"), function: 2, color: 3, company: 1, numCnt: 130, op: 0},
        {idx: 9, name: "캘린더", src: require("@/assets/img/icon/캘린더.png"), function: 3, color: 3, company: 1, numCnt: 160, op: 0},
        {idx: 10, name: "내 파일", src: require("@/assets/img/icon/내 파일.png"), function: 3, color: 2, company: 1, numCnt: 180, op: 0},
        {idx: 5, name: "SmartThings", src: require("@/assets/img/icon/SmartThings.png"), function: 3, color: 4, company: 1, numCnt: 220, op: 0},
        {idx: 4, name: "Samsung Notes", src: require("@/assets/img/icon/Samsung Notes.png"), function: 3, color: 1, company: 1, numCnt: 240, op: 0},
        {idx: 6, name: "음성 녹음", src: require("@/assets/img/icon/삼성 음성녹음.png"), function: 3, color: 1, company: 1, numCnt: 260, op: 0},
        {idx: 16, name: "Galaxy Wearable", src: require("@/assets/img/icon/Galaxy Wearable.png"), function: 3, color: 3, company: 1, numCnt: 350, op: 0},
        {idx: 13, name: "Good Lock", src: require("@/assets/img/icon/Good Lock.png"), function: 3, color: 1, company: 1, numCnt: 320, op: 0},
        {idx: 12, name: "Bixby", src: require("@/assets/img/icon/Bixby.png"), function: 3, color: 10, company: 1, numCnt: 420, op: 0},
        {idx: 14, name: "카메라", src: require("@/assets/img/icon/카메라.png"), function: 3, color: 1, company: 1, numCnt: 80, op: 0},
        {idx: 11, name: "Facebook", src: require("@/assets/img/icon/Facebook.png"), function: 4, color: 3, company: 4, numCnt: 510, op: 0},
        {idx: 17, name: "네이버 메일", src: require("@/assets/img/icon/네이버 메일.png"), function: 4, color: 4, company: 5, numCnt: 170, op: 0},
        {idx: 19, name: "네이버 카페", src: require("@/assets/img/icon/네이버 카페.png"), function: 4, color: 4, company: 5, numCnt: 370, op: 0},
        {idx: 18, name: "카카오톡", src: require("@/assets/img/icon/카카오톡.png"), function: 4, color: 2, company: 3, numCnt: 470, op: 0},
        {idx: 20, name: "SNOW", src: require("@/assets/img/icon/SNOW.png"), function: 10, color: 4, company: 10, numCnt: 520, op: 0},
        {idx: 21, name: "11번가", src: require("@/assets/img/icon/11번가.png"), function: 5, color: 1, company: 10, numCnt: 600, op: 0},
        {idx: 27, name: "AliExpress", src: require("@/assets/img/icon/AliExpress.png"), function: 5, color: 1, company: 10, numCnt: 650, op: 0},
        {idx: 24, name: "이마트몰", src: require("@/assets/img/icon/이마트몰.png"), function: 5, color: 2, company: 10, numCnt: 670, op: 0},
        {idx: 25, name: "Instagram", src: require("@/assets/img/icon/Instagram.png"), function: 7, color: 10, company: 4, numCnt: 68, op: 0},
        {idx: 26, name: "당근", src: require("@/assets/img/icon/당근.png"), function: 5, color: 4, company: 10, numCnt: 110, op: 0},
        {idx: 22, name: "YouTube Music", src: require("@/assets/img/icon/YouTube Music.png"), function: 10, color: 1, company: 2, numCnt: 40, op: 0},
        {idx: 28, name: "네이버 지도", src: require("@/assets/img/icon/네이버 지도.png"), function: 6, color: 4, company: 5, numCnt: 390, op: 0},
        {idx: 29, name: "TMAP", src: require("@/assets/img/icon/TMAP.png"), function: 6, color: 4, company: 10, numCnt: 490, op: 0},
        {idx: 30, name: "YouTube", src: require("@/assets/img/icon/YouTube.png"), function: 7, color: 4, company: 2, numCnt: 290, op: 0},
        {idx: 31, name: "Netflix", src: require("@/assets/img/icon/Netflix.png"), function: 7, color: 10, company: 10, numCnt: 190, op: 0},
        {idx: 32, name: "TVING", src: require("@/assets/img/icon/TVING.png"), function: 7, color: 1, company: 10, numCnt: 150, op: 0},
        {idx: 33, name: "컬리", src: require("@/assets/img/icon/컬리.png"), function: 8, color: 10, company: 10, numCnt: 680, op: 0},
        {idx: 34, name: "요기요", src: require("@/assets/img/icon/요기요.png"), function: 8, color: 1, company: 10, numCnt: 630, op: 0},
        {idx: 35, name: "BBQ", src: require("@/assets/img/icon/BBQ.png"), function: 8, color: 1, company: 10, numCnt: 720, op: 0},
        {idx: 36, name: "똑닥", src: require("@/assets/img/icon/똑닥.png"), function: 9, color: 2, company: 10, numCnt: 750, op: 0},
        {idx: 37, name: "삼성서울병원", src: require("@/assets/img/icon/삼성서울병원.png"), function: 9, color: 4, company: 10, numCnt: 780, op: 0},
        {idx: 38, name: "네이버 블로그", src: require("@/assets/img/icon/네이버 블로그.png"), function: 4, color: 4, company: 5, numCnt: 20, op: 0},
        {idx: 39, name: "KB라이프", src: require("@/assets/img/icon/KB라이프.png"), function: 2, color: 2, company: 6, numCnt: 270, op: 0},
      ],

      applications: [
        {idx: 1, name: "Samsung Health", src: require("@/assets/img/icon/Samsung Health.png"), function: 1, color: 10, company: 1, numCnt: 100, op: 0},
        {idx: 2, name: "더헬스", src: require("@/assets/img/icon/더헬스.png"), function: 1, color: 10, company: 1, numCnt: 200, op: 0},
        {idx: 3, name: "카카오뱅크", src: require("@/assets/img/icon/카카오뱅크.png"), function: 2, color: 2, company: 3, numCnt: 300, op: 0},
        {idx: 0, name: "카카오페이", src: require("@/assets/img/icon/카카오페이.png"), function: 2, color: 2, company: 3, numCnt: 500, op: 0},
        {idx: 7, name: "KB국민은행", src: require("@/assets/img/icon/KB국민은행.png"), function: 2, color: 2, company: 6, numCnt: 120, op: 0},
        {idx: 8, name: "Samsung Pay", src: require("@/assets/img/icon/Samsung Pay.png"), function: 2, color: 3, company: 1, numCnt: 130, op: 0},
        {idx: 9, name: "캘린더", src: require("@/assets/img/icon/캘린더.png"), function: 3, color: 3, company: 1, numCnt: 160, op: 0},
        {idx: 10, name: "내 파일", src: require("@/assets/img/icon/내 파일.png"), function: 3, color: 2, company: 1, numCnt: 180, op: 0},
        {idx: 5, name: "SmartThings", src: require("@/assets/img/icon/SmartThings.png"), function: 3, color: 4, company: 1, numCnt: 220, op: 0},
        {idx: 4, name: "Samsung Notes", src: require("@/assets/img/icon/Samsung Notes.png"), function: 3, color: 1, company: 1, numCnt: 240, op: 0},
        {idx: 6, name: "음성 녹음", src: require("@/assets/img/icon/삼성 음성녹음.png"), function: 3, color: 1, company: 1, numCnt: 260, op: 0},
        {idx: 16, name: "Galaxy Wearable", src: require("@/assets/img/icon/Galaxy Wearable.png"), function: 3, color: 3, company: 1, numCnt: 350, op: 0},
        {idx: 13, name: "Good Lock", src: require("@/assets/img/icon/Good Lock.png"), function: 3, color: 1, company: 1, numCnt: 320, op: 0},
        {idx: 12, name: "Bixby", src: require("@/assets/img/icon/Bixby.png"), function: 3, color: 10, company: 1, numCnt: 420, op: 0},
        {idx: 14, name: "카메라", src: require("@/assets/img/icon/카메라.png"), function: 3, color: 1, company: 1, numCnt: 80, op: 0},
        {idx: 11, name: "Facebook", src: require("@/assets/img/icon/Facebook.png"), function: 4, color: 3, company: 4, numCnt: 510, op: 0},
        {idx: 17, name: "네이버 메일", src: require("@/assets/img/icon/네이버 메일.png"), function: 4, color: 4, company: 5, numCnt: 170, op: 0},
        {idx: 19, name: "네이버 카페", src: require("@/assets/img/icon/네이버 카페.png"), function: 4, color: 4, company: 5, numCnt: 370, op: 0},
        {idx: 18, name: "카카오톡", src: require("@/assets/img/icon/카카오톡.png"), function: 4, color: 2, company: 3, numCnt: 470, op: 0},
        {idx: 20, name: "SNOW", src: require("@/assets/img/icon/SNOW.png"), function: 10, color: 4, company: 10, numCnt: 520, op: 0},
        {idx: 21, name: "11번가", src: require("@/assets/img/icon/11번가.png"), function: 5, color: 1, company: 10, numCnt: 600, op: 0},
        {idx: 27, name: "AliExpress", src: require("@/assets/img/icon/AliExpress.png"), function: 5, color: 1, company: 10, numCnt: 650, op: 0},
        {idx: 24, name: "이마트몰", src: require("@/assets/img/icon/이마트몰.png"), function: 5, color: 2, company: 10, numCnt: 670, op: 0},
        {idx: 25, name: "Instagram", src: require("@/assets/img/icon/Instagram.png"), function: 7, color: 10, company: 4, numCnt: 68, op: 0},
        {idx: 26, name: "당근", src: require("@/assets/img/icon/당근.png"), function: 5, color: 4, company: 10, numCnt: 110, op: 0},
        {idx: 22, name: "YouTube Music", src: require("@/assets/img/icon/YouTube Music.png"), function: 10, color: 1, company: 2, numCnt: 40, op: 0},
        {idx: 28, name: "네이버 지도", src: require("@/assets/img/icon/네이버 지도.png"), function: 6, color: 4, company: 5, numCnt: 390, op: 0},
        {idx: 29, name: "TMAP", src: require("@/assets/img/icon/TMAP.png"), function: 6, color: 4, company: 10, numCnt: 490, op: 0},
        {idx: 30, name: "YouTube", src: require("@/assets/img/icon/YouTube.png"), function: 7, color: 4, company: 2, numCnt: 290, op: 0},
        {idx: 31, name: "Netflix", src: require("@/assets/img/icon/Netflix.png"), function: 7, color: 10, company: 10, numCnt: 190, op: 0},
        {idx: 32, name: "TVING", src: require("@/assets/img/icon/TVING.png"), function: 7, color: 1, company: 10, numCnt: 150, op: 0},
        {idx: 33, name: "컬리", src: require("@/assets/img/icon/컬리.png"), function: 8, color: 10, company: 10, numCnt: 680, op: 0},
        {idx: 34, name: "요기요", src: require("@/assets/img/icon/요기요.png"), function: 8, color: 1, company: 10, numCnt: 630, op: 0},
        {idx: 35, name: "BBQ", src: require("@/assets/img/icon/BBQ.png"), function: 8, color: 1, company: 10, numCnt: 720, op: 0},
        {idx: 36, name: "똑닥", src: require("@/assets/img/icon/똑닥.png"), function: 9, color: 2, company: 10, numCnt: 750, op: 0},
        {idx: 37, name: "삼성서울병원", src: require("@/assets/img/icon/삼성서울병원.png"), function: 9, color: 4, company: 10, numCnt: 780, op: 0},
        {idx: 38, name: "네이버 블로그", src: require("@/assets/img/icon/네이버 블로그.png"), function: 4, color: 4, company: 5, numCnt: 20, op: 0},
        {idx: 39, name: "KB라이프", src: require("@/assets/img/icon/KB라이프.png"), function: 2, color: 2, company: 6, numCnt: 270, op: 0},
      ]
    }
  },
  created() {
    this.initSetting();
  },
  watch: {
    needToChange: function() {
      this.initSetting();
    }
  },
  methods: {
    initSetting: function() {
      this.application = [[]];

      this.functionList = [[], [], [], [], [], [], [], [], [], []];
      this.colorList = [[], [], [], [], []];
      this.companyList = [[], [], [], [], [], [], []];
      
      let page = 0;
      let index = -1;
      for (let i = 0; i < this.applications.length; i++) {
        if (i % 4 == 0) {
          index += 1;

          if (index === 6) {
            page += 1;
            index = 0;
            this.application.push([]);
          }

          this.application[page].push([]);
        }
        
        this.application[page][index].push(this.applications[i]);
      }
    },
    closeSelectBoxModal : function() {
      this.selectBoxModalCheck = false;
    },

    openSelectBoxModal : function() {
      this.numberCnt += 1;
      this.selectBoxModalCheck = true;
    },

    appSorting: function(value) {

      if (value === 3) {
        this.applications.sort(function (a, b) {
          return b.numCnt - a.numCnt;
        });
        this.sortingOption = value;

      } else if (value === 1) {
        this.applications.sort(function (a, b) {
          return a.name < b.name ? -1 : a.name > b.name ? 1: 0;
        })
        this.sortingOption = value;

      } else if (value === 2) {
        this.applications.sort(function (a, b) {
          return a.idx - b.idx;
        })
        this.sortingOption = value;

      } else if (value === 0) {
        this.applications = Array.from(this.applicationsOriginal);
        this.sortingOption = value;

      } else if (value === 99) {

        this.applications = Array.from(this.applicationsOriginal);

        if (this.sortingOption === 3) {
          this.applications.sort(function (a, b) {
          return b.numCnt - a.numCnt;
        });
        } else if (this.sortingOption === 1) {
          this.applications.sort(function (a, b) {
          return a.name < b.name ? -1 : a.name > b.name ? 1: 0;
        })
        } else if (this.sortingOption === 2) {
          this.applications.sort(function (a, b) {
          return a.idx - b.idx;
        })
        } 
      }


      this.selectBoxModalCheck = false;

      this.needToChange += 1;
      
    },

    appCategorizing:  function(value, op) {
      let selectOp = op;

      this.applications = [];

      for (let item of this.applicationsOriginal) {
        if (item?.color === 1) {
          this.colorList[1].push(item.idx);
        } else if (item?.color === 2) {
          this.colorList[2].push(item.idx);
        } else if (item?.color === 3) {
          this.colorList[3].push(item.idx);
        } else if (item?.color === 4) {
          this.colorList[4].push(item.idx);
        }
      }

      for (let item of this.applicationsOriginal) {
        if (item?.function  === 1) {
          this.functionList[1].push(item.idx);
        } else if (item?.function === 2) {
          this.functionList[2].push(item.idx);
        } else if (item?.function === 3) {
          this.functionList[3].push(item.idx);
        } else if (item?.function === 4) {
          this.functionList[4].push(item.idx);
        } else if (item?.function === 5) {
          this.functionList[5].push(item.idx);
        } else if (item?.function === 6) {
          this.functionList[6].push(item.idx);
        } else if (item?.function === 7) {
          this.functionList[7].push(item.idx);
        } else if (item?.function === 8) {
          this.functionList[8].push(item.idx);
        } else if (item?.function === 9) {
          this.functionList[9].push(item.idx);
        } 
      }

      for (let item of this.applicationsOriginal) {
        if (item?.company === 1) {
          this.companyList[1].push(item.idx);
        } else if (item?.company === 2) {
          this.companyList[2].push(item.idx);
        } else if (item?.company === 3) {
          this.companyList[3].push(item.idx);
        } else if (item?.company === 4) {
          this.companyList[4].push(item.idx);
        } else if (item?.company === 5) {
          this.companyList[5].push(item.idx);
        } else if (item?.company === 6) {
          this.companyList[6].push(item.idx);
        } 
      }

      this.applications = [];

      if (value === 1) {
        //기능 
        for (let i = 0; i < this.functionList.length; i++) {
          if (selectOp.includes(i)) {
            this.applications.push({idx: -1, name: "000", src: require("@/assets/img/icon/folder.png"), function: i, color: 10, company: 1, numCnt: 10000, op: 100, appList: this.functionList[i]});
          }
        }
      } else if (value === 2) {
        //색상
        for (let i = 0; i < this.colorList.length; i++) {
          if (selectOp.includes(i)) {
            this.applications.push({idx: -1, name: "001", src: require("@/assets/img/icon/folder.png"), function: 1, color: i, company: 1, numCnt: 10000, op: 100, appList: this.colorList[i]});
          }
        }
      } else if (value === 3) {
        //회사
        for (let i = 0; i < this.companyList.length; i++) {
          if (selectOp.includes(i)) {
            this.applications.push({idx: -1, name: "002", src: require("@/assets/img/icon/folder.png"), function: 1, color: 10, company: i, numCnt: 10000, op: 100, appList: this.companyList[i]});
          }
        }
      }

      for (let item of this.applicationsOriginal) {
        if (value === 1) {
          if (!selectOp.includes(item.function)) {
            this.applications.push(item);
          }
        } else if (value === 2) {
          if (!selectOp.includes(item.color)) {
            this.applications.push(item);
          }
        } else if (value === 3) {
          if (!selectOp.includes(item.company)) {
            this.applications.push(item);
          }
        }
      }

      this.needToChange += 1;

      this.selectBoxModalCheck = false;
    }
  }
}
</script>

<style scoped>
.phoneContainer5 {
    width: 360px;
    margin: 0 auto;
}
.phone-background5 {
  background: url('@/assets/background/phone-background4.png');
}

.content-middle5 {
  height: 600px;
  overflow: scroll;
  padding-top: 10px;
  display: flex;
  justify-content: flex-start;
}


.appContainer5 {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content: space-around;
  margin: .8rem 10px;
  min-width: 340px;
  width: 340px;
  height: 570px;
  flex-wrap: wrap;
  overflow: scroll;
  right: 0;
}

.appLine5 {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  
}

.appItem5 {
  display: flex;
  justify-content: center;
  align-content: center;
  width: 80px;
  height: 95px;
}

.searchbar5 {
  box-sizing: border-box;
  height: 40px;
  background: #dac8eb;
  border-radius: 20px;
  width:95%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  border: 0px;
  margin: 0 auto;
}

.search5 {
  height: 100%;
  background: 0;
  width: 90%;
  border: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: .9rem;
  font-weight: 700;
}

.search5::placeholder {
  color: white;
}


.select-box-modal-wrap5 {
  position: absolute;
  left: calc(50% - 180px);
  top: calc(300px);
  width: 360px;
  height: 723px;
  z-index: 20;
}

</style>