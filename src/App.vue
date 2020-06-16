<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">
        <div class="btn btn-primary">Dashboard</div>
      </router-link>
      <router-link to="/workshop">
        <div class="btn btn-primary">Workshop</div>
      </router-link>
      <router-link to="/settings">
        <div class="btn btn-primary">Settings</div>
      </router-link>
    </div>
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss">
#app {
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  #nav {
    display: flex;
    flex-direction: column;
    background-color: #ccc;
  }
  .content {
    flex: 1;
    overflow: auto;
  }
}
</style>
