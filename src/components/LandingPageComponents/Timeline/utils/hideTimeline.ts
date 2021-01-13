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

        timelineWrapper.style.height = "0";
        timelineWrapper.style.transition = `height .${transitionVal}s`;

        blackBackground.style.height = "0";
        blackBackground.style.transition = `height .${transitionVal}s`;

        setToggle(false);   
    }
    else
    {
        text.innerHTML = "Hide Timeline";

        timelineWrapper.style.height = "30%";
        
        //only remove blackbackgrond's transition because user might scroll
        //immediately after the navbar gets back to the original value.
        //and there is no need to remove timelinewrapper's transition value
        blackBackground.style.transition = "";
        setTimeout(()=>
        {
            setBlackBackgroundHeight();
        }, waitTime);
        
        setToggle(true);   
    }
}