import React, { Component } from 'react';
import './App.css';
import Search from './Search';
import Book from './Book';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [],
            error: null,
            params: {
                printType: '',
                filter: '',
                q: ''
            }
        }
    }

    formatQueryParams(params) {
        const queryItems = Object.keys(params)
            .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`);
        return queryItems.join('&');
    }


    handleSearch = (e) => {
        e.preventDefault()
        const data = {}
        const formData = new FormData(e.target)
        for (let value of formData) data[value[0]] = value[1]

        this.setState({
            params: data
        })

        const searchURL = 'https://www.googleapis.com/books/v1/volumes';
        const queryString = this.formatQueryParams(data);
        const url = searchURL + '?' + queryString;

        console.log(url);

        const options = {
            method: 'GET',
            header: {
                "Authorization": "Bearer AIzaSyCWZJX4XS2w0qsgnl18-Bpj2YPz4ocjFq8",
                "Content-Type": "application/json"
            }
        };

        fetch(url, options)
            .then(res => {
                if (!res.ok) {
                    throw new Error('Something went wrong, please try again later.');
                }
                return res;
            })
            .then(res => res.json())
            .then(data => {
                if (data.totalItems === 0) throw new Error('No books found')

                const aBooks = data.items.map(book => {
                    const { title, authors, description, imageLinks } = book.volumeInfo
                    const { saleability, retailPrice } = book.saleInfo
                    return {
                        title: title,
                        author: authors,
                        description: description,
                        thumbnail_URL: imageLinks.thumbnail,
                        saleability: saleability,
                        price: retailPrice,
                    };
                })
                this.setState({
                    books: aBooks,
                    error: null
                });
            })
            .catch(err => {
                this.setState({
                    error: err.message
                });
            });

    }



    render() {
        const errorMessage = this.state.error ? <div>{this.state.error}</div> : false

        let lib = this.state.books
        // console.log(lib);

        const books = lib.map(book => {
            return <Book
                title={book.title}
                author={book.author}
                description={book.description}
                thumbnail_URL={book.thumbnail_URL}
                saleability={book.saleability}
                price={book.price}
            />
        });


        return (
            <div className="App">
                <header>
                    <h1>Google Book Search</h1>
                </header>
                <Search handleSearch={this.handleSearch} />
                {errorMessage}
                {books}
            </div>
        );
    }
}

export default App;