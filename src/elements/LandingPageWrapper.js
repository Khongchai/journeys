import styled from "styled-components";
import zIndexPriority from "../themes/z-indexPriority";

export const LandingPageWrapper = styled.div`
    overflow-x: hidden;
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
    @media ${props => props.theme.breakpoints.mobileAndTablet}
    {
        flex-direction: column;
    }
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
    flex: 0.8;
    display: flex;
    flex-direction: column;
    min-width: 1100px;
    position: relative;
    @media ${props => props.theme.breakpoints.mobileAndTablet}
    {
        margin-bottom: 5rem;
    }

    overflow: scroll;
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

    transition: flex .4s;
`;

export const EventsWrapper = styled.div`
    width: 100%;
    flex: 1 ;
    display: grid;
    grid-template-columns: repeat(108, minmax(1px, 1fr));
    grid-template-rows: 0.23fr 0.23fr 0.23fr 0.23fr ;
    row-gap: 0.5rem;
    column-gap: 0.1rem;
    overflow-x: hidden;
    cursor: grab;

    transition: opacity .3s;
    background-color: black;
    color: ${props => props.theme.colors.mainBlack};

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
        min-width: 3rem;
        border-radius: 2px;
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
            cursor: pointer;
            background-color: ${props=> props.theme.colors.mainYellow} !important;
        }
        
        background-color: ${props=>props.theme.colors.mainMagenta};
        padding: 0.4rem;

        -webkit-transition: min-width .3s ease;
        transition:  .3s ease;

        p
        {
            user-select: none;
        }
   }
    h5
    {
        grid-column: span 12;
    }
`;

export const YearIndicator = styled.div`
    flex: 0.1;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(9, minmax(auto, 1fr));
    h5
    {
        height: fit-content;
    }
`;

export const HideTimeline = styled.div`
    position: absolute;
    right: 5px;
    bottom: 5.2rem;
    z-index: ${zIndexPriority.hideTimelineText};
    color: ${props=>props.theme.colors.mainMagenta};
    cursor: pointer;

    display: none;
    @media ${props=>props.theme.breakpoints.mobileAndTablet}
    {
        display: block;
    }
`;


