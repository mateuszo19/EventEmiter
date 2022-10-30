export enum RestaurantEvents{
    Open = 'open',
    Close = 'close',
    TableCountUpdate = 'tableCountUpdate'
}

export type RestaurantEvent  = (eventName: RestaurantEvents) => boolean;
export type RestaurantTableChangeEvent = (eventName: RestaurantEvents.TableCountUpdate, incDec:number) => boolean;
export type RestaurantTableChangeEventCallback = (incDec: number) => void;