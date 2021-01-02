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
    flex: 1.3 1.3;
    display: grid;
    grid-template-columns: repeat(9, minmax(auto, 1fr));
    opacity: 0.6;
    :hover
    {
        opacity: 1 !important;
    }
    transition: opacity .3s;


`;

export const YearWrapper = styled.div`
    grid-column: span 1;
    width: 100%;
    height: 100%;
    background-color: black;
    color: ${props => props.theme.colors.mainBlack};

    display: grid;
    grid-template-columns: 1fr 1fr 1fr ;
    grid-template-rows: 0.175fr 0.175fr 0.175fr 0.175fr auto;
    row-gap: 1.4rem;

    span
    {
        background-color: ${props=>props.theme.colors.mainMagenta};
        width: "fit-content";
        min-width: 0;
        min-height: 0;
        overflow: auto;
    }

`;