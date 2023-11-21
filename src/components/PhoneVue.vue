<template>
  <div class="phone-background">
    <PhoneTopBarVue />
    <SearchBarVue />
    <div class="phone middle">
      <div class="appContainerOne">
        <div class="appLine">
          <div class="appItem">

            <div class="appTotalContainerOne"  @click="modalOpen(4)">
              <div class="appIconContainer">
                <img class="appIcon" :src="this.application4.src" alt="">
              </div>
              <div class="appName" v-if="this.application4.isNickname===false">{{ this.application4.name }}</div>
              <div class="appName" v-if="this.application4.isNickname===true">{{ this.application4.nickname }}</div>
            </div>

            <div class="modal-wrap-4" v-show="modalFourCheck" @click.self="closeModal">
              <div class="modal-tri-4">
                <img src="@/assets/toggleTriangle.svg" alt="" />
              </div>
              <div class="memoContainer">
                <div class="memoName">
                  <div class="memo-middle" v-if="this.application4.isNickname===false">{{this.application4.nickname}}</div>
                  <div class="memo-middle" v-if="this.application4.isNickname===true">{{this.application4.name}}</div>
                  <div class="memo-right">
                    <img class="pencil" v-if="this.application4.isNickname===false" src="@/assets/editIcon.svg" style="cursor:pointer" alt="" @click="openAppNameChange(4)">
                    <img src="@/assets/detailIcon.svg" style="cursor:pointer" alt="" @click="openAppSettingModal(4)">
                  </div>
                </div>
                <div class="memoOption">
                  <div class="memoOptionDetail"><div class="memoOptionIconImg"><img src="@/assets/select.svg" alt=""></div>선택</div>
                  <div class="memoOptionDetail"><div class="memoOptionIconImg"><img src="@/assets/homeAdd.svg" alt=""></div>홈 화면에 추...</div>
                  <div class="memoOptionDetail"><div class="memoOptionIconImg"><img src="@/assets/uninstall.svg" alt=""></div>설치 삭제</div>
                  <div class="memoOptionDetail"><div class="memoOptionIconImg"><img src="@/assets/widget.svg" alt=""></div>위젯</div>
                </div>
              </div>
            </div>
          </div>
          <div class="appEditing" v-show="this.appNameEditing4" @click="closeAppNameEditing(4)">
            &nbsp;
          </div>
          <input type="text" maxlength="12" class="appEditingInputClass" id="appEditingInput4" v-show="this.appNameEditing4" :value="this.application4.nickname">





          <div class="appItem">
            
            <div class="appTotalContainerOne"  @click="modalOpen(5)">
              <div class="appIconContainer">
                <img class="appIcon" :src="this.application5.src" alt="">
              </div>
              <div class="appName" v-if="this.application5.isNickname===false">{{ this.application5.name }}</div>
              <div class="appName" v-if="this.application5.isNickname===true">{{ this.application5.nickname }}</div>
            </div>
            
            <div class="modal-wrap-5" v-show="modalFiveCheck" @click.self="closeModal">
              <div class="modal-tri-5">
                <img src="@/assets/toggleTriangle.svg" alt="" />
              </div>
              <div class="memoContainer">
                <div class="memoName">
                  <div class="memo-middle" v-if="this.application5.isNickname===false">{{this.application5.nickname}}</div>
                  <div class="memo-middle" v-if="this.application5.isNickname===true">{{this.application5.name}}</div>

                  <div class="memo-right">
                    <img class="pencil" v-if="this.application5.isNickname===false" src="@/assets/editIcon.svg" style="cursor:pointer" alt="" @click="openAppNameChange(5)">
                    <img src="@/assets/detailIcon.svg" style="cursor:pointer" alt="" @click="openAppSettingModal(5)">
                  </div>
                </div>
                <div class="memoOption">
                  <div class="memoOptionDetail"><div class="memoOptionIconImg"><img src="@/assets/select.svg" alt=""></div>선택</div>
                  <div class="memoOptionDetail"><div class="memoOptionIconImg"><img src="@/assets/homeAdd.svg" alt=""></div>홈 화면에 추...</div>
                  <div class="memoOptionDetail"><div class="memoOptionIconImg"><img src="@/assets/uninstall.svg" alt=""></div>설치 삭제</div>
                  <div class="memoOptionDetail"><div class="memoOptionIconImg"><img src="@/assets/widget.svg" alt=""></div>위젯</div>
                </div>
              </div>
            </div>
          </div>
          <div class="appEditing" v-show="this.appNameEditing5" @click="closeAppNameEditing(5)">
            &nbsp;
          </div>
          <input type="text" maxlength="12" class="appEditingInputClass" id="appEditingInput5" v-show="this.appNameEditing5" :value="this.application5.nickname">



          <div class="appItem">
            
            <div class="appTotalContainerOne"  @click="modalOpen(6)">
              <div class="appIconContainer">
                <img class="appIcon" :src="this.application6.src" alt="">
              </div>
              <div class="appName" v-if="this.application6.isNickname===false">{{ this.application6.name }}</div>
              <div class="appName" v-if="this.application6.isNickname===true">{{ this.application6.nickname }}</div>
            </div>
            
            <div class="modal-wrap-6" v-show="modalSixCheck" @click.self="closeModal">
              <div class="modal-tri-6">
                <img src="@/assets/toggleTriangle.svg" alt="" />
              </div>
              <div class="memoContainer">
                <div class="memoName">
                  <div class="memo-middle" v-if="this.application6.isNickname===false">{{this.application6.nickname}}</div>
                  <div class="memo-middle" v-if="this.application6.isNickname===true">{{this.application6.name}}</div>

                  <div class="memo-right">
                    <img class="pencil" v-if="this.application6.isNickname===false" src="@/assets/editIcon.svg" style="cursor:pointer" alt="" @click="openAppNameChange(6)">
                    <img src="@/assets/detailIcon.svg" style="cursor:pointer" alt="" @click="openAppSettingModal(6)">
                  </div>
                </div>
                <div class="memoOption">
                  <div class="memoOptionDetail"><div class="memoOptionIconImg"><img src="@/assets/select.svg" alt=""></div>선택</div>
                  <div class="memoOptionDetail"><div class="memoOptionIconImg"><img src="@/assets/homeAdd.svg" alt=""></div>홈 화면에 추...</div>
                  <div class="memoOptionDetail"><div class="memoOptionIconImg"><img src="@/assets/uninstall.svg" alt=""></div>설치 삭제</div>
                  <div class="memoOptionDetail"><div class="memoOptionIconImg"><img src="@/assets/widget.svg" alt=""></div>위젯</div>
                </div>
              </div>
            </div>
          </div>
          <div class="appEditing" v-show="this.appNameEditing6" @click="closeAppNameEditing(6)">
            &nbsp;
          </div>
          <input type="text" maxlength="12" class="appEditingInputClass" id="appEditingInput6" v-show="this.appNameEditing6" :value="this.application6.nickname">



          <div class="appItem">
            
            <div class="appTotalContainerOne"  @click="modalOpen(7)">
              <div class="appIconContainer">
                <img class="appIcon" :src="this.application7.src" alt="">
              </div>
              <div class="appName" v-if="this.application7.isNickname===false">{{ this.application7.name }}</div>
              <div class="appName" v-if="this.application7.isNickname===true">{{ this.application7.nickname }}</div>
            </div>
            
            <div class="modal-wrap-7" v-show="modalSevenCheck" @click.self="closeModal">
              <div class="modal-tri-7">
                <img src="@/assets/toggleTriangle.svg" alt="" />
              </div>
              <div class="memoContainer">
                <div class="memoName">
                  <div class="memo-middle" v-if="this.application7.isNickname===false">{{this.application7.nickname}}</div>
                  <div class="memo-middle" v-if="this.application7.isNickname===true">{{this.application7.name}}</div>

                  <div class="memo-right">
                    <img class="pencil" v-if="this.application7.isNickname===false" src="@/assets/editIcon.svg" style="cursor:pointer" alt="" @click="openAppNameChange(7)">
                    <img src="@/assets/detailIcon.svg" style="cursor:pointer" alt="" @click="openAppSettingModal(7)">
                  </div>
                </div>
                <div class="memoOption">
                  <div class="memoOptionDetail"><div class="memoOptionIconImg"><img src="@/assets/select.svg" alt=""></div>선택</div>
                  <div class="memoOptionDetail"><div class="memoOptionIconImg"><img src="@/assets/homeAdd.svg" alt=""></div>홈 화면에 추...</div>
                  <div class="memoOptionDetail"><div class="memoOptionIconImg"><img src="@/assets/uninstall.svg" alt=""></div>설치 삭제</div>
                  <div class="memoOptionDetail"><div class="memoOptionIconImg"><img src="@/assets/widget.svg" alt=""></div>위젯</div>
                </div>
              </div>
            </div>
          </div>
          <div class="appEditing" v-show="this.appNameEditing7" @click="closeAppNameEditing(7)">
            &nbsp;
          </div>
          <input type="text" maxlength="12" class="appEditingInputClass" id="appEditingInput7" v-show="this.appNameEditing7" :value="this.application7.nickname">
        </div>


        <div class="appLine">
          <div class="appItem">

            <div class="appTotalContainerOne"  @click="modalOpen(1)">
              <div class="appIconContainer">
                <img class="appIcon" :src="this.application1.src" alt="">
              </div>
              <div class="appName" v-if="this.application1.isNickname===false">{{ this.application1.name }}</div>
              <div class="appName" v-if="this.application1.isNickname===true">{{ this.application1.nickname }}</div>
            </div>

            <div class="modal-wrap-1" v-show="modalOneCheck" @click.self="closeModal">
              <div class="modal-tri-1">
                <img src="@/assets/toggleTriangle.svg" alt="" />
              </div>
              <div class="memoContainer">
                <div class="memoName">
                  <div class="memo-middle" v-if="this.application1.isNickname===false">{{this.application1.nickname}}</div>
                  <div class="memo-middle" v-if="this.application1.isNickname===true">{{this.application1.name}}</div>
                  <div class="memo-right">
                    <img class="pencil" v-if="this.application1.isNickname===false" src="@/assets/editIcon.svg" style="cursor:pointer" alt="" @click="openAppNameChange(1)">
                    <img src="@/assets/detailIcon.svg" style="cursor:pointer" alt="" @click="openAppSettingModal(1)">
                  </div>
                </div>
                <div class="memoOption">
                  <div class="memoOptionDetail"><div class="memoOptionIconImg"><img src="@/assets/select.svg" alt=""></div>선택</div>
                  <div class="memoOptionDetail"><div class="memoOptionIconImg"><img src="@/assets/homeAdd.svg" alt=""></div>홈 화면에 추...</div>
                  <div class="memoOptionDetail"><div class="memoOptionIconImg"><img src="@/assets/uninstall.svg" alt=""></div>설치 삭제</div>
                  <div class="memoOptionDetail"><div class="memoOptionIconImg"><img src="@/assets/widget.svg" alt=""></div>위젯</div>
                </div>
              </div>
            </div>
          </div>
          <div class="appEditing" v-show="this.appNameEditing1" @click="closeAppNameEditing(1)">
            &nbsp;
          </div>
          <input type="text" maxlength="12" class="appEditingInputClass" id="appEditingInput1" v-show="this.appNameEditing1" :value="this.application1.nickname">


          <div class="appItem">
            
            <div class="appTotalContainerOne"  @click="modalOpen(2)">
              <div class="appIconContainer">
                <img class="appIcon" :src="this.application2.src" alt="">
              </div>
              <div class="appName" v-if="this.application2.isNickname===false">{{ this.application2.name }}</div>
              <div class="appName" v-if="this.application2.isNickname===true">{{ this.application2.nickname }}</div>
            </div>
            
            <div class="modal-wrap-2" v-show="modalTwoCheck" @click.self="closeModal">
              <div class="modal-tri-2">
                <img src="@/assets/toggleTriangle.svg" alt="" />
              </div>
              <div class="memoContainer">
                <div class="memoName">
                  <div class="memo-middle" v-if="this.application2.isNickname===false">{{this.application2.nickname}}</div>
                  <div class="memo-middle" v-if="this.application2.isNickname===true">{{this.application2.name}}</div>

                  <div class="memo-right">
                    <img class="pencil" v-if="this.application2.isNickname===false" src="@/assets/editIcon.svg" style="cursor:pointer" alt="" @click="openAppNameChange(2)">
                    <img src="@/assets/detailIcon.svg" style="cursor:pointer" alt="" @click="openAppSettingModal(2)">
                  </div>
                </div>
                <div class="memoOption">
                  <div class="memoOptionDetail"><div class="memoOptionIconImg"><img src="@/assets/select.svg" alt=""></div>선택</div>
                  <div class="memoOptionDetail"><div class="memoOptionIconImg"><img src="@/assets/homeAdd.svg" alt=""></div>홈 화면에 추...</div>
                  <div class="memoOptionDetail"><div class="memoOptionIconImg"><img src="@/assets/uninstall.svg" alt=""></div>설치 삭제</div>
                  <div class="memoOptionDetail"><div class="memoOptionIconImg"><img src="@/assets/widget.svg" alt=""></div>위젯</div>
                </div>
              </div>
            </div>
          </div>
          <div class="appEditing" v-show="this.appNameEditing2" @click="closeAppNameEditing(2)">
            &nbsp;
          </div>
          <input type="text" maxlength="12" class="appEditingInputClass" id="appEditingInput2" v-show="this.appNameEditing2" :value="this.application2.nickname">


          <div class="appItem">
            
            <div class="appTotalContainerOne"  @click="modalOpen(3)">
              <div class="appIconContainer">
                <img class="appIcon" :src="this.application3.src" alt="">
              </div>
              <div class="appName" v-if="this.application3.isNickname===false">{{ this.application3.name }}</div>
              <div class="appName" v-if="this.application3.isNickname===true">{{ this.application3.nickname }}</div>
            </div>
            
            <div class="modal-wrap-3" v-show="modalThreeCheck" @click.self="closeModal">
              <div class="modal-tri-3">
                <img src="@/assets/toggleTriangle.svg" alt="" />
              </div>
              <div class="memoContainer">
                <div class="memoName">
                  <div class="memo-middle" v-if="this.application3.isNickname===false">{{this.application3.nickname}}</div>
                  <div class="memo-middle" v-if="this.application3.isNickname===true">{{this.application3.name}}</div>

                  <div class="memo-right">
                    <img class="pencil" v-if="this.application3.isNickname===false" src="@/assets/editIcon.svg" style="cursor:pointer" alt="" @click="openAppNameChange(3)">
                    <img src="@/assets/detailIcon.svg" style="cursor:pointer" alt="" @click="openAppSettingModal(3)">
                  </div>
                </div>
                <div class="memoOption">
                  <div class="memoOptionDetail"><div class="memoOptionIconImg"><img src="@/assets/select.svg" alt=""></div>선택</div>
                  <div class="memoOptionDetail"><div class="memoOptionIconImg"><img src="@/assets/homeAdd.svg" alt=""></div>홈 화면에 추...</div>
                  <div class="memoOptionDetail"><div class="memoOptionIconImg"><img src="@/assets/uninstall.svg" alt=""></div>설치 삭제</div>
                  <div class="memoOptionDetail"><div class="memoOptionIconImg"><img src="@/assets/widget.svg" alt=""></div>위젯</div>
                </div>
              </div>
            </div>
          </div>
          <div class="appEditing" v-show="this.appNameEditing3" @click="closeAppNameEditing(3)">
            &nbsp;
          </div>
          <input type="text" maxlength="12" class="appEditingInputClass" id="appEditingInput3" v-show="this.appNameEditing3" :value="this.application3.nickname">




        </div>
      </div>
    </div>
    <PhoneBottomBarVue />
    <div class="app-setting-modal" v-show="appSettingModal4">
      <AppSettingVue :app="this.application4" @closeAppModal="closeAppSettingModal" @nicknameChanged="nicknameChanged" @modeChanged="modeChanged" :key="this.numCnt"/>
    </div>
    <div class="app-setting-modal" v-show="appSettingModal5">
      <AppSettingVue :app="this.application5" @closeAppModal="closeAppSettingModal" @nicknameChanged="nicknameChanged" @modeChanged="modeChanged" :key="this.numCnt"/>
    </div>
    <div class="app-setting-modal" v-show="appSettingModal6">
      <AppSettingVue :app="this.application6" @closeAppModal="closeAppSettingModal" @nicknameChanged="nicknameChanged" @modeChanged="modeChanged" :key="this.numCnt"/>
    </div>
    <div class="app-setting-modal" v-show="appSettingModal7">
      <AppSettingVue :app="this.application7" @closeAppModal="closeAppSettingModal" @nicknameChanged="nicknameChanged" @modeChanged="modeChanged" :key="this.numCnt"/>
    </div>
    <div class="app-setting-modal" v-show="appSettingModal1">
      <AppSettingVue :app="this.application1" @closeAppModal="closeAppSettingModal" @nicknameChanged="nicknameChanged" @modeChanged="modeChanged" :key="this.numCnt"/>
    </div>
    <div class="app-setting-modal" v-show="appSettingModal2">
      <AppSettingVue :app="this.application2" @closeAppModal="closeAppSettingModal" @nicknameChanged="nicknameChanged" @modeChanged="modeChanged" :key="this.numCnt"/>
    </div>
    <div class="app-setting-modal" v-show="appSettingModal3">
      <AppSettingVue :app="this.application3" @closeAppModal="closeAppSettingModal" @nicknameChanged="nicknameChanged" @modeChanged="modeChanged" :key="this.numCnt"/>
    </div>
  </div>
