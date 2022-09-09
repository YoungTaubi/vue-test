<template>
  <h1>Rick and Morty</h1>
  <CharacterList />
</template>

<script>
import getAllCharacters from "@/composables/getAllCharacters";
import CharacterList from "@/components/CharacterList.vue";
import { ref } from "@vue/reactivity";

export default {
  setup() {
    let rickAndMortyCharacter = ref("test");

    let test = ref("");

    const getRickAndMortyCharacter = async () => {
      let character = await getAllCharacters();
      console.log("in view", character.name);
      rickAndMortyCharacter.value = character.name;
    };

    const changeCharakter = () => {
      rickAndMortyCharacter.value = "Uwe";
    };

    return {
      getRickAndMortyCharacter,
      rickAndMortyCharacter,
      test,
      changeCharakter,
    };
  },
  components: {CharacterList}
};
</script>

<style></style>
