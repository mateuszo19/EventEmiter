import {Restaurant} from "./restaurant";
import {RestaurantEvents, RestaurantTableChangeEventCallback} from "./types/events";
const megaRestaurant = new Restaurant();
let tablesCount: number = 25;



megaRestaurant
    .on(RestaurantEvents.Open, () => console.log('Otwarto restaurację.'))
    .on(RestaurantEvents.Close, () => console.log('Zamknięto restaurację.'))
    .on(RestaurantEvents.TableCountUpdate, (change => {
        tablesCount += change;
        console.log(`Dostepnych stolików ${tablesCount}.`);
    }) as RestaurantTableChangeEventCallback);

megaRestaurant.open(); // "Otwarto restaurację."

megaRestaurant.takeTableWithoutReservation(); // "Dostepnych stolików: 24."

megaRestaurant.takeTableWithoutReservation(); // "Dostepnych stolików: 23."

megaRestaurant.reserveTable(); // "Dostepnych stolików: 22."

megaRestaurant.cancelTableReservation(); // "Dostepnych stolików: 23."

megaRestaurant.reserveTable(); // "Dostepnych stolików: 22."

megaRestaurant.reserveTable(); // "Dostepnych stolików: 21."

megaRestaurant.takeTableWithoutReservation(); // "Dostepnych stolików: 20."

megaRestaurant.takeTableWithoutReservation(); // "Dostepnych stolików: 19."

megaRestaurant.cleanupTable(); // "Dostepnych stolików: 20."

megaRestaurant.close(); // "Zamknięto restaurację."

