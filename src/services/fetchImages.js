import axios from 'axios';

const PER_PAGE = 12;

const galleryApi = axios.create({
  baseURL: `https://pixabay.com/api/`,
  params: {
    key: '29319280-fde4903173ec234f4d94cddfd',
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: PER_PAGE,
  },
});

export const fetchImages = async (searchQuery, page) => {
  const params = {
    q: searchQuery,
    page,
  };
  const response = await galleryApi.get('/', { params });
  return response.data;
};
