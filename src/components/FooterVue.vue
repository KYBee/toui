<template>
  <footer>
    <a href="https://github.com/KYBee/toui"><h2>&copy; team 모도모도</h2></a>
    <br />
    <a href="https://github.com/KYBee/toui"
      ><img src="@/assets/github.png" alt="github"
    /></a>
  </footer>
</template>

<script>
export default {

}
</script>

<style scoped>
footer {
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

a {
  text-decoration: none;
  color: black;
}

h2 {
  font-size: 1.2rem;
  font-weight: 800;
}

img {
  width: 2rem;
}
</style>