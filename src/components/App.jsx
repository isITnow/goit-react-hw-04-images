import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import s from './App.module.css';
import { ImageGallery } from './ImageGallery';
import { Searchbar } from './Searchbar';

export class App extends Component {
  state = {
    query: '',
    page: 1,
  };

  handleSubmit = query => {
    this.setState({ query, page: 1 });
  };

  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { query, page } = this.state;
    const { handleLoadMore, handleSubmit } = this;
    return (
      <div className={s.App}>
        <Searchbar onSubmit={handleSubmit} />
        <ImageGallery query={query} page={page} onLoadMore={handleLoadMore} />
        <ToastContainer autoClose={3000} />
      </div>
    );
  }
}
