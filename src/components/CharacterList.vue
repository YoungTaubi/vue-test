<template>
  <h1>Character List</h1>
  <div v-for="character in characters" :key="character?.id">
    <CharacterCard v-if="characters.length" :character="character" />
    <!-- <h1>{{character.name}}</h1> -->
  </div>
</template>

<script>
import CharacterCard from "./CharacterCard.vue";
import getAllCharacters from "@/composables/getAllCharacters";

export default {
  setup() {
    const { characters, error, load } = getAllCharacters();

    load();

    if (characters.length < 0) {
      console.log("in comp", characters.data?.result);
    }

    return { characters };
  },
  components: { CharacterCard },
};
</script>

<style></style>
