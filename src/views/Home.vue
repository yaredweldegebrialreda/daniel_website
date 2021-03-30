<template>
  <v-content>
    <Qualities />
    <Technologies />
    <LatestWork />
  </v-content>
</template>

<script>
import Qualities from "../components/Qualities";
import Technologies from "../components/Technologies";
 import LatestWork from "../components/LatestWork";

export default {
  name: "Home",

  components: {
    Qualities,
    Technologies,
    LatestWork
  }
};
</script>