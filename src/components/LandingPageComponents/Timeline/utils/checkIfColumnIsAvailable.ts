export default function checkIfColumnIsAvailableAtRowX(beginVal: number, endVal: number, rowCheck: {
                                                                                    first: number,
                                                                                    second: number,
                                                                                    third: number,
                                                                                    fourth: number,
                                                                                    fifth: number,})
{
    let beginningPosition;
    if (beginVal > rowCheck.first)
    {
        beginningPosition = "1";
        rowCheck.first = endVal;
    }
    else if (beginVal > rowCheck.second)
    {
        beginningPosition = "2";
        rowCheck.second = endVal;
    }
    else if (beginVal > rowCheck.third)
    {
        beginningPosition = "3";
        rowCheck.third = endVal;
    }
    else if (beginVal > rowCheck.fourth)
    {
        beginningPosition = "4";
        rowCheck.fourth = endVal;
    }
    else
    {
        beginningPosition = "5";
        rowCheck.fifth = endVal;
    }

    return beginningPosition;
}
