import styled from "styled-components";



export const CardList = styled.div`
    display: flex;
    padding: 5rem;
    justify-content: center;
    width: 100%;
    flex:2;
    @media ${props => props.theme.breakpoints.mobileAndTablet}
    {
        flex-direction: column;
    }
`;

export const CardWrapper = styled.article`
    display: flex;
    position: relative;
    flex-direction: column;
    height: 300px;
    width: 350px;
    min-width: 350px;
    padding: 1.5rem;

    border-radius: 16px;
    background-color: ${props=> props.theme.colors.mainBlack};
    box-shadow: -1rem 0rem 3rem #000;
    transition: .2s;
    :hover
    {
        transform: translateY(-1rem);
        ~.cards
        {
            transform: translateX(130px);
        }
        .headers
        {
            cursor: pointer;
            background: linear-gradient(90deg, ${props=>props.theme.colors.mainPurple}, ${props=>props.theme.colors.mainMagenta});
            text-shadow: none;
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
    }
    :not(:first-child)
    {
        margin-left: -190px;
    }
    @media ${props => props.theme.breakpoints.mobileAndTablet}
    {
        height: 200px;
        width: 200px;
        min-width: 200px;
        :not(:first-child)
        {
            margin-left: -20px;
        }
        :hover
        {
            ~.cards
            {
                transform: translateX(30px);
            }
        }
    }
    
    
`;

export const CardHeader = styled.header`
    font-size: 2rem;
    text-align: center;
    transition: background .2s;
    @media ${props => props.theme.breakpoints.mobileAndTablet}
    {
        background: linear-gradient(90deg, ${props=>props.theme.colors.mainPurple}, ${props=>props.theme.colors.mainMagenta});
        text-shadow: none;
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-size: 1.5rem;
    }
`;
