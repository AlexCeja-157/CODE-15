import axios from 'axios'
import React, { Component } from 'react'
import SearchBar from '../shared/SearchBar'

export default class Home extends Component {

    state={
        resultados:[], // La respuesta de la API
        loading:false // Cambiarlo para mostrar un estado de loading
    }

    handleSearch = async (searchTerm) => {
        this.setState({loading:true})
        const res = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_API_KEY}&q=${searchTerm}&limit=10&rating=G`)
        console.log(res.data.data)
        this.setState({loading:false, resultados: res.data.data})
        
    }

    handleClean = () => {
        this.setState({resultados:[]})
    }

    

  render() {
    return (
    <div>
        <SearchBar 
        handleSearch={this.handleSearch} 
        handleClean={this.handleClean}/>
        
        {
            this.state.resultados.length === 0 ? <p>no se ha realizado busqueda</p> :
            this.state.loading ? <p>Loading ....</p> : 
            this.state.resultados.map(gitObjet => 
            <img src={gitObjet.images.original.url} 
            key={gitObjet.id} 
            alt={gitObjet.slug} />)
        }
    </div>
    )
  }
}
