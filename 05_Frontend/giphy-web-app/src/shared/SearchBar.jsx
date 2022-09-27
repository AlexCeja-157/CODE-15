import React, { Component } from 'react'

export default class SearchBar extends Component {
  
  state={
        searchTerm:''
  }

    render() {
    return (
     <div>
        <input 
            value={this.state.searchTerm} // Pinta en la UI los caracteres que el usuario ingresa
            onChange={ e => this.setState({searchTerm: e.target.value}) } //Guarda los caracteres que se ingresaron
            type= 'text'
            placeholder=' What are you looking for? ' 
        />
        <button onClick={()=>{
            this.props.handleSearch(this.state.searchTerm)
            this.setState({searchTerm:''})
            }} >Search</button>

        <button onClick={() =>
            this.props.handleClean()
         }>Clean</button>

     </div>
    )
  }
}
