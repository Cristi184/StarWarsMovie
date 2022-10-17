import {ImageStyled, InputStyled, InputWrapper, Title} from "../../Styles.style";
import searchIcon from './Assets/search.svg'
import {useEffect, useState} from "react";

export const InputComponent = (props) => {
    const [value, setValue] = useState("")
    const sendValue = () => {
        props.receiveDataFind(value);
    };
    useEffect(()=>{
        sendValue()
    },[value])

    return (
        <InputWrapper>
            <ImageStyled src={searchIcon}/>
            <InputStyled type="text" name="name" onChange={(e)=> setValue(e.target.value)} placeholder="Find"/>
        </InputWrapper>
    );
}

