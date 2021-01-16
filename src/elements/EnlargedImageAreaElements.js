import styled from "styled-components";
import zIndexPriority from "../themes/z-indexPriority";

export const EnlargedImageAreaWrapper = styled.div`
    position: fixed;
    background-color: black;
    display: none;
    background:rgba(0,0,0,0.7);
    z-index: ${zIndexPriority.EnlargedImageArea};
    cursor: pointer;
    width: 100%;
    height: 100vh;
    img
    {
        width: 80%;
        user-select: none;
        pointer-events: none;
    }
    overflow: scroll;

    //for when this becomes visible
    place-items: center;

`;