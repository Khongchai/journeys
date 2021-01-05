export default class ComputeMouseDragDirection
{
    private static instance: ComputeMouseDragDirection;

    private beginPos: number;
    private dragPos: number;
    private dragDirection: string;
    private monitor: ReturnType<typeof setTimeout>;

    public static getInstance(): ComputeMouseDragDirection
    {
        if (!ComputeMouseDragDirection.instance)
        {
            ComputeMouseDragDirection.instance = new ComputeMouseDragDirection();
        }
        
        return ComputeMouseDragDirection.instance;
    }

    public setBeginPos(beginPos: number)
    {
        this.beginPos = beginPos;
    }

    public setDragPos(dragPos: number)
    {
        this.dragPos = dragPos;
        this.monitorChangeInDirection();
    }

    public getAllProps(): {dragDirection: string, dragPos: number, beginPos: number}
    {
        return {
            dragDirection: this.dragDirection,
            dragPos: this.dragPos,
            beginPos: this.beginPos,
        }
    }

    public getDragDirection(): string
    {
        if (this.dragPos > this.beginPos)
        {
            this.dragDirection = "RIGHT";
        }
        else if (this.dragPos < this.beginPos)
        {
            this.dragDirection = "LEFT";
        }
        return this.dragDirection;
    }

    private monitorChangeInDirection()
    {   
        clearTimeout(this.monitor);

        this.monitor = setTimeout(() => {
            this.setBeginPos(this.dragPos);
        },1);
        
    }

}


