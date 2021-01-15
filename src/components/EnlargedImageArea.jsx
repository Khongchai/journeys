import React from "react";
import {EnlargedImageAreaWrapper} from "../elements";

export const EnlargedImageArea = (props) =>
{
    return(
        <EnlargedImageAreaWrapper id="image-area" onClick={(e)=>{e.target.style.display = "none";}}>
            <img src={props.imageSRC}/>
        </EnlargedImageAreaWrapper>
    )
}