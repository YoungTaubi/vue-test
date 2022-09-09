import axios from "axios";
import { ref } from "vue";

export default function getAllCharacters() {
    const characters = ref([{name: "Peter"}, {name: "Günter"}])
    const error = ref({})
    const testValue = ref('Ulf')

    const load = async () => {
        try {
            const res = await axios.get('https://rickandmortyapi.com/api/character')
            console.log('test', res.data.results);
            // console.log(res);

            if (res.data.results === 0) {
                throw Error('Could not load any data. Please go home!')
            }
            characters.value = res.data.results
            // characters.value = [{ name: "Ulf" }]
            console.log('function', characters.value);
        }

        catch (err) {
            error.value = err.message
            console.log(error.value);
        }
    }

    const setTestValue = () => {
        testValue.value = 'Maik'
        console.log('test', testValue.value);
    }

    return { characters, error, load, testValue, setTestValue }
}