import theme from "../../../../themes/theme";

var activeElem: HTMLElement;

export default function changeStyleOnClick(elem: HTMLElement)
{
    elem.addEventListener("click", () => 
    {
        //if the active element is not the clicked element
        if (activeElem !== elem)
        {
            applyActiveStylings(elem);

            //if there exist another active element, reset its stylings
            if (activeElem) 
            {
                applyInactiveStylings(activeElem);
            }
            
            activeElem = elem;
        }
        else
        {
            applyInactiveStylings(elem);
            activeElem = null;
        }
    });
}

function applyActiveStylings(elem: HTMLElement)
{
    elem.style.minWidth = "16rem";
    elem.style.zIndex = "100";
    elem.style.backgroundColor = theme.colors.mainYellow;
}

function applyInactiveStylings(elem: HTMLElement)
{
    let defaultStylingFromCSSFile_minWidth: string = "3rem";
    let defaultStylingFromCSSFile_zIndex: string = "0";
    let defaultStylingFromCSSFile_color: string = theme.colors.mainMagenta;

    elem.style.minWidth = defaultStylingFromCSSFile_minWidth;
    elem.style.zIndex = defaultStylingFromCSSFile_zIndex;
    elem.style.backgroundColor = defaultStylingFromCSSFile_color;
}
