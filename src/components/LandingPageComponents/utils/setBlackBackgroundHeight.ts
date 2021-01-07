export default function setBlackBackgroundHeight()
{
    let eventsComputedStyle = window.getComputedStyle(document.getElementById("events-wrapper"));
    let blackBackground: HTMLElement = document.getElementById("black-background");
    let windowWidth: number = document.documentElement.clientWidth;
    let currentBreakpoints: number = 600;

    if (windowWidth < currentBreakpoints)
    {
        let navbarHeight = parseInt(window.getComputedStyle(document.getElementById("navbar-wrapper")).getPropertyValue("height"));
        blackBackground.style.height = `${parseInt(eventsComputedStyle.getPropertyValue("height")) + navbarHeight}px`;
    }
    else
    {
        blackBackground.style.height = eventsComputedStyle.getPropertyValue("height");
    }
   
}