<template>
  <div id="app">
    <i-navbar>
    <i-navbar-brand :to="{ name: 'home' }">
      Pet Store
    </i-navbar-brand>
      <i-navbar-items class="_justify-content-end">
        <i-nav>
          <i-nav-item :to="{ name: 'cats' }">Cats</i-nav-item>
          <i-nav-item :to="{ name: 'dogs' }">Dogs</i-nav-item>
        </i-nav>
      </i-navbar-items>
    </i-navbar>

    <i-container fluid>
      <router-view/>
    </i-container>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
