<template>
  <div class="scripts-list">
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Last</th>
          <th scope="col">Handle</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="script in scripts" v-bind:key="script.id">
          <th scope="row">1</th>
          <td>{{ script.metadata.name }}</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import IScript from "carnelian/types/interfaces/script.interface";

@Component
export default class Dashboard extends Vue {
  @Prop() readonly scripts: IScript[] | undefined;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped></style>
