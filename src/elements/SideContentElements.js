import styled from "styled-components";

export const ContentBarWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    position: -webkit-sticky;
    position: sticky;
    grid-column: 14/auto;
    padding-top: 3rem;
    top: 0;
    width: max-content;
    padding-left: 30px;
    overflow-y: visible;
    min-width: 200px;

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
    a
    {
        text-decoration: none;
        display: block;
        color: black;
        font-weight: normal;
        font-size: 1rem;
        :hover
        {
            color: ${props => props.theme.colors.mainMagenta} !important;
        }
    }
    @media ${props => props.theme.breakpoints.mobileAndTablet}
    {
        display: none !important;
    }
    .subsection-anchor
    {
        margin-top: 0.6rem;
        //make sure the indent is the same as the indented-topic class + 1
        text-indent: 2.4rem;
        font-size: 0.8rem;
        position: relative;
        left: 1rem;
    }
    .indented-topic
    {
        text-indent: 1.4rem;
    }
`;

export const RunningLine = styled.span`
    position: absolute;
    height: 1rem;
    width: 0.3rem;
    background-color: ${props => props.theme.colors.mainMagenta};
    top: -20px;
    transition: top .15s ease-out, height .05s;
    border-radius: 3px;
    left: 0;
`;
