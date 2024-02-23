import axios from 'axios';
export const fetchBreeds = () => {
  axios.defaults.headers.common['x-api-key'] =
    'live_QS33fKv5JXJVMVej8akFFqIUUIB5bTg0YAhzZP4pXS7XFd4sHfUiYRuyG7WCEjAI';

  return axios.get(`https://api.thecatapi.com/v1/breeds`).then(res => res.data);
};

export const fetchCatByBreed = breedId => {
  return axios
    .get(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`)
    .then(res => res.data);
};
