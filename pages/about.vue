<template>
  <section class="container">
    <div>
      <h1>About me</h1>
      <p>about me</p>
    </div>
    <a 
      href="/" 
      class="home-link">home</a>
  </section>
</template>

<script>
export default {
  asyncData (context) {
    return {

    }
  }
}
</script>

<style lang="scss">
.container {
  min-height: 97vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.icons{
  display: flex;
  justify-content: space-around;
  .github-icon, .linkedin-icon{
    width: 35px;
    height: 35px;
  }
  a:hover{
    .github-icon, .linkedin-icon{
      transition: 200ms;
      opacity: 0.5;
    }
  }
}
</style>

a