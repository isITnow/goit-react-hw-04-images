import { Component } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';
import s from './Searchbar.module.css';

export class Searchbar extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    query: '',
  };

  handleInputChange = evt => {
    const { name, value } = evt.currentTarget;
    this.setState({ [name]: value });
  };

  handleFormSubmit = evt => {
    evt.preventDefault();
    const { query } = this.state;
    if (!query.trim()) {
      toast.error('Please, enter your request');
      return;
    }

    this.props.onSubmit(query);
    this.setState({ query: '' });
  };

  render() {
    const { query } = this.state;
    return (
      <header className={s.Searchbar}>
        <form className={s.SearchForm} onSubmit={this.handleFormSubmit}>
          <button type="submit" className={s.SearchForm__button}>
            <span className={s.SearchForm__buttonLabel}>Search</span>
          </button>

          <input
            name="query"
            onChange={this.handleInputChange}
            value={query}
            className={s.SearchForm__input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