</template>

<script>
import PhoneTopBarVue from "@/components/PhoneTopBarVue.vue";
import SearchBarVue from '@/components/SearchBarVue';
import PhoneBottomBarVue from '@/components/PhoneBottomBarVue';
import AppSettingVue from "./AppSettingVue.vue";

export default {
  data() {
    return {
      numCnt: 0,

      now: 0,
      modalOneCheck: false,
      modalTwoCheck: false,
      modalThreeCheck: false,
      modalFourCheck: false,
      modalFiveCheck: false,
      modalSixCheck: false,
      modalSevenCheck: false,

      activeModal: 0,
      appSettingModal1: false,
      appSettingModal2: false,
      appSettingModal3: false,
      appSettingModal4: false,
      appSettingModal5: false,
      appSettingModal6: false,
      appSettingModal7: false,

      appNameEditing1: false,
      appNameEditing2: false,
      appNameEditing3: false,
      appNameEditing4: false,
      appNameEditing5: false,
      appNameEditing6: false,
      appNameEditing7: false,

      app:{},
    }
  },


  components: {
    PhoneTopBarVue,
    PhoneBottomBarVue,
    SearchBarVue,
    AppSettingVue,
  },

  created() {
    this.application4 = {idx: 4, name: "Gmail", nickname: "Gmail", src: require("@/assets/img/icon/Gmail.png"), isNickname: false};
    this.application5 = {idx: 5, name: "Chrome", nickname: "Chrome", src: require("@/assets/img/icon/Chrome.png"), isNickname: false};
    this.application6 = {idx: 6, name: "Meet", nickname: "Meet", src: require("@/assets/img/icon/Meet.png"), isNickname: false};
    this.application7 = {idx: 7, name: "Google", nickname: "Google", src: require("@/assets/img/icon/Google.png"), isNickname: false};

    this.application1 = {idx: 1, name: "이마트에브리데이", nickname: "이마트에브리데이", src: require("@/assets/img/icon/이마트에브리데이.png"), isNickname: false};
    this.application2 = {idx: 2, name: "이마트", nickname: "이마트", src: require("@/assets/img/icon/이마트.png"), isNickname: false};
    this.application3 = {idx: 3, name: "이마트몰", nickname: "이마트몰", src: require("@/assets/img/icon/이마트몰.png"), isNickname: false};
  },

  methods: {
    openAppNameChange: function(value) {
      if (value === 1) {
        this.appNameEditing1 = true;
      } else if (value === 2) {
        this.appNameEditing2 = true;
      } else if (value === 3) {
        this.appNameEditing3 = true;
      } else if (value === 4) {
        this.appNameEditing4 = true;
      } else if (value === 5) {
        this.appNameEditing5 = true;
      } else if (value === 6) {
        this.appNameEditing6 = true;
      } else if (value === 7) {
        this.appNameEditing7 = true;
      }
    },

    closeAppNameEditing: function(value) {

      if (value === 1) {
        let target = document.querySelectorAll("#appEditingInput1");
        this.application1.nickname = target[0].value;
      } else if (value === 2) {
        let target = document.querySelectorAll("#appEditingInput2");
        this.application2.nickname = target[0].value;
      } else if (value === 3) {
        let target = document.querySelectorAll("#appEditingInput3");
        this.application3.nickname = target[0].value;
      } else if (value === 4) {
        let target = document.querySelectorAll("#appEditingInput4");
        this.application4.nickname = target[0].value;
      } else if (value === 5) {
        let target = document.querySelectorAll("#appEditingInput5");
        this.application5.nickname = target[0].value;
      } else if (value === 6) {
        let target = document.querySelectorAll("#appEditingInput6");
        this.application6.nickname = target[0].value;
      } else if (value === 7) {
        let target = document.querySelectorAll("#appEditingInput7");
        this.application7.nickname = target[0].value;
      }


      const b = document.querySelectorAll(".appEditingInputClass");
      for (let item of b) {
        item.style.display = "none";
      }

      this.appNameEditing1 = false;
      this.appNameEditing2 = false;
      this.appNameEditing3 = false;
      this.appNameEditing4 = false;
      this.appNameEditing5 = false;
      this.appNameEditing6 = false;
      this.appNameEditing7 = false;

      this.numCnt += 1;

      if (value === 1) {
        this.modalOneCheck = true;
      } else if (value === 2) {
        this.modalTwoCheck = true;
      } else if (value === 3) {
        this.modalThreeCheck = true;
      } else if (value === 4) {
        this.modalFourCheck = true;
      } else if (value === 5) {
        this.modalFiveCheck = true;
      } else if (value === 6) {
        this.modalSixCheck = true;
      } else if (value === 7) {
        this.modalSevenCheck = true;
      }
    },

    setNickname(idx, value) {
      console.log(value);
      console.log(idx);
    },
    modalOpen: function(value) {
      if (this.modalOneCheck || this.modalTwoCheck || this.modalThreeCheck || this.modalFourCheck || this.modalFiveCheck || this.modalSixCheck || this.modalSevenCheck) {
        this.closeModal();
        return;
      }

      if (value === 1) {
        this.modalOneCheck = !this.modalOneCheck;
        this.activeModal = 1;
      } else if (value === 2) {
        this.modalTwoCheck = !this.modalTwoCheck;
        this.activeModal = 2;
      } else if (value === 3) {
        this.modalThreeCheck = !this.modalThreeCheck;
        this.activeModal = 3;
      } else if (value === 4) {
        this.modalFourCheck = !this.modalFourCheck;
        this.activeModal = 4;
      } else if (value === 5) {
        this.modalFiveCheck = !this.modalFiveCheck;
        this.activeModal = 5;
      } else if (value === 6) {
        this.modalSixCheck = !this.modalSixCheck;
        this.activeModal = 6;
      } else if (value === 7) {
        this.modalSevenCheck = !this.modalSevenCheck;
        this.activeModal = 7;
      } 

      
    },
    closeModal : function() {
      this.modalOneCheck = false;
      this.modalTwoCheck = false;
      this.modalThreeCheck = false;
      this.modalFourCheck = false;
      this.modalFiveCheck = false;
      this.modalSixCheck = false;
      this.modalSevenCheck = false;
    },
    closeAppSettingModal: function() {
      this.appSettingModal1 = false; 
      this.appSettingModal2 = false; 
      this.appSettingModal3 = false;
      this.appSettingModal4 = false;
      this.appSettingModal5 = false;
      this.appSettingModal6 = false;
      this.appSettingModal7 = false;

      this.modalOneCheck = false;
      this.modalTwoCheck = false;
      this.modalThreeCheck = false;
      this.modalFourCheck = false;
      this.modalFiveCheck = false;
      this.modalSixCheck = false;
      this.modalSevenCheck = false;

    },
    openAppSettingModal: function(value) {

      if (value === 1) {
        this.appSettingModal1 = true;
      } else if (value === 2) {
        this.appSettingModal2 = true;
      } else if (value === 3) {
        this.appSettingModal3 = true;
      } else if (value === 4) {
        this.appSettingModal4 = true;
      } else if (value === 5) {
        this.appSettingModal5 = true;
      } else if (value === 6) {
        this.appSettingModal6 = true;
      } else if (value === 7) {
        this.appSettingModal7 = true;
      }
    },
    nicknameChanged: function(value, nickname) {
      if (value === 1) {
        this.application1.nickname = nickname;
      } else if (value === 2) {
        this.application2.nickname = nickname;
      } else if (value === 3) {
        this.application3.nickname = nickname;
      } else if (value === 4) {
        this.application4.nickname = nickname;
      } else if (value === 5) {
        this.application5.nickname = nickname;
      } else if (value === 6) {
        this.application6.nickname = nickname;
      } else if (value === 7) {
        this.application7.nickname = nickname;
      } 
    },
    modeChanged: function(value, isNickname) {
      if (value === 1) {
        this.application1.isNickname = isNickname;
      } else if (value === 2) {
        this.application2.isNickname = isNickname;
      } else if (value === 3) {
        this.application3.isNickname = isNickname;
      } else if (value === 4) {
        this.application4.isNickname = isNickname;
      } else if (value === 5) {
        this.application5.isNickname = isNickname;
      } else if (value === 6) {
        this.application6.isNickname = isNickname;
      } else {
        this.application7.isNickname = isNickname;
      }
    }
  }
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.phone-background {
  background: url('@/assets/background/phone-background4.png');
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
  top: calc(300px + 22px + 95px);
  width: 360px;
  height: 723px;
}
.modal-wrap-2 {
  position: absolute;
  left: calc(50% - 180px);
  top: calc(300px + 22px + 95px);
  width: 360px;
  height: 723px;
}
.modal-wrap-3 {
  position: absolute;
  left: calc(50% - 180px);
  top: calc(300px + 22px + 95px);
  width: 360px;
  height: 723px;
}

.modal-wrap-4 {
  position: absolute;
  left: calc(50% - 180px);
  top: calc(300px + 22px);
  width: 360px;
  height: 723px;
}

.modal-wrap-5 {
  position: absolute;
  left: calc(50% - 180px);
  top: calc(300px + 22px);
  width: 360px;
  height: 723px;
}

.modal-wrap-6 {
  position: absolute;
  left: calc(50% - 180px);
  top: calc(300px + 22px);
  width: 360px;
  height: 723px;
}

.modal-wrap-7 {
  position: absolute;
  left: calc(50% - 135px);
  top: calc(300px + 22px);
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
  top: 108px;
  z-index: 899;
  left: 20px;
  background:rgba(255,255,255,0.71);
}

.memoName {
  position:relative;
  display: flex;
  flex-direction: row;
  width:100%;
  height: 3rem;
  justify-content: space-between;
  align-content: center;
  background: #FFFFFF;
  border-radius: 20px 20px 0 0;
}

.memo-middle {
  display: flex;
  align-items: center;
  font-weight: 700;
  width: 100%;
  z-index: 1;
  justify-content: center;
  font-size: 14px;
}

.appEditing > input {
  position: absolute;
  width: 240px;
  top: 165px;
  left: 30px;
  text-align: center;
  border: 0px;
  font-weight: 700;
  height: 20px;
}


.memo-right {
  left : 200px;
  z-index: 2;
  position: absolute;
  width: 2.5rem;
  height: 3rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 1rem;
}



.memoOptionDetail {
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: .6rem;
  width: 55px;
}

.memoOption img {
  opacity: 1.0;
  color: black;
  margin-bottom: .2rem;
}

.editBtn {
  cursor: pointer;
}

.appContainerOne {
  padding: 16px 16px;
}

.app-setting-modal {
  position: absolute;
  left: calc(50% - 180px);
  top: calc(300px);
  width: 360px;
  z-index: 999;
}
/* modal or popup */
.modal-container {
  transform: translate(-50%, -50%);
  background: #fff;
}

.appTotalContainerOne {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;
  position: relative;
  padding-top: 10px;
}
.appIconContainer {
  width: 50px;
  height: 50px;
  border: 0px;
}

.appIcon {
  width: 100%;
  height: 100%;
  border-radius:20px;
}

.appName {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  font-size: .7rem;
  margin-top: .3rem;
  padding: 0 .3rem;
  color: white;
  width: 70px;
  height: 40px;
  font-weight: 500;
}

.modal-tri-1 img {
  position: relative;
  width: 20px;
  top: 120px;
  left: -124px;
  z-index: 10;
}

.modal-tri-2 img {
  position: relative;
  width: 20px;
  top: 120px;
  left: -44px;
  z-index: 10;

}

.modal-tri-3 img {
  position: relative;
  width: 20px;
  top: 120px;
  left: 36px;
  z-index: 10;

}

.modal-tri-4 img {
  position: relative;
  width: 20px;
  top: 120px;
  left: -124px;
}

.modal-tri-5 img {
  position: relative;
  width: 20px;
  top: 120px;
  left: -44px;
}

.modal-tri-6 img {
  position: relative;
  width: 20px;
  top: 120px;
  left: 36px;
}

.modal-tri-7 img {
  position: relative;
  width: 20px;
  top: 120px;
  left: 70px;
}

.blur {
  -webkit-backdrop-filter: blur(50px);
  backdrop-filter: blur(50px);
}
.brightness {
  -webkit-backdrop-filter: brightness(1.5);
  backdrop-filter: brightness(1.5);
}
.contrast {
  -webkit-backdrop-filter: contrast(.2);
  backdrop-filter: contrast(.2);
}
.drop-shadow {
  -webkit-backdrop-filter: drop-shadow(5px 5px red);
  backdrop-filter: drop-shadow(5px 5px red);
}
.grayscale {
  -webkit-backdrop-filter: grayscale(.8);
  backdrop-filter: grayscale(.8);
}
.hue-rotate {
  -webkit-backdrop-filter: hue-rotate(45deg);
  backdrop-filter: hue-rotate(45deg);
}
.invert {
  -webkit-backdrop-filter: invert(1);
  backdrop-filter: invert(1);
}
.opacity {
  -webkit-backdrop-filter: opacity(.4);
  backdrop-filter: opacity(.4);
}
.saturate {
  -webkit-backdrop-filter: saturate(.3);
  backdrop-filter: saturate(.3);
}
.sepia {
  -webkit-backdrop-filter: sepia(.9);
  backdrop-filter: sepia(.9);
}

.memoOption {
  display: flex;
  flex-direction: row;
  width:100%;
  height: 3rem;
  justify-content: space-evenly;
  align-content: center;
  backdrop-filter: blur(6px);
  border-radius: 0 0 20px 20px;
}

.memoOptionIconImg {
  width: 15px;
  height: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2px;
}

.appEditing {
  position: absolute;
  left: calc(50% - 180px);
  top: calc(300px);
  width: 360px;
  height: 700px;
  z-index: 990;
}

#appEditingInput4 {
  position: absolute;
  width: 230px;
  left: calc(50% - 180px + 35px);
  top: calc(300px + 160px);
  text-align: center;
  border: 0px;
  font-weight: 700;
  height: 30px;
  z-index: 999;
  font-weight: 700;
  font-size: 16px;
}

