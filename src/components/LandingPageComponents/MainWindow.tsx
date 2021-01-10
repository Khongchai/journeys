import React, {useState} from "react";
import {LandingPageWrapper} from "../../elements";
import Overview from "./Overview";
import Timeline from "./Timeline/Timeline";
import {OverviewDataRequest} from "./sharedInterfaces";

export const MainWindow = () => 
{
    //refactor to pic one randomly...maybe
    const initialValue: OverviewDataRequest = {
        year: 1873, 
        topic: "Diary",
        excerpt: "This year was the year the composer began writing his diary. Not much remained for us readers as most were burned by the composer himself.",
        pictureID: "b95608f1-ec2b-5aae-adf7-c380fca9a073",
    }
    const [requestedOverviewData, setRequestedOverviewData] = useState<OverviewDataRequest>(initialValue);
    return(
        <LandingPageWrapper>
            <Overview requestedOverviewData={requestedOverviewData}/>
            <Timeline setRequestedOverviewData={setRequestedOverviewData}/>
        </LandingPageWrapper>
    );
}