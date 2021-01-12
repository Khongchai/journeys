import styled from "styled-components";
import zIndexPriority from "../themes/z-indexPriority";
import React from "react";
import Img from "gatsby-image";

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

export const OverviewWrapper = styled.div`
    display: flex;
    width: 100%;
    flex: 1.6;
    padding-top: 9rem;
    padding-right: 7rem;
    padding-left: 5.5rem;
    @media ${props => props.theme.breakpoints.tablet}
    {
        padding-top: 2rem !important;
        padding-left: 1rem !important;
        padding-right: 1rem !important;
        flex-direction: column;
    }
`;  

export const OverviewPictureViewWrapper = styled.div`
    flex: 2 1;
    flex-direction: column;
    align-items: center;
    display: flex;
    @media ${props => props.theme.breakpoints.tablet}
    {
        justify-content: center;
    }
`;

export const StyledGatsbyImg = styled(props => <Img {...props}/>)`
    border-radius: 270px; 
    max-width: 600px; 
    max-height: 300px; 
    flex: 0.5; 
    overflow: hidden; 
    object-fit: cover;
    @media ${props => props.theme.breakpoints.mobileAndTablet}
    {
        max-height: 130px;
    }
`;


export const OverviewDescriptionWrapper = styled.div`
    flex: 1.3 0.65;
    display: flex;
    flex-direction: column;
    a
    {
        margin-bottom: 1rem;
        margin-top: 1rem;
        color: ${props=>props.theme.colors.mainMagenta};
    }
    @media ${props => props.theme.breakpoints.mobileAndTablet}
    {
        p
        {
            font-size: 0.8rem;
        }

        h1
        {
            margin-top: 1rem;
            font-size: medium;
        }
    }
`;


export const TimelineWrapper = styled.div`
    flex: 1;
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
`;

export const EventsWrapper = styled.div`
    width: 100%;
    flex: 1;
    display: grid;
    grid-template-columns: repeat(108, minmax(1px, 1fr));
    grid-template-rows: 0.23fr 0.23fr 0.23fr 0.23fr ;
    row-gap: 0.5rem;
    column-gap: 0.1rem;
    overflow-x: hidden;
    cursor: grab;

    transition: opacity .3s;
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
        min-width: 2.2rem;
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

        @media ${props=>props.theme.breakpoints.mobileAndTablet}
        {
            font-size: 0.80rem !important;
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
    color: ${props=>props.theme.colors.mainYellow};
    cursor: pointer;

    display: none;
    @media ${props=>props.theme.breakpoints.mobileAndTablet}
    {
        display: block;
    }
`;

export const BlackBackground = styled.div`
    background-color: ${props=>props.theme.colors.mainBlack};
    position: fixed;
    width: 100%;
    bottom: 0;
    z-index: ${zIndexPriority.BlackBackground};
    pointer-events: none;
    transition: height.4s;
    @media ${props=>props.theme.breakpoints.mobileAndTablet}
    {
        display: absolute !important;
    }
`;