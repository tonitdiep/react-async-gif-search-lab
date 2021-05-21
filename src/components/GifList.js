import React from 'react'

const GifList = (props) => {
    console.log(props, "hiii")
    return (
        <div>
            I am GifList<hr/>
            <strong>Listing the Dolphins:</strong> 
            {props.gifs.map(gif => <img key={gif.url} src={gif.url} alt="gif"/>)}
        </div>
    )
}
export default GifList