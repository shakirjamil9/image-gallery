// Fetching Images from source.unsplash API
const fetchImages = async (page) => {
  const access_key = "?client_id=8F0DjzcyLyq2gnoFrutCOyjSPguB4nv6bx9p5IRHRyk";
  const URL = `https://api.unsplash.com/photos`;
  const response = await fetch(`${URL}${access_key}&per_page=12&page=${page}`);
  const data = response.json();
  return data;
};

export { fetchImages };
