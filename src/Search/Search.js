import React from 'react'
import SearchFilter from '../SearchFilter/SearchFilter'
import SearchInput from '../SearchInput/SearchInput'


class Search extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            books: [],
            searchField: ''
        }
    }

    handleSearch = (e) => {
        console.log(e.target.value)
        this.setState({
            searchField: e.target.value
        })
    }

    render() {
        return (
          <div className="demonym_app">
            <SearchFilter 
            printType={[{name:'all'}, {name:'books'}, {name: 'magazines'}]}
            bookType={[{type: 'free-ebooks'}, {type: 'paid-ebooks'}, {type: 'ebooks'}]} />
            <SearchInput handleSearch={this.handleSearch} />
          </div>
        )
    }
}

export default Search