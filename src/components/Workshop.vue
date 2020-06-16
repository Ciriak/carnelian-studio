<template>
  <div class="workshop">Workshop {{ connector }}</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import store from "../store";

@Component
export default class Dashboard extends Vue {
  @Prop() private msg!: string;
  get connector() {
    return store.connector.dispatch.setConnected(
      store.connector.state.connected
    );
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped></style>
