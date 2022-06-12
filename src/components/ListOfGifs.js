import React, { useState, useEffect } from 'react'
import Gif from './Gif'
import getGifs from '../services/getGifs'
import './Loader.css'

export default function ListOfGifs({ params }) {

    const { keyword } = params
    const [loading, setLoading] = useState(false)
    const [gifs, setGifs] = useState([])

    useEffect(function () {
        setLoading(true)
        getGifs({ keyword })
        .then(gifs => {
            setGifs(gifs)
            setLoading(false)
        })

    }, [keyword])

    if (loading) return <>
                            <div class="lds-default"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                        </>


    

    return <div>
        {
            gifs.map(({id, title, url}) => 
                <Gif 
                    key={id}
                    title={title}
                    url={url}
                    id={id}
                />
            )
        }
    </div>    
}