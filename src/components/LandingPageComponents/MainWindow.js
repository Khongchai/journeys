import React from "react";
import {LandingPageWrapper, Overview, OverviewDescription, OverviewPictureView} from "../../elements";
import Timeline from "./Timeline";

export const MainWindow = () => 
{

    return (
    <LandingPageWrapper>
        <Overview>
            <OverviewPictureView>Overview Picture view</OverviewPictureView>
            <OverviewDescription>Overview Description</OverviewDescription>
        </Overview>
        <Timeline>Timeline</Timeline>
    </LandingPageWrapper>
    );
}