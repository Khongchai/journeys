import React, {useEffect, FC} from "react";
import {OverviewWrapper} from "../../../elements";
import OverviewDescription from "./OverviewDescription";
import OverviewPictureView from "./OverviewPictureView";

export default function Overview(props: any)
{
    return(
        <OverviewWrapper>
            <OverviewPictureView requestedOverviewData={props.requestedOverviewData} />
            <OverviewDescription requestedOverviewData={props.requestedOverviewData} />
        </OverviewWrapper>
    )
}