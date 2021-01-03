export default function hideTimeline(text: HTMLElement, setToggle: any, toggle: boolean)
{
    let timelineWrapper: HTMLElement = document.getElementById("timeline-wrapper");

    if (toggle)
    {
        text.innerHTML = "Show Timeline";
        timelineWrapper.style.flex = "0";
        setToggle(false);

    }
    else
    {
        text.innerHTML = "Hide Timeline";
        timelineWrapper.style.flex = "0.8";
        setToggle(true);

    }

}