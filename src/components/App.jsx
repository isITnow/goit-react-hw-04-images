import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import s from './App.module.css';
import { ImageGallery } from './ImageGallery';
import { Searchbar } from './Searchbar';

export const App = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);

  const handleSubmit = query => {
    setQuery(query);
    setPage(1);
  };

  const handleLoadMore = () => {
    setPage(prevState => prevState + 1);
  };

  return (
    <div className={s.App}>
      <Searchbar onSubmit={handleSubmit} />
      <ImageGallery query={query} page={page} onLoadMore={handleLoadMore} />
      <ToastContainer autoClose={3000} />
    </div>
  );
};
