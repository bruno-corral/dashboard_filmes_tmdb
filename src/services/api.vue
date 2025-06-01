<script>
    import axios from 'axios';

    const url = import.meta.env.VITE_API_URL;

    export const api = {
        async movies() {
            try {
                const response = await axios.get(`${url}/movies`);
                return response.data;
            } catch (error) {
                console.error(error);
                throw error;
            }
        },

        async getSearchedMovie(movie) {
            try {
                const response = await axios.get(`${url}/movies/search/${movie}`);
                return response.data;
            } catch (error) {
                console.error(error);
                throw error;
            }
        },

        async genres() {
            try {
                const response = await axios.get(`${url}/genres`);
                return response.data;
            } catch (error) {
                console.error(error);
                throw error;
            }
        },

        async showFavoriteMovies(curentPage) {
            try {
                const response = await axios.get(`${url}/movies/search/favorite/movies/${curentPage}`);
                return response.data;
            } catch (error) {
                console.error(error);
                throw error;
            }
        },
        async postFavoriteMovie(movieId) {
            try {
                const response = await axios.post(`${url}/movies/add-movie`, {
                    movieId
                });
                return response.data;
            } catch (error) {
                console.error(error);
                throw error;
            }
        }
    }
</script>