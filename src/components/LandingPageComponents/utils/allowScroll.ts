export default function allowScroll(elem: HTMLElement): boolean
{
    let elemWidth: number = parseInt(window.getComputedStyle(elem).getPropertyValue("width"));
    let elemAbsolutePosition: number = elem.getBoundingClientRect().left + window.scrollX;
    console.log(elemAbsolutePosition);
    return true;
}