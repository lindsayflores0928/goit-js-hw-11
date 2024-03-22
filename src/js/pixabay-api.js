export const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '43016833-91b2849dc63b5c02392642469';

export const options = {
  params: {
      key: API_KEY,
      q: "",
      image_type: 'photo',
      orientation: "horizontal",
      safesearch: true,
      page: 1,
      per_page: 40,
  }
}