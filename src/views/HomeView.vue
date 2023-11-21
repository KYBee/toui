<template>
  <div class="home">
    <nav>
      <div class="btn-container">
        <router-link style="text-decoration:none" to="/five"><button class="btn">앱 정리 기능</button></router-link>
        <router-link style="text-decoration:none" to="/four"><button class="btn">앱 키우기 기능</button></router-link>
      </div>
      <div class="btn-container">
        <router-link style="text-decoration:none" to="/one"><button class="btn">앱 별칭 기능</button></router-link>
        <router-link style="text-decoration:none" to="/three"><button class="btn">키보드 음차 기능</button></router-link>
      </div>
      <div class="btn-container">
        <router-link to="/"><button class="last-btn">발표자료 다운로드</button></router-link>
      </div>
    </nav>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
  components: {
    
  }
}
</script>

<style>
* {
  font-family: 'SamsungOne', sans-serif !important;
}

nav {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 330px;
  margin: 0;
}

.btn-container {
  width: 300px;
  display: flex;
  justify-content: space-between;
}

.btn {
  width: 140px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
}

.btn-title {
  text-decoration: none;
  color: black;
}

.last-btn {
  width: 300px;
  height: 80px;
  font-family: 'SamsungOne', sans-serif !important;

}

.btn, .last-btn {
  border: 0;
  border-radius: 10px;
  background: #C5CECA;
  font-weight: 700;
  cursor: pointer;
  font-family: 'SamsungOne', sans-serif !important;

}

</style>