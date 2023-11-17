<template>
  <div class="memoBackground">
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
export default {
  name: "AppMemoVue",
}
</script>

<style scoped>
.memoContainer {
  width: 260px;
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