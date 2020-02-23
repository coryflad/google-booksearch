import React from 'react'


class SearchFilter extends React.Component {
    render() {
        const printOptions = this.props.printType.map(
                (type, i) => <option value={type.name} key={i}>{type.name}</option>
              )

        const bookOptions = this.props.bookType.map(
            (book, i) => <option value={book.type} key={i}>{book.type}</option>
        )

        return (
          <div>
            <form>
              <label>Print Type: </label>
              <select>
                <option>Select one...</option>
                {printOptions}
              </select>
              
              <label>Book Type: </label>
              <select>
                <option>Select one...</option>
                {bookOptions}
              </select>
            </form>
          </div>
        )
    }

}

SearchFilter.defaultProps = {
    printType: [],
    bookType: [],
}


export default SearchFilter