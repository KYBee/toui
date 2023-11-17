<template>
  <div class="phone-background">
    <PhoneTopBarVue />
    <SearchBarVue />
    <div class="phone middle">
      <div class="appContainer">
        <div class="appLine">
          <div class="appItem"><AppVue v-bind:application="application1" @changeName="setNickname" @click="modalOpen(1)" />
            <div class="modal-wrap-1" v-show="modalOneCheck" @click.self="closeModal">
              <div class="memoContainer">
                <div class="memoName">
                  <div class="memo-middle">{{this.application1.nickname}}</div>
                  <div class="memo-right">
                    <img src="@/assets/editIcon.svg" alt="" @click="changeName">
                    <img src="@/assets/detailIcon.svg" style="cursor:pointer" alt="" @click="goSetting(1)">
                  </div>
                </div>
                <div class="memoOption">
                  <div class="memoOptionDetail"><img src="@/assets/select.svg" alt="">선택</div>
                  <div class="memoOptionDetail"><img src="@/assets/homeAdd.svg" alt="">홈 화면에 추가</div>
                  <div class="memoOptionDetail"><img src="@/assets/uninstall.svg" alt="">설치 삭제</div>
                  <div class="memoOptionDetail"><img src="@/assets/widget.svg" alt="">위젯</div>
                </div>
              </div>
            </div>
          </div>

          <div class="appItem"><AppVue v-bind:application="application2" @changeName="setNickname" @click="modalOpen(2)" />
            <div class="modal-wrap-2" v-show="modalTwoCheck" @click.self="closeModal">
              <div class="memoContainer">
                <div class="memoName">
                  <div class="memo-middle">{{this.application2.nickname}}</div>
                  <div class="memo-right">
                    <img src="@/assets/editIcon.svg" alt="" @click="changeName">
                    <img src="@/assets/detailIcon.svg" style="cursor:pointer" alt="" @click="goSetting(2)">
                  </div>
                </div>
                <div class="memoOption">
                  <div class="memoOptionDetail"><img src="@/assets/select.svg" alt="">선택</div>
                  <div class="memoOptionDetail"><img src="@/assets/homeAdd.svg" alt="">홈 화면에 추가</div>
                  <div class="memoOptionDetail"><img src="@/assets/uninstall.svg" alt="">설치 삭제</div>
                  <div class="memoOptionDetail"><img src="@/assets/widget.svg" alt="">위젯</div>
                </div>
              </div>
            </div>
          </div>

          <div class="appItem"><AppVue v-bind:application="application3" @changeName="setNickname" @click="modalOpen(3)" />
            <div class="modal-wrap-3" v-show="modalThreeCheck" @click.self="closeModal">
              <div class="memoContainer">
                <div class="memoName">
                  <div class="memo-middle">{{this.application3.nickname}}</div>
                  <div class="memo-right">
                    <img src="@/assets/editIcon.svg" alt="" @click="changeName">
                    <img src="@/assets/detailIcon.svg" style="cursor:pointer" alt="" @click="goSetting(3)">
                  </div>
                </div>
                <div class="memoOption">
                  <div class="memoOptionDetail"><img src="@/assets/select.svg" alt="">선택</div>
                  <div class="memoOptionDetail"><img src="@/assets/homeAdd.svg" alt="">홈 화면에 추가</div>
                  <div class="memoOptionDetail"><img src="@/assets/uninstall.svg" alt="">설치 삭제</div>
                  <div class="memoOptionDetail"><img src="@/assets/widget.svg" alt="">위젯</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <PhoneBottomBarVue />
    
  </div>
</template>

<script>
import AppVue from "@/components/ApplicationVue.vue";
import PhoneTopBarVue from "@/components/PhoneTopBarVue.vue";
import SearchBarVue from '@/components/SearchBarVue';
import PhoneBottomBarVue from '@/components/PhoneBottomBarVue';

