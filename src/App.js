import React from 'react';
import SearchBar from './SearchBar';

class App extends React.Component{
    searchSubmit = (term) => {
        console.log(term);
    }

    render() {
        return(
            <div className="ui container" style={{marginTop: "20px"}}>
                <SearchBar submit={this.searchSubmit}/>
            </div>
        )
    }
} 

export default App;