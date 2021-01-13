export default function setBlackBackgroundHeight()
{
    //get the parents height minus the sibling.
    //cannot get height directly because of overflow
    let eventsWrapper: HTMLElement = document.getElementById("timeline-wrapper");
    let yearIndicator: HTMLElement = document.getElementById("year-indicator");
    if (eventsWrapper)
    {
        let eventsComputedStyle = window.getComputedStyle(eventsWrapper);
        //let yearIndicatorComputedStyle = window.getComputedStyle(yearIndicator);
        let blackBackground: HTMLElement = document.getElementById("black-background");
        let windowWidth: number = document.documentElement.clientWidth;
        let currentBreakpoints: number = 600;
        let extraHeight: number = 2;
        //let yearIndicatorHeight = parseInt(yearIndicatorComputedStyle.getPropertyValue("height"));
    
        if (windowWidth < currentBreakpoints)
        {
            let navbarHeight = parseInt(window.getComputedStyle(document.getElementById("navbar-wrapper")).getPropertyValue("height"));
            blackBackground.style.height = `${(parseInt(eventsComputedStyle.getPropertyValue("height")) + navbarHeight + extraHeight)}px`;
        }
        else
        {
            blackBackground.style.height = `${parseInt(eventsComputedStyle.getPropertyValue("height"))}px` ;
        }
    }
}