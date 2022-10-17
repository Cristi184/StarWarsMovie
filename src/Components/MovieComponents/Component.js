import {Card} from "../../Styles.style";
import useFetch from "../../Utils/useFetch";
import React, {useEffect, useState} from "react";
import {capitalizeFirst} from "../../Utils/capitalizeFirstLetter";
import ThreeDots from "../../Utils/loader";

export const Component = (props) => {
    const {data, loading, error} = useFetch(props.url)
    const [info, setInfo] = useState([])
    const [valueName, setValueName] = useState(false)


    useEffect(() => {
        if (data) {
            setInfo(data)
        }
    }, [loading])

    useEffect(() => {
        verifyPage()
    }, [])



    const verifyPage = () => {
        if (window.location.href.split('/').length === 4) {
            setValueName(true)
        }
    }



    const infoComponentCard = Object.entries(info).map(([key, value], index) => {
        if (typeof (value) !== "object" && key !== "homeworld" && key !== "url") {
            if (key === "name") {
                return (
                    <h2 key={index}>{`${capitalizeFirst(key)}`}:{value.toString()}</h2>
                )
            } else
                return (
                    <p key={index}>{`${capitalizeFirst(key)}`}:{value.toString()}</p>
                )
        }
    })
    const showComponent = () => {
        if (valueName) {
            if (loading) {
                return <p>Loading... </p>
            } else {
                return <p>{`${info.name + " "}`}</p>
            }
        } else return (
            <>
                <Card>
                    {loading ? <ThreeDots/>:infoComponentCard}
                </Card>
            </>
        )
    }


    return (
        <>
            {showComponent()}
        </>
    );
}

