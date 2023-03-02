import axios from 'axios';

export const requestPhotos = async query => {
  const {
    data: { hits },
  } = await axios.get(
    `https://pixabay.com/api/?q=${query}&page=1&key=33034964-6791c4166c041f83734802d57&image_type=photo&orientation=horizontal&per_page=12`
  );
  return hits;
};
