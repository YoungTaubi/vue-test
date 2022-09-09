<template>
  <div class="home">
    <h1>Home</h1>
    <input type="text" v-model="searchValue" />
    <div v-for="name in filteredNames" :key="name">{{ name }}</div>
    <p v-for="item in test" :key="item">{{ item }}</p>
    <button @click="handleClick">click</button>
  </div>
</template>

<script>
import { computed, ref, watchEffect } from "vue";

export default {
  name: "HomeView",
  setup() {
    let names = ref(["Werner", "Uwe", "Maik", "Achim"]);
    let searchValue = ref("");
    let age = 30;
    let test = ref([]);

    console.log(names.value, searchValue.value);

    const pushTest = () => {
      test.value.push("hallo");
    };

    watchEffect(() => {
      console.log("watchEffect function ran");
      pushTest(searchValue.value)
    });

    const handleClick = () => {
      console.log("test");
    };

    const filteredNames = computed(() => {
      return names.value.filter((name) =>
        name.toLowerCase().includes(searchValue.value.toLocaleLowerCase())
      );
    });

    return { names, age, handleClick, filteredNames, searchValue, test };
  },
};
</script>
