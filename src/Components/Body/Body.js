import {useEffect, useState} from "react";
import useFetch from "../../Utils/useFetch";
import {CardMovie} from "../CardMovie/CardMovie";
import {BodyWrapper,Card} from '../../Styles.style'
import React from "react"
import {MyLoaderHome} from "../../Utils/loader";



export const Body = (props) => {
    const {data, loading, error} = useFetch("https://swapi.dev/api/films")

    const movieFilter = (filter) => {
        if (filter) {
            return data.results?.filter((movie) => movie.title.toLowerCase().includes(filter) || movie.opening_crawl.toLowerCase().includes(filter))
        } else return data.results
    }

    const movieCard = movieFilter(props.find)?.map((movie, index) => {
        movie.index = index
        return <CardMovie key={index} movie={movie}/>
    })

    return (
        <BodyWrapper>
            {loading ? <Card><MyLoaderHome/></Card> : movieCard}
        </BodyWrapper>
    );
}

