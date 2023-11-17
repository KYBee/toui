<template>
  <div class="appContainer" @click="modalOpen()">
    <div class="appIconContainer">
      <img class="appIcon" :src="this.application.src" alt="">
    </div>
    <div class="appName">{{ this.application.name }}</div>
  </div>
  <div class="modal-wrap" v-show="modalCheck" @click.self="closeModal">
    <div class="memoContainer">
      <div class="memoName">
        <div class="middle">이름</div>
        <div class="right">
          <img src="@/assets/editIcon.svg" alt="" @click="changeName">
          <img src="@/assets/detailIcon.svg" alt="">
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
</template>

<script>
//import AppMemoVue from "@/components/AppMemoVue.vue";
export default {
  name: "ApplicationVue",
  props: {
    application: {
      type: Object,
      default: () => {
        return {
          name: "",
          nickname:"",
          src: "",
          mode: false,
        }
      }
    }
  },
  data() {
    return {
      text: "",
      isEdit: false,
      modalCheck: false,
    }
  },
  methods: {
    edit: function() {
      this.isEdit = !this.isEdit;
    },
    changeName: function (e) {
      this.isEdit=true;
      this.application.mode != this.application.mode;

      console.log(e);
      console.log(this.application.mode)
      console.log("clicked")
      console.log(this.application.idx);
      this.$emit("changeName", this.application.idx, e.value);
    },
    modalOpen: function() {
      this.modalCheck = !this.modalCheck;
      console.log(this.modalCheck)
    },
    closeModal : function() {
      this.modalCheck = false;
    },
  },
  components: {
    //AppMemoVue,
  },
  watch: {
    modalCheck: function() {
      this.$emit("modalOpen", this.application.idx);
    }
  }
}
</script>

<style scoped>
.appContainer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;
  position: relative;
}
.appIconContainer {
  width: 60px;
  height: 60px;
  border: 0px;
  border-radius: 25px;
}

.appIcon {
  width: 100%;
  height: 100%;
  border-radius: 25px;
}

.appName {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: .6rem;
  padding: .3rem;
  color: white;
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
  left: -30px;
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

.middle {
  display: flex;
  align-items: center;
  font-weight: 700;
  width: 12rem;
  justify-content: center;
}

.right {
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

/* dimmed */
.modal-wrap {
  position: absolute;
  left: calc(50% - 180px);
  top: calc(300px + 22px + 60px);
  width: 360px;
  height: 723px;
  background: rgba(0,0,0,0.4)
}
/* modal or popup */
.modal-container {
  transform: translate(-50%, -50%);
  background: #fff;
}





.memoContainer {
  width: 260px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; 
  border-radius: 20px;
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

.middle {
  display: flex;
  align-items: center;
  font-weight: 700;
  width: 12rem;
  justify-content: center;
}

.right {
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
  background: rgba(206,209,212,0.4);
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
</style>