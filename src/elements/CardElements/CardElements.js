import styled from "styled-components"
import backgroundImage from "./cardBG.svg"

export const CardList = styled.div`
  display: flex;
  padding: 5rem;
  justify-content: center;
  width: 100%;
  flex: 2;
  flex-wrap: wrap;
  @media ${props => props.theme.breakpoints.mobileAndTablet} {
    flex-direction: column;
    align-items: center;
    padding-bottom: 100px;
    justify-content: center;
    padding-left: 0;
    padding-right: 0;
  }
`

export const CardWrapper = styled.article`
  display: flex;
  position: relative;
  flex-direction: column;
  height: 325px;
  width: 288px;
  min-width: 288px;
  padding: 1.5rem;
  margin-right: 5rem;
  margin-bottom: 1.5rem;
  border-radius: 16px;
  background-image: url(${backgroundImage});
  box-shadow: 0rem -2rem 7rem -2.7rem #000;
  border-radius: 22px;
  transition: 0.2s;
  align-items: center;
  :hover {
    transform: translateY(-2rem);
    .headers {
      cursor: pointer;
      background: linear-gradient(
        90deg,
        ${props => props.theme.colors.mainYellow},
        ${props => props.theme.colors.mainMagenta}
      );
      text-shadow: none;
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
  @media ${props => props.theme.breakpoints.mobileAndTablet} {
    margin-left: 0px !important;
    margin-right: 0px !important;
    margin-bottom: 0px !important;
    :not(:first-child) {
      margin-top: -100px;
    }
    :hover {
      ~ .cards {
        transform: translateX(0px);
      }
    }
  }
  h2 {
    color: #fffefe;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    letter-spacing: 1px;
    font-weight: 600;
    font-style: normal;
    opacity: 0.6;
    font-size: 25px;
    margin-top: 0.2rem;
  }
  h4 {
    margin-top: 0.2rem;
    font-weight: 500;
    font-style: normal;
    opacity: 0.9;
    color: #a791d6;
  }
  img {
    width: 125px;
    height: 125px;
    border-radius: 50%;
    max-height: 125px;
    border: #765fa8 solid;
    margin-bottom: 0.5rem;
    object-fit: cover;
  }
  h2,
  h4,
  img {
    -webkit-user-select: none; /* Safari */
    -ms-user-select: none; /* IE 10 and IE 11 */
    user-select: none; /* Standard syntax */
    pointer-events: none;
  }
  background-color: crimson;
`
