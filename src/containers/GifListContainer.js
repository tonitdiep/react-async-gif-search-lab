import React, { Component } from 'react'
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

export default class GifListContainer extends Component {
    state= {
        gifs: []
    }
    fetchGIFs = (query = "dolphins") => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=Nz3TJ7s081DNEl4c0pCilKYvVOeiIVkq&rating=g`)
            .then(res => res.json())
            .then(({data}) => {
                this.setState({gifs: data.map(gif => ({ url: gif.images.original.url }) ) })
            })
    }
    componentDidMount() {
        this.fetchGIFs()
    }
    render() {
        return (
            <div>
                Inside the container
                <GifSearch fetchGIFs={this.fetchGIFs} />  
                <GifList gifs={this.state.gifs} />
            </div>
        )
    }
}
// GifList GifSearch