<template>
  <h2>Character List</h2>
  <div v-if="characters.length">
    <div v-for="character in characters" :key="character?.id">
      <CharacterCard v-if="characters.length" :character="character" />
    </div>
  </div>
  <h3>{{ testValue }}</h3>
  <button @click="setTestValue">Change Value</button>
</template>

<script>
import CharacterCard from "./CharacterCard.vue";
import getAllCharacters from "@/composables/getAllCharacters";

export default {
  components: { CharacterCard },
  setup() {
    const { characters, error, load, testValue, setTestValue } =
      getAllCharacters();

    load();

    const logListAgain = () => {
      console.log("list", characters);
    };
    console.log("list", characters);
    setTimeout(logListAgain, 5000);

    return { characters, testValue, setTestValue };
  },
};
</script>

<style></style>
