export interface Item{
    title: string,
    type: string,
    value?: any,
    parentAnswer?: string,
    options?: string[],
    childItems?: Item[],
}