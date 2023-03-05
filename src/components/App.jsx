import Button from './Button/Button';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import Searchbar from './Searchbar/Searchbar';
import React, { Component } from 'react';
import { requestPhotos } from 'services/api';

class App extends Component {
  state = {
    query: '',
    photos: [],
    isLoading: false,
    error: null,
    page: 1,
    totalHits: null,
  };

  handleFormSubmit = query => {
    this.setState({ query, photos: [], page: 1 });
  };

  handleLoadMore = () => {
    this.setState(prevState => {
      return {
        page: prevState.page + 1,
      };
    });
  };

  totalPhotos = totalHits => {
    this.setState({ totalHits });
  };

  componentDidMount() {
    this.setState({ query: 'popular' });
  }

  componentDidUpdate(_, prevState) {
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      console.log(this.state.query, this.state.page);

      // fetch
      const fetchPhotos = async () => {
        try {
          this.setState({ isLoading: true });

          const data = await requestPhotos(this.state.query, this.state.page);
          const photos = data.hits;

          this.setState(prevState => ({
            photos: [...prevState.photos, ...photos],
          }));

          const totalHits = data.totalHits;
          this.setState({ totalHits });
        } catch (error) {
          this.setState({ error: error.message });
        } finally {
          this.setState({ isLoading: false });
        }
      };
      fetchPhotos();
    }
  }

  render() {
    return (
      <div className="App">
        <Searchbar onSubmit={this.handleFormSubmit} />
        {this.state.isLoading && <Loader />}
        {this.state.error !== null && (
          <i>An error {this.state.error} occured</i>
        )}

        <ImageGallery photos={this.state.photos} />

        {this.state.totalHits > 12 &&
          this.state.totalHits / 12 > this.state.page && (
            <Button onClick={this.handleLoadMore} />
          )}
      </div>
    );
  }
}

export default App;
