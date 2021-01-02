import styled from "styled-components";

export const LandingPageWrapper = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 5rem;
    height: 100vh;
    @media ${props => props.theme.breakpoints.mobileAndTablet}
    {
        margin-left: 0 !important;
    }
`;

export const Overview = styled.div`
    display: flex;
    width: 100%;
    flex: 2;
`;  

export const OverviewPictureView = styled.div`
    flex: 2 1;
    justify-content: center;
    align-items: center;
`;

export const OverviewDescription = styled.div`
    flex: 1.3 0.65;
`;

export const TimelineWrapper = styled.div`
    width: 100%;
    flex: 1 1;
    display: grid;
    grid-template-columns: repeat(108, minmax(1px, 1fr));
    grid-template-rows: 0 0.15fr 0.15fr 0.15fr 0.15fr 0.15fr auto;
    row-gap:0;
    opacity: 0.6;
    
    :hover
    {
        opacity: 1 !important;
    }
    transition: opacity .3s;
    background-color: black;
    color: ${props => props.theme.colors.mainBlack};
    grid-gap: 0.5rem;

    span
    {
        display: flex;
        justify-content: center;
        flex-direction: column;
        font-size: 0.95rem;
        text-overflow: ellipsis !important;
        white-space: nowrap;
        overflow: hidden;
        margin-left: 0.09rem;
        margin-right: 0.09rem;
        min-width: 2.275rem;
        ::-webkit-scrollbar
        {
            display: none;
        }
        ::-webkit-scrollbar-track
        {
            display: none;
        }

        ::-webkit-scrollbar-thumb
        {
            display: none;
        }
        :hover
        {
            min-width: 16rem !important;
            cursor: pointer;
            z-index: 100;
            background-color: ${props=> props.theme.colors.mainYellow}
        }
        background-color: ${props=>props.theme.colors.mainMagenta};
        padding: 0.4rem;

        -webkit-transition: min-width .3s ease;
        transition:  min-width .3s ease;
   }
    h5
    {
        grid-column: span 12;
    }


`;



