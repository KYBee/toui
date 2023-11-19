<template>
  <div class="phoneContainer">
    <div class="phone-background">
      <div v-if="appSizeModalCheck===false">      
        <PhoneTopBarVue />
        <div class="phone searchbar">
          <input class="search" type="text" placeholder="검색">
          <font-awesome-icon class="top-item" style="color: gray;" :icon="['fas', 'ellipsis-vertical']" @click="openSelectBoxModal" />
        </div>
      </div>
      <div v-if="appSizeModalCheck===true">
        <div class="emptybar"></div>
      </div>

    
      <div class="select-box-modal-wrap" v-show="selectBoxModalCheck" @click.self="closeSelectBoxModal">
        <SelectBoxView @appSizing="appSizing"/>
      </div>
      <div class="app-size-modal-wrap" v-show="appSizeModalCheck" @click.self="closeAppSizeModal">
        <div @click="appSizingSelect" class="sizing-box">
          <div class="sizing-icon">
            <img src="@/assets/appsizing.svg" alt="">
          </div>
          <div  class="sizing-title">크기조절</div>
        </div>
        <div class="content-middle">
          <div class="appContainer" v-for="(appPage, index) in application" :key="index">
            <div class="appLine" v-for="(appList, index) in appPage" :key="index">
              <div class="appItem" style="position:relative" v-for="(app, i) in appList" :key="i">
                <input v-if="app.numCnt === 0" type="checkbox" :id="app.idx" class="appsize-checkbox">
                <label v-if="app.bigSize !== true && app.numCnt === 0" class="smallApp" :for="app.idx">
                </label>
                <label v-if="app.bigSize === true && app.numCnt === 0" class="bigApp" :for="app.idx">
                </label>
                <ApplicationVue v-if="app.bigSize !== true" v-bind:application="app" />
                <ApplicationBigVue v-if="app.bigSize === true" v-bind:application="app" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="phone-scroll-middle">
        <div class="appContainer" v-for="(appPage, index) in application" :key="index">
          <div class="appLine" v-for="(appList, index) in appPage" :key="index">
            <div class="appItem" v-for="(app, i) in appList" :key="i">
              <ApplicationVue v-if="app.bigSize !== true" v-bind:application="app" />
              <ApplicationBigVue v-if="app.bigSize === true" v-bind:application="app" />
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
import ApplicationBigVue from '@/components/ApplicationBigVue';
import SelectBoxView from "@/components/SelectBoxVue.vue";

