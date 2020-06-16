<template>
  <div class="dashboard">
    <ScriptsList :scripts="scripts" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import store from "../store";
import ScriptsList from "./ScriptsList.vue";
@Component({
  //   mounted: () => {}
  components: {
    ScriptsList
  }
})
export default class Dashboard extends Vue {
  get scripts() {
    return store.scripts.state.scripts;
  }

  handleConnect = () => {
    store.connector.dispatch.setConnected(!store.connector.state.connected);
  };
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped></style>
