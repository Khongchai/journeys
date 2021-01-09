import changeStylesOnClick from "../utils/changeStylesOnClick.ts";
import checkIfColumnIsAvailableAtRowX from "../utils/checkIfColumnIsAvailable";

export default function manageEventStartAndEndPosition(eventData: Array<any>)
{

    let allEvents = document.getElementsByClassName("event") as HTMLCollectionOf<HTMLElement>;
    let allEventsLength = allEvents.length;
    let topicPerNode = 3;

    //for managing columns
    let j = 0;
    let monthOffset = 0;

    //for managing rows
    let rowCheck = {
        first: 0,
        second: 0,
        third: 0,
        fourth: 0,
        fifth: 0,
    };

    for (let i = 0; i < allEventsLength; i+=topicPerNode)
    {
        let begin1 = eventData[j].topic1month.from + monthOffset;
        let begin2 = eventData[j].topic2month.from + monthOffset;
        let begin3 = eventData[j].topic3month.from + monthOffset;

        let end1 = eventData[j].topic1month.to + monthOffset;
        let end2 = eventData[j].topic2month.to + monthOffset;
        let end3 = eventData[j].topic3month.to + monthOffset;

        //manage column
        allEvents[i].style.gridColumn = `${begin1} / ${end1}`;
        allEvents[i+1].style.gridColumn = `${begin2} / ${end2}`;
        allEvents[i+2].style.gridColumn = `${begin3} / ${end3}`;

        //manage row
        allEvents[i].style.gridRow = checkIfColumnIsAvailableAtRowX(begin1, end1, rowCheck);
        allEvents[i+1].style.gridRow = checkIfColumnIsAvailableAtRowX(begin2, end2, rowCheck);
        allEvents[i+2].style.gridRow = checkIfColumnIsAvailableAtRowX(begin3, end3, rowCheck);

        //change styling on click
        changeStylesOnClick(allEvents[i]);
        changeStylesOnClick(allEvents[i + 1]);
        changeStylesOnClick(allEvents[i + 2]);

        monthOffset += 12;
        j++;

    }
    //give grid column property for each member of the "event" class based on the topic

}