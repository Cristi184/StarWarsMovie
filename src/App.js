import React, {useEffect, useState} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home} from "./Components/Home/Home";
import useFetch from "./Utils/useFetch";
import {DetailsAboutMovie} from "./Components/DetailsAboutMovie/DetailsAboutMovie";
import {MovieComponents} from "./Components/MovieComponents/MovieComponents";
import linkGenerate from "./Utils/linkGenerate";

export const App = () => {
    const {data, loading, error} = useFetch("https://swapi.dev/api/films")

    const movieLinks = data.results?.map((movie, index) => {
        return (
            <>
                <Route key={index} path={`/${linkGenerate(movie.title)}`}
                       element={<DetailsAboutMovie url={movie.url}/>}/>
                <Route key={index} path={`/${linkGenerate(movie.title)}/Characters`}
                       element={<MovieComponents urlArray={movie.characters} title={`${movie.title}: Characters`}/>}/>
                <Route key={index} path={`/${linkGenerate(movie.title)}/Planets`}
                       element={<MovieComponents urlArray={movie.planets} title={`${movie.title}: Planets`}/>}/>
                <Route key={index} path={`/${linkGenerate(movie.title)}/Starships`}
                       element={<MovieComponents urlArray={movie.starships} title={`${movie.title}: Starships`}/>}/>
                <Route key={index} path={`/${linkGenerate(movie.title)}/Vehicles`}
                       element={<MovieComponents urlArray={movie.vehicles} title={`${movie.title}: Vehicles`}/>}/>
                <Route key={index} path={`/${linkGenerate(movie.title)}/Species`}
                       element={<MovieComponents urlArray={movie.species} title={`${movie.title}: Species`}/>}/>
            </>
        )
    })
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    {movieLinks}
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
