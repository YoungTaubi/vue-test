<template>
  <h1>{{ character.name }}</h1>
  <img :src="character.image" :alt="character.name">
  <!-- <h1>Test</h1> -->
</template>

<script>
import { ref } from '@vue/reactivity';
export default {
  props: ["character"],

  setup(props) {



    return { characterName };
  },
};
</script>

<style></style>
