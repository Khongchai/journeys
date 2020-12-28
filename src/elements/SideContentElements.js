import styled from "styled-components";

export const ContentBarWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: fit-content;
    position: -webkit-sticky;
    position: sticky;
    grid-column: 14/auto;
    padding-top: 5.5rem;
    top: 0;
    a
    {
        text-decoration: none;
        display: block;
        color: black;
        font-weight: normal;
        margin-top: 3rem;
        :hover
        {
            color: ${props => props.theme.colors.mainMagenta} !important;
        }
    }
    @media ${props => props.theme.breakpoints.mobileAndTablet}
    {
        display: none !important;
    }
`;

export const RunningLine = styled.span`
    position: absolute;
    height: 1rem;
    left: -1.6rem;
    width: 0.3rem;
    background-color: ${props => props.theme.colors.mainMagenta};
    top: -20px;
    transition: .1s;
`;
