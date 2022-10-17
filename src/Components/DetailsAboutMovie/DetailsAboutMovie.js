import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {Header} from "../Header/Header";
import {BodyWrapper, Card, HorizontalListWrapper} from "../../Styles.style";
import {Component} from "../MovieComponents/Component";
import useFetch from "../../Utils/useFetch";
import linkGenerate from "../../Utils/linkGenerate";
import {capitalizeFirst} from "../../Utils/capitalizeFirstLetter";


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
                <Link key={value} to={linkGenerate(key)}><h4>{capitalizeFirst(key)}:</h4></Link>
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
                    {loading ? <p>Loading...</p> : (
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

