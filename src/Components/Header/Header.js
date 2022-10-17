import BackgroundHeader from './Assets/star_wars_header.jpg'
import {InputComponent} from "../InputComponent/InputComponent";
import {HeaderBackground, HeaderWrapper, Title} from "../../Styles.style";

export const Header = (props) => {
    const receivedData = (data) => {
        props.receiveDataFind(data)
    };

    return (
        <HeaderWrapper>
            <HeaderBackground img={BackgroundHeader}>
                <Title>{props.title}</Title>
                {window.location.href === "http://localhost:3000/" && <InputComponent receiveDataFind={receivedData}/>}
            </HeaderBackground>
        </HeaderWrapper>
    );
}

