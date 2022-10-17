import {useEffect, useState} from "react";
import useFetch from "../../Utils/useFetch";
import {CardMovie} from "../CardMovie/CardMovie";
import {BodyWrapper, CardLoading} from '../../../src/Styles.style'



export const Body = (props) => {
    const {data, loading, error} = useFetch("https://swapi.dev/api/films")
    const [movies, setMovies] = useState([])


    useEffect(() => {
        if (!loading && data) {
            setMovies(data.results)
        }
    }, [loading])

    const movieFilter = (filter) => {
        if (filter) {
            return movies.filter((movie) => movie.title.toLowerCase().includes(filter) || movie.opening_crawl.toLowerCase().includes(filter))
        } else return movies
    }

    const movieCard = movieFilter(props.find)?.map((movie, index) => {
        movie.index = index
        return <CardMovie key={index} movie={movie}/>
    })

    return (
        <BodyWrapper>
            {loading ? <CardLoading>Loading...
                                </CardLoading> : movieCard}
        </BodyWrapper>
    );
}

