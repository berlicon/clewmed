export interface Item{
    title: string,
    type: string,
    value?: string,
    parentAnswer?: string,
    options?: string[],
    childItems?: Item[],
}