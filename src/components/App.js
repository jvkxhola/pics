import './App.css';
import SearchBar from './SearchBar';
import unsplash from '../api/unsplash';
import React from 'react'; 
import ImageList from './ImageList';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = { images: [] }
  }

   async onSearchSubmit(term) {
      const response = await unsplash.get('/search/photos', {
        params: { query: term },
      })

      this.setState({ images: response.data.results });
    }

    render(){
    return (
      <div className="ui container" style={{ marginTop: '10px'}}>
        <SearchBar onSubmit={(term) => this.onSearchSubmit(term)} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
