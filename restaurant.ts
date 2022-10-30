import {EventEmitter} from 'events'
import {RestaurantEvent, RestaurantEvents, RestaurantTableChangeEvent} from "./types/events";

export class Restaurant extends EventEmitter {
    /**
     * Otwarcie restauracji.
     */
    open(): void {
        (this.emit as RestaurantEvent)(RestaurantEvents.Open)
    }

    /**
     * Zamknięcie restauracji.
     */
    close(): void {
        (this.emit as RestaurantEvent)(RestaurantEvents.Close)
    }

    private hangeTableCount = (incDec: number) => {
        (this.emit as RestaurantTableChangeEvent)(RestaurantEvents.TableCountUpdate, incDec);
    }

    /**
     * Stolik został zarezerowany na teraz.
     * Traktuj to jako po prostu 1 stolik mniej.
     */
    reserveTable(): void {
        this.hangeTableCount(-1);
    }

    /**
     * Odwołano rezerwację na stolik.
     * Traktuj to jako po prostu 1 stolik więcej.
     */
    cancelTableReservation(): void {
        this.hangeTableCount(1);
    }

    /**
     * Ktoś wziął stolik bez rezerwacji.
     */
    takeTableWithoutReservation(): void {
        this.hangeTableCount(1);
    }

    /**
     * Stolik się popsuł, odpadła noga :/
     */
    markTableAsBroken(): void {
        this.hangeTableCount(-1);
    }

    /**
     * Ktoś skończył jeść, czyścimy stolik i wraca do użytku.
     */
    cleanupTable(): void {
        this.hangeTableCount(1);
    }
}