export default {
  components: {
    PhoneTopBarVue,
    PhoneBottomBarVue,
    ApplicationVue,
    ApplicationBigVue,
    SelectBoxView,
  },
  data() {
    return {
      bigApp: 0,
      selectBoxModalCheck: false,
      appSizeModalCheck: false,
      application:[
        [
          [], [], [], [], [], []
        ]
      ],
      empty: {idx: 1000, name: " ", src: require("@/assets/img/icon/empty.png"), function: 1, color: 2, company: 3, numCnt: 100, bigSize: false},
      applications: [
        {idx: 0, name: "Samsung Health", src: require("@/assets/img/icon/Samsung Health.png"), function: 1, color: 2, company: 3, numCnt: 0, bigSize: false},
        {idx: 1, name: "더헬스", src: require("@/assets/img/icon/더헬스.png"), function: 1, color: 2, company: 3, numCnt: 0, bigSize: false},
        {idx: 2, name: "카카오페이", src: require("@/assets/img/icon/카카오페이.png"), function: 1, color: 2, company: 3, numCnt: 0, bigSize: false},
        {idx: 3, name: "KB국민은행", src: require("@/assets/img/icon/KB국민은행.png"), function: 1, color: 2, company: 3, numCnt: 0, bigSize: false},
        {idx: 4, name: "Samsung Pay", src: require("@/assets/img/icon/Samsung Pay.png"), function: 1, color: 2, company: 3, numCnt: 0, bigSize: false},
        {idx: 5, name: "캘린더", src: require("@/assets/img/icon/캘린더.png"), function: 1, color: 2, company: 3, numCnt: 0, bigSize: false},
        {idx: 6, name: "내 파일", src: require("@/assets/img/icon/내 파일.png"), function: 1, color: 2, company: 3, numCnt: 0, bigSize: false},
        {idx: 7, name: "SmartThings", src: require("@/assets/img/icon/SmartThings.png"), function: 1, color: 2, company: 3, numCnt: 0, bigSize: false},
        {idx: 8, name: "Samsung Notes", src: require("@/assets/img/icon/Samsung Notes.png"), function: 1, color: 2, company: 3, numCnt: 0, bigSize: false},
        {idx: 9, name: "삼성 음성녹음", src: require("@/assets/img/icon/삼성 음성녹음.png"), function: 1, color: 2, company: 3, numCnt: 0, bigSize: false},
        {idx: 10, name: "Good Lock", src: require("@/assets/img/icon/Good Lock.png"), function: 1, color: 2, company: 3, numCnt: 0, bigSize: false},
        {idx: 11, name: "Galaxy Wearable", src: require("@/assets/img/icon/Galaxy Wearable.png"), function: 1, color: 2, company: 3, numCnt: 0, bigSize: false},
        {idx: 12, name: "카메라", src: require("@/assets/img/icon/카메라.png"), function: 1, color: 2, company: 3, numCnt: 0, bigSize: false},
        {idx: 13, name: "네이버 메일", src: require("@/assets/img/icon/네이버 메일.png"), function: 1, color: 2, company: 3, numCnt: 0, bigSize: false},
        {idx: 14, name: "네이버 카페", src: require("@/assets/img/icon/네이버 카페.png"), function: 1, color: 2, company: 3, numCnt: 0, bigSize: false},
        {idx: 15, name: "카카오톡", src: require("@/assets/img/icon/카카오톡.png"), function: 1, color: 2, company: 3, numCnt: 0, bigSize: false},
        {idx: 16, name: "SNOW", src: require("@/assets/img/icon/SNOW.png"), function: 1, color: 2, company: 3, numCnt: 0, bigSize: false},
        {idx: 17, name: "11번가", src: require("@/assets/img/icon/11번가.png"), function: 1, color: 2, company: 3, numCnt: 0, bigSize: false},
        {idx: 18, name: " ", src: require("@/assets/img/icon/empty.png"), function: 1, color: 2, company: 3, numCnt: 100, bigSize: false},
      ],
    }
  },
  created() {
    this.initSetting();
  },
  methods: {
    initSetting : function() {
        this.application = [[[],[],[],[],[],[]]]
        this.bigApp = 0;

        let page = 0;

        let currentI = 0;
        let currentJ = -1;

        let position = [];
        let assigned = [];
        
        for (let i = 0; i < 19; i++) {
          currentJ += 1;
          if (currentJ > 3) {
            currentI += 1;
            currentJ = 0;
          }

          if (this.applications[i].bigSize === true) {
            position.push([Math.floor(currentI / 2) * 2, Math.floor(currentJ / 2) * 2, this.applications[i].idx]);
            this.bigApp += 1;
          }
        }

        console.log(position);

        if (position.length > 1) {
          if (position[0][0] == position[1][0] && position[0][1] == position[1][1]) {
            position[1][1] = 2;
            position[0][1] = 0;
          }
        }

        let d = position.length;
        for (let i = 0; i < d; i++) {
          position.push([Math.floor(position[i][0] / 2) * 2, Math.floor(position[i][1] / 2) * 2 + 1, 18]);
          position.push([Math.floor(position[i][0] / 2) * 2 + 1, Math.floor(position[i][1] / 2) * 2, 18]);
          position.push([Math.floor(position[i][0] / 2) * 2 + 1, Math.floor(position[i][1] / 2) * 2 + 1, 18]);
        }


        position.sort(function(a, b) {

          let comp = a[0] - b[0];
          if (comp === 0) comp = a[1] - b[1]; 

          return comp;
        })
        
        currentI = 0;
        currentJ = -1;
        let positionIdx = 0;
        let i = 0;
        while (i < 18) {
          currentJ += 1;
          if (currentJ > 3) {
            currentI += 1;
            currentJ = 0;
          }

          if (positionIdx < position.length && currentI == position[positionIdx][0] && currentJ == position[positionIdx][1]) {
            this.application[page][currentI].push(this.applications[position[positionIdx][2]]);
            assigned.push(position[positionIdx][2]);

            if (position[positionIdx][2] !== 18 && position[positionIdx][2] == i) {
              i += 1;
            }

            positionIdx += 1;
          } else {

            if ((assigned.includes(this.applications[i].idx)) === false) {
              this.application[page][currentI].push(this.applications[i]);
            } else {

              if (currentJ === 0) {
                currentI -= 1;
                currentJ = 3;
              } else {
                currentJ -= 1;
              }

            }
            i += 1;
          }
        }
    },
    closeSelectBoxModal : function() {
      this.selectBoxModalCheck = false;
    },

    openSelectBoxModal : function() {
      this.selectBoxModalCheck = true;
    },

    appSizing: function() {
      this.openAppSizeModal();
      this.closeSelectBoxModal();
    },

    openAppSizeModal: function() {
      this.appSizeModalCheck = true;
    },

    closeAppSizeModal : function() {
      this.appSizeModalCheck = false;
    },

    appSizingSelect : function() {
      const checkedApp = document.querySelectorAll("input:checked")

      let diff = 0;
      for (let i = 0; i < checkedApp.length; i++) {
        if (this.applications[Number(checkedApp[i].id)].bigSize !== true) {
          diff += 1;
        } else {
          diff -= 1;
        }
      }

      if (this.bigApp + diff > 2) this.appSizeModalCheck = false;
      else {
        for (let i = 0; i < checkedApp.length; i++) {
          this.applications[Number(checkedApp[i].id)].bigSize = !this.applications[Number(checkedApp[i].id)].bigSize;
        }
        this.initSetting();

        this.appSizeModalCheck = false;
      }

      for (let i = 0; i < checkedApp.length; i++) {
        checkedApp[i].checked = false;
      }
    }
  }
}
</script>