export default {
  data() {
    return {
      now: 0,
      modalOneCheck: false,
      modalTwoCheck: false,
      modalThreeCheck: false,
      activeModal: 0,
    }
  },


  components: {
    PhoneTopBarVue,
    PhoneBottomBarVue,
    AppVue,
    SearchBarVue,

  },

  created() {
    this.application1 = {idx: 0, name: "이마트에브리데이", nickname: "이마트에브리데이", src: require("@/assets/img/icon/이마트에브리데이.png"), isNickname: false};
    this.application2 = {idx: 1, name: "이마트", nickname: "이마트", src: require("@/assets/img/icon/이마트.png"), isNickname: false};
    this.application3 = {idx: 2, name: "이마트몰", nickname: "이마트몰", src: require("@/assets/img/icon/이마트몰.png"), isNickname: false};
  },

  methods: {
    setNickname(idx, value) {
      console.log(value);
      console.log(idx);
    },
    modalOpen: function(value) {
      if (this.modalOneCheck || this.modalTwoCheck || this.modalThreeCheck) {
        this.closeModal();
        return;
      }

      if (value === 1) {
        this.modalOneCheck = !this.modalOneCheck;
        this.activeModal = 1;
      } else if (value === 2) {
        this.modalTwoCheck = !this.modalTwoCheck;
        this.activeModal = 2;
      } else {
        this.modalThreeCheck = !this.modalThreeCheck;
        this.activeModal = 3;
      }
    },
    closeModal : function() {
      this.modalOneCheck = false;
      this.modalTwoCheck = false;
      this.modalThreeCheck = false;
    },
    goSetting: function(value) {
      let app = {};
      if (value === 1) {
        app = this.application1;
      } else if (value === 2) {
        app = this.application2;
      } else {
        app = this.application3;
      }
      console.log(app);

      app.src = `@/assets/img/icon/${app.name}.png`;
      
      this.$router.push({name:"setting", params: {
        "app": JSON.stringify([app.name, app.nickname, app.src, app.isNickname,])
      }});
    }
  }
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.phone-background {
  background: url('@/assets/phone-background.png');
}

.middle {
  height: 600px;
}

.appContainer {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content: center;
  margin: .8rem auto;
  width: 320px;
}

.appLine {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.appItem {
  display: flex;
  justify-content: center;
  align-content: center;
  width: 80px;
  height: 95px;
}

/* dimmed */
.modal-wrap-1 {
  position: absolute;
  left: calc(50% - 180px);
  top: calc(300px + 22px + 60px);
  width: 360px;
  height: 723px;
}
.modal-wrap-2 {
  position: absolute;
  left: calc(50% - 180px);
  top: calc(300px + 22px + 60px);
  width: 360px;
  height: 723px;
}
.modal-wrap-3 {
  position: absolute;
  left: calc(50% - 180px);
  top: calc(300px + 22px + 60px);
  width: 360px;
  height: 723px;
}
/* modal or popup */
.modal-container {
  transform: translate(-50%, -50%);
  background: #fff;
}


.memoContainer {
  width: 260px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; 
  border-radius: 20px;
  position:relative;
  top: 160px;
  z-index: 899;
  left: 20px;
}

.memoName {
  display: flex;
  flex-direction: row;
  width:100%;
  height: 3rem;
  justify-content: space-between;
  align-content: center;
  background: #CED1D4;
  border-radius: 20px 20px 0 0;
}

.memo-middle {
  display: flex;
  align-items: center;
  font-weight: 700;
  width: 12rem;
  justify-content: center;
}

.memo-right {
  width: 2.5rem;
  height: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 1rem;
}

.memoOption {
  display: flex;
  flex-direction: row;
  width:100%;
  height: 3rem;
  justify-content: space-around;
  align-content: center;
  background: rgba(206,209,212,0.6);
  border-radius: 0 0 20px 20px;
}

.memoOptionDetail {
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: .6rem;
}

.memoOption img {
  opacity: 1.0;
  color: black;
  margin-bottom: .2rem;
}

.editBtn {
  cursor: pointer;
}

</style>