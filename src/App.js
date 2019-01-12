import React from 'react';
import SearchBar from './SearchBar';
import axios from 'axios';
import ImageList from './ImageList';

class App extends React.Component {
    state = { images: [] }

     searchSubmit = async term => {
       const response = await axios.get("https://api.unsplash.com/search/photos", {   
            params: { query: term},
            headers: {
                Authorization: "Client-ID 9dd12ae12c74f026bc48404a92510a86e97f4860b665ae1003269c5d9f86db03"
            }
        });
        
        this.setState( { images: response.data.results } );
    }

    render() {
        return(
            <div className="ui container" style={{marginTop: "20px"}}>
                <SearchBar submit={this.searchSubmit}/>
                <ImageList images={this.state.images}/>
            </div>
        )
    }
} 

export default App;