#appEditingInput5 {
  position: absolute;
  width: 230px;
  left: calc(50% - 180px + 35px);
  top: calc(300px + 160px);
  text-align: center;
  border: 0px;
  font-weight: 700;
  height: 30px;
  z-index: 999;
  font-weight: 700;
  font-size: 16px;
}
#appEditingInput6 {
  position: absolute;
  width: 230px;
  left: calc(50% - 180px + 35px);
  top: calc(300px + 160px);
  text-align: center;
  border: 0px;
  font-weight: 700;
  height: 30px;
  z-index: 999;
  font-weight: 700;
  font-size: 16px;
}
#appEditingInput7 {
  position: absolute;
  width: 230px;
  left: calc(50% - 180px + 80px);
  top: calc(300px + 160px);
  text-align: center;
  border: 0px;
  font-weight: 700;
  height: 30px;
  z-index: 999;
  font-weight: 700;
  font-size: 16px;
}
#appEditingInput1 {
  position: absolute;
  width: 230px;
  left: calc(50% - 180px + 35px);
  top: calc(300px + 160px + 95px);
  text-align: center;
  border: 0px;
  font-weight: 700;
  height: 30px;
  z-index: 999;
  font-weight: 700;
  font-size: 16px;
}
#appEditingInput2 {
  position: absolute;
  width: 230px;
  left: calc(50% - 180px + 35px);
  top: calc(300px + 160px + 95px);
  text-align: center;
  border: 0px;
  font-weight: 700;
  height: 30px;
  z-index: 999;
  font-weight: 700;
  font-size: 16px;
}
#appEditingInput3 {
  position: absolute;
  width: 230px;
  left: calc(50% - 180px + 35px);
  top: calc(300px + 160px +  95px);
  text-align: center;
  border: 0px;
  font-weight: 700;
  height: 30px;
  z-index: 999;
  font-weight: 700;
  font-size: 16px;
}


.pencil {
  margin-right: 5px;
}

</style>