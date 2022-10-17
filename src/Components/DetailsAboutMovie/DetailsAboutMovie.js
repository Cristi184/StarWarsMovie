import React, {useEffect, useState} from "react";
import {Header} from "../Header/Header";
import {BodyWrapper, Card, HorizontalListWrapper, LinkStyled} from "../../Styles.style";
import {Component} from "../MovieComponents/Component";
import useFetch from "../../Utils/useFetch";
import linkGenerate from "../../Utils/linkGenerate";
import {capitalizeFirst} from "../../Utils/capitalizeFirstLetter";
import ThreeDots from "../../Utils/loader";


export const DetailsAboutMovie = (props) => {
    const {data, loading, error} = useFetch(`${props.url}`)
    const [movies, setMovies] = useState([])


    useEffect(() => {
        if (!loading && data) {
            setMovies(data)
        }
    }, [loading])


    const listMovieDetails = Object.entries(movies).map(([key, value], index) => {
        if (typeof (value) === 'object') {
            return <>
                <LinkStyled key={value} to={linkGenerate(key)}><h4>{capitalizeFirst(key)}:</h4></LinkStyled>
                <HorizontalListWrapper>
                    {value.map((component,index) => {
                        return <Component key={index} url={component}/>
                    })}
                </HorizontalListWrapper>
            </>
        }
    })


    return (
        <>
            <Header title={movies.title}/>
            <BodyWrapper>
                <Card>
                    {loading ? <ThreeDots/>: (
                        <>
                            <h1>{movies.title}</h1>
                            <h4>Director:{movies.director}</h4>
                            <h4>Episodes: {movies.episode_id}</h4>
                            <h4>Producer:{movies.producer}</h4>
                            <h4>Release Date:{movies.release_date}</h4>
                            <h4>Opening Crawl:</h4>
                            <p>{movies.opening_crawl}</p>
                            {listMovieDetails}
                        </>)}
                </Card>
            </BodyWrapper>
        </>
    );
}

