import { useState, useEffect } from 'react';
import { fetchImages } from 'services/fetchImages';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { toast } from 'react-toastify';
import { Loader } from 'components/Loader';
import { Button } from 'components/Button';
import s from './ImageGallery.module.css';
import PropTypes from 'prop-types';

export const ImageGallery = ({ query, page, onLoadMore }) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (query === '') {
      return;
    }
    setIsLoading(true);
    fetchImages(query, page)
      .then(data => {
        if (!data.hits.length) {
          setImages([]);
          setIsLoading(false);
          toast.warn(`No results matching "${query}"`);
          return;
        }

        setImages(page === 1 ? data.hits : [...images, ...data.hits]);
      })
      .catch(error => toast.error(error.message))
      .finally(() => setIsLoading(false));
  }, [query, page]);

  return (
    <>
      <ul className={s.ImageGallery}>
        {images.map(({ id, webformatURL, largeImageURL, tags }) => (
          <ImageGalleryItem
            key={id}
            imgUrl={webformatURL}
            largeImgUrl={largeImageURL}
            tags={tags}
          />
        ))}
      </ul>
      {isLoading && <Loader />}
      {images.length > 0 && (
        <Button children={'Load more'} onClick={onLoadMore} />
      )}
    </>
  );
};

ImageGallery.propTypes = {
  query: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
  onLoadMore: PropTypes.func.isRequired,
};
