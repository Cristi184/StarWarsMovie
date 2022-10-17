import {Header} from "../Header/Header";
import { Fragment} from "react";
import {BodyWrapper} from "../../Styles.style";
import {Component} from "./Component";


export const MovieComponents = (props) => {
    const {title, urlArray} = props

    const allComponents = urlArray?.map((component, index) => {
        return (<Component key={index} url={component}/>)
    })

    return (
        <Fragment>
            <Header title={title}/>
            <BodyWrapper>
                {allComponents}
            </BodyWrapper>
        </Fragment>
    );
}