<style>
.phoneContainer {
    width: 360px;
    margin: 0 auto;
}
.phone-background {
  background: url('@/assets/phone-background.png');
}

.phone-scroll-middle {
  height: 620px;
}

.appContainer {
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content: center;
  width: 360px;
  height: 580px;
}

.content-middle {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content: center;
  width: 360px;
}

.appLine {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  
}

.appItem {
  display: flex;
  justify-content: center;
  align-content: center;
  width: 80px;
  height: 95px;
}


.searchbar {
  box-sizing: border-box;

  height: 40px;
  background: #D9D9D9;
  border-radius: 20px;
  width:95%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  border: 0px;
  opacity: 0.5;
  margin: 0 auto;
}

.search {
  height: 100%;
  background: 0;
  width: 90%;
  border: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.select-box-modal-wrap {
  position: absolute;
  left: calc(50% - 180px);
  top: calc(300px);
  width: 360px;
  height: 723px;
  z-index: 20;
}

.app-size-modal-wrap {
  position: absolute;
  left: calc(50% - 180px);
  top: calc(300px);
  width: 360px;
  height: 730px;
  z-index: 20;
  background: rgba(0, 0, 0, 0.2)
}

.emptybar{
  width: 100%;
  height: 70px;
}

.sizing-box {
  width: 90%;
  margin: 0 auto;
  background: rgba(217, 217, 217, 0.3);
  border-radius: 20px;
  height: 60px;
  margin: 10px auto auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.sizing-title {
  color: white;
  font-size: .8rem;
}

.appsize-checkbox {
  display:none;
}

.appsize-checkbox + .smallApp {
  top:0px;
  left: 7px;
  position: absolute;
  cursor: pointer;
  background-image: url("@/assets/sizeCheckOff.svg");
  width: 65px;
  height: 65px;
  background-repeat: no-repeat;
  z-index: 10;
}

.appsize-checkbox:checked + .smallApp{
  top:0px;
  left: 7px;
  position: absolute;
  cursor: pointer;
  background: url("@/assets/sizeCheckOn.svg");
  width: 65px;
  height: 65px;
  background-repeat: no-repeat;
  z-index: 10;
}

.appsize-checkbox + .bigApp {
  top:0px;
  left: 7px;
  position: absolute;
  cursor: pointer;
  background-image: url("@/assets/sizeCheckOff.svg");
  width: 145px;
  height: 145px;
  background-repeat: no-repeat;
  z-index: 10;
}

.appsize-checkbox:checked + .bigApp{
  top:0px;
  left: 7px;
  position: absolute;
  cursor: pointer;
  background: url("@/assets/sizeCheckOn.svg");
  width: 145px;
  height: 145px;
  background-repeat: no-repeat;
  z-index: 10;
}

</style>