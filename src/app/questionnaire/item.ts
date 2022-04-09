export interface Item{
    title: string,
    type: string,
    parentAnswer?: string,
    options?: string[],
    childItems?: Item[],
}