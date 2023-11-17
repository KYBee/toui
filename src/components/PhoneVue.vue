<template>
  <div class="phone-background">
    <PhoneTopBarVue />
    <SearchBarVue />
    <div class="phone middle">
      <div class="appContainer">
        <div class="appLine">
          <div v-for="(item, index) in applications" v-bind:key="index" class="appItem"><AppVue v-bind:application="item" @changeName="setNickname" @modalOpen="modalOpen" /></div>
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
      applications: [        {idx: 0, name: "이마트에브리데이", nickname: "이마트에브리데이", src: require("@/assets/img/icon/이마트에브리데이.png"), mode: false, isModalOpen: false},
        {idx: 1, name: "이마트몰", nickname: "이마트몰", src: require("@/assets/img/icon/이마트몰.png"), mode: false, isModalOpen: false},
        {idx: 2, name: "이마트", nickname: "이마트", src: require("@/assets/img/icon/이마트.png"), mode: false, isModalOpen: false},],
    }
  },


  components: {
    PhoneTopBarVue,
    PhoneBottomBarVue,
    AppVue,
    SearchBarVue,

  },

  methods: {
    setNickname(idx, value) {
      console.log(value);
      console.log(idx);
    },
    modalOpen(idx) {
      console.log(idx);
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

</style>