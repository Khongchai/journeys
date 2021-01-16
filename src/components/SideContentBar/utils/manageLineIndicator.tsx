export default function manageLineIndicator()
{
    setTimeout(()=>
    {
        let allActiveElements: HTMLCollectionOf<Element> = document.getElementsByClassName("active");
        if (allActiveElements.length > 0)
        {
        
            let lineIndicator: HTMLElement = document.getElementById("line-indicator");
            let lineIndicatorHeight: number = getHeightOfAllActiveElements(allActiveElements);

            let firstParentPadding: number = getFirstParentPadding(allActiveElements[0].parentElement);
            let lineIndicatorPosition: number = allActiveElements[0].getBoundingClientRect().y ;
        
            lineIndicator.style.top = `${lineIndicatorPosition}px`;
            lineIndicator.style.height = `${lineIndicatorHeight - firstParentPadding}px`;

        }
    }, 110);  
}

function getHeightOfAllActiveElements(allActiveElements: HTMLCollectionOf<Element>): number
{
    //if the section has subsections, take its height
    let allHeight: number = 0;
    for (let elem of allActiveElements)
    {
        allHeight += parseInt(window.getComputedStyle(elem.parentElement).getPropertyValue("height"));
    }
    return allHeight;
}


function getFirstParentPadding(parentElem: HTMLElement): number
{
    let padding = parseInt(window.getComputedStyle(parentElem).getPropertyValue("padding"));
    //get padding of only the top element
    return padding;
}