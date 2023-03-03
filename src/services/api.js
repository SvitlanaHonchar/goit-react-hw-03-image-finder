import axios from 'axios';

export const requestPhotos = async (query, page) => {
  const {
    data: { hits, totalHits },
  } = await axios.get(
    `https://pixabay.com/api/?q=${query}&page=${page}&key=33034964-6791c4166c041f83734802d57&image_type=photo&orientation=horizontal&per_page=12`
  );
  return { hits, totalHits };
};
