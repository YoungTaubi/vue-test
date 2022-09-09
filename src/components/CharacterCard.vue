<template>
  <h4>{{ character.name }}</h4>
  <img :src="character.image" :alt="character.name">
</template>

<script>
export default {
  props: ["character"],

  setup(props) {

  },
};
</script>

<style></style>
