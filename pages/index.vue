<template>
  <section class="container">
    <div>
      <h1 class="logo">
        <span class="word1">Filippo</span>
        <span class="word2">SMM</span>
      </h1>
    </div>
  </section>
</template>

<script>
</script>

<style lang="scss">
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.logo {
  font: 84px 'Arial Narrow', sans-serif;
  color: #fefefe;
  text-transform: uppercase;
  letter-spacing: -4px;
  span {
  position: relative;
    &:before,
    &:after {
      content: '';
      position: absolute;
      border-width: 32px;/* makes a nice, big 64px square */
      border-style: solid;
      border-color: transparent;
      height: 0;
      z-index: 10;
    }
  }
  .word1 {
    color: #dc006c;
    display: inline-block;
    z-index: 10;
    &:before {
      right: -5px;
      bottom: -5px;
      border-bottom-color: #ffffff;
      border-right-color: #ffffff;
    }
    &:after {
      left: -5px;
      top: -5px;
      border-top-color: #ffffff;
      border-left-color: #ffffff;
    }
  }
  .word2 {
    color: #000000;
    z-index: 0;
    &:before {
      left: -5px;
      top: -5px;
      border-top-color: #ffffff;
      border-left-color: #ffffff;
    }
    &:after {
      right: -5px;
      bottom: -5px;
      border-bottom-color: #ffffff;
      border-right-color: #ffffff;
    }
  }
}
</style>

