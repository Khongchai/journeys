import setBlackBackgroundHeight from "./setBlackBackgroundHeight";

let navbarHeight: number; 

export default function hideTimeline(setToggle: Function, toggle: boolean)
{
    let text: HTMLElement = document.getElementById("hide-timeline-text");
    let timelineWrapper: HTMLElement = document.getElementById("timeline-wrapper");
    let blackBackground: HTMLElement = document.getElementById("black-background");
    let transitionVal: number = 15;

    //wait time should correspond to the transition value
    let waitTime: number = 150;

    if (toggle)
    {
        text.innerHTML = "Show Timeline";

        timelineWrapper.style.opacity = "0";
        timelineWrapper.style.transition = `opacity .${transitionVal}s`;

        blackBackground.style.opacity = "0";
        blackBackground.style.transition = `opacity .${transitionVal}s`;

        timelineWrapper.style.pointerEvents = "none";

        setToggle(false);   
    }
    else
    {
        text.innerHTML = "Hide Timeline";

        timelineWrapper.style.opacity = "1";
        timelineWrapper.style.pointerEvents = "";

        blackBackground.style.transition = "";
        blackBackground.style.opacity = "1";

        timelineWrapper.style.pointerEvents = "auto";
        
        setToggle(true);   
    }
}