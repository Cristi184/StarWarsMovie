import styled from "styled-components"


export const Card = styled.div`
  width: 500px;
  background-color: white;
  padding: 25px;
  border-radius: 25px;
  margin: 0 10px;
`

export const CardLoading = styled.div`
  width: 500px;
  height: 210px;
  background-color: white;
  padding: 25px;
  border-radius: 25px;
  margin: 0 10px;
  text-align: center;
`

export const BodyWrapper = styled.div`
  background-color: black;
  height: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 20px 0px;
  gap: 20px;
  width: 100%;
  justify-content: center;
  align-items: center;
  min-height: 100%;
`

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 350px;
`

export const Title = styled.h1`
  margin: 0;
  text-align: center;
  padding-top: 100px;
  color: white
`

export const HeaderBackground = styled.div`
  min-height: 100%;
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-position: 20% 40%;
`

export const HorizontalListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: flex-start;
`

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  background-color:white;
  width: 250px;
  margin: 50px calc(50% - 125px);
  border-radius: 25px;
`

export const ImageStyled = styled.img`
  width: 20px;
  height: 20px;
  padding: 10px;
`
export const InputStyled = styled.input`
  padding: 10px;
  width: 80%;
  border: 0px;
  min-width: 150px;

  [type=submit] {
    cursor: pointer;
  }

  &before {
    border:none;
  }
  &focus {
    border:none;
  }
`