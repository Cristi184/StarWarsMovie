import {Header} from "../Header/Header";
import {Body} from "../Body/Body";
import React, {Fragment} from "react";
import {useState} from "react";


export const Home = () => {
    const [valueFind, setValueFind] = useState('')
    const receivedData = (data) => {
        setValueFind(data);
    };
    return (
        <Fragment>
            <Header title={"Star Wars Movies"} receiveDataFind={receivedData}/>
            <Body find={valueFind}/>
        </Fragment>
    );
}

