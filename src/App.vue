<template>
  <div id="app">
    <div id="nav" class="flex justify-center bg-gray-600 mb-4">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  a {
    padding: 15px;
    font-weight: bold;
    color: #ffffff;
    &.router-link-exact-active {
      background: #cdcdcd;
      color: #2c3e50;
    }
  }
}
</style>
