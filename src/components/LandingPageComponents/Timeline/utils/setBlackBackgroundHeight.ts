export default function setBlackBackgroundHeight()
{
    let eventsWrapper: HTMLElement = document.getElementById("events-wrapper");
    if (eventsWrapper)
    {
        let eventsComputedStyle = window.getComputedStyle(eventsWrapper);
        let blackBackground: HTMLElement = document.getElementById("black-background");
        let windowWidth: number = document.documentElement.clientWidth;
        let currentBreakpoints: number = 600;
        let extraHeight: number = 2;
    
        if (windowWidth < currentBreakpoints)
        {
            let navbarHeight = parseInt(window.getComputedStyle(document.getElementById("navbar-wrapper")).getPropertyValue("height"));
            blackBackground.style.height = `${parseInt(eventsComputedStyle.getPropertyValue("height")) + navbarHeight + extraHeight}px`;
        }
        else
        {
            blackBackground.style.height = eventsComputedStyle.getPropertyValue("height");
        }
    }
}