import axios from "axios";
import { ref } from "vue";

export default function getAllCharacters() {
    const characters = ref([])
    const error = ref({})

    const load = async () => {
        try {
            const res = await axios.get('https://rickandmortyapi.com/api/character')
            console.log('test', res.data.results);
            console.log(res);

            if (res.data.results === 0) {
                throw Error('Could not load any data. Please go home!')
            }
            characters.value = await res.data.results
        }

        catch (err) {
            error.value = err.message
            console.log(error.value);
        }

    }

    return { characters, error, load }
}