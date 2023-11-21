<template>
  <div class="phoneContainer4">
    <div class="phone-background4">
      <div v-if="appSizeModalCheck===false">      
        <PhoneTopBarVue />
        <div class="phone searchbar4">
          <input class="search4" type="text" placeholder="검색">
          <font-awesome-icon class="top-item4" style="color: white; cursor: pointer;" :icon="['fas', 'ellipsis-vertical']" @click="openSelectBoxModal" />
        </div>
      </div>
      <div v-if="appSizeModalCheck===true">
        <div class="emptybar4"></div>
      </div>

    
      <div class="select-box-modal-wrap4" v-show="selectBoxModalCheck" @click.self="closeSelectBoxModal">
        <SelectBoxView @appSizing="appSizing"/>
      </div>
      <div class="app-size-modal-wrap4" v-show="appSizeModalCheck" @click.self="closeAppSizeModal">
        <div @click="appSizingSelect" class="sizing-box4">
          <div class="sizing-icon4">
            <img src="@/assets/appsizing.svg" alt="">
          </div>
          <div  class="sizing-title4">크기조절</div>
        </div>
        <div class="content-middle4">
          <div class="appContainer4" v-for="(appPage, index) in application" :key="index">
            <div class="appLine4" v-for="(appList, index) in appPage" :key="index">
              <div class="appItem4" style="position:relative" v-for="(app, i) in appList" :key="i">
                <input v-if="app.numCnt === 0" type="checkbox" :id="app.idx" class="appsize-checkbox4">
                <label v-if="app.bigSize !== true && app.numCnt === 0" class="smallApp4" :for="app.idx">
                </label>
                <label v-if="app.bigSize === true && app.numCnt === 0" class="bigApp4" :for="app.idx">
                </label>
                <ApplicationVue v-if="app.bigSize !== true" v-bind:application="app" />
                <ApplicationBigVue v-if="app.bigSize === true" v-bind:application="app" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="phone-scroll-middle4">
        <div class="appContainer4" v-for="(appPage, index) in application" :key="index">
          <div class="appLine4" v-for="(appList, index) in appPage" :key="index">
            <div class="appItem4" v-for="(app, i) in appList" :key="i">
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
        {idx: 5, name: "삼성증권", src: require("@/assets/img/icon/삼성증권.png"), function: 1, color: 2, company: 3, numCnt: 0, bigSize: false},
        {idx: 6, name: "내 파일", src: require("@/assets/img/icon/내 파일.png"), function: 1, color: 2, company: 3, numCnt: 0, bigSize: false},
        {idx: 7, name: "SmartThings", src: require("@/assets/img/icon/SmartThings.png"), function: 1, color: 2, company: 3, numCnt: 0, bigSize: false},
        {idx: 8, name: "Bixby", src: require("@/assets/img/icon/Bixby.png"), function: 1, color: 2, company: 3, numCnt: 0, bigSize: false},
        {idx: 9, name: "Knox Meeting", src: require("@/assets/img/icon/Knox Meeting.png"), function: 1, color: 2, company: 3, numCnt: 0, bigSize: false},
        {idx: 10, name: "음성 녹음", src: require("@/assets/img/icon/삼성 음성녹음.png"), function: 1, color: 2, company: 3, numCnt: 0, bigSize: false},
        {idx: 11, name: "인터넷", src: require("@/assets/img/icon/인터넷.png"), function: 1, color: 2, company: 3, numCnt: 0, bigSize: false},
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

<style scoped>
.phoneContainer4 {
    width: 360px;
    margin: 0 auto;
}
.phone-background4 {
  background: url('@/assets/background/phone-background4.png');
}

.phone-scroll-middle4 {
  height: 620px;
  padding-top: 10px;
}

.appContainer4 {
  margin: 0 auto;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content: center;
  width: 320px;
  height: 580px;
}

.content-middle4 {
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  justify-content: flex-start;
  align-content: center;
  width: 320px;
}

.appLine4 {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 320px;
  
}

.appItem4 {
  display: flex;
  justify-content: center;
  align-content: center;
  width: 80px;
  height: 95px;
}


.searchbar4 {
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
  opacity: 0.7;
  margin: 0 auto;
}

.search4 {
  height: 100%;
  background: 0;
  width: 90%;
  border: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: .9rem;
  font-weight: 700;
  color: white;
}

.search4::placeholder {
  color: white;
}


.select-box-modal-wrap4 {
  position: absolute;
  left: calc(50% - 180px);
  top: calc(300px);
  width: 360px;
  height: 723px;
  z-index: 20;
}

.app-size-modal-wrap4 {
  position: absolute;
  left: calc(50% - 180px);
  top: calc(300px);
  width: 360px;
  height: 730px;
  z-index: 20;
  background: rgb(205, 166, 239)
}

.emptybar4 {
  width: 100%;
  height: 70px;
}

.sizing-box4 {
  width: 90%;
  background: #dac8eb;
  border-radius: 25px;
  height: 50px;
  margin: 30px auto auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.sizing-title4 {
  color: white;
  font-size: .8rem;
  font-weight: 700;
}

.appsize-checkbox4 {
  display:none;
}

.appsize-checkbox4 + .smallApp4 {
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

.appsize-checkbox4:checked + .smallApp4 {
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

.appsize-checkbox4 + .bigApp4 {
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

.appsize-checkbox4:checked + .bigApp4 {
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