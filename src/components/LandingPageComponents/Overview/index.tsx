import React, {useEffect, FC} from "react";
import {OverviewWrapper} from "../../../elements";
import OverviewDescription from "./OverviewDescription";
import OverviewPictureView from "./OverviewPictureView";

export default function Overview(props: any)
{
    const variables = {
        pictureID: props.requestedOverviewData.pictureID
    };
    return(
        <OverviewWrapper>
            <OverviewPictureView requestedOverviewData={props.requestedOverviewData} variables={variables}/>
            <OverviewDescription requestedOverviewData={props.requestedOverviewData} />
        </OverviewWrapper>
    )
}