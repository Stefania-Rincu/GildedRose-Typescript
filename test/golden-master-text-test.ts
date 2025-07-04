import { GildedRose } from '../app/gilded-rose';
import { Item, itemNames } from '../app/item';

const items: Array<Item> = [
    new Item(itemNames.WhateverItem, 11, 10),
    new Item(itemNames.WhateverItem, 2, 2),
    new Item(itemNames.WhateverItem, 0, 10),
    new Item(itemNames.Sulfuras, 1, 80),
    new Item(itemNames.AgedBrie, 4, 10),
    new Item(itemNames.AgedBrie, 4, 49),
    new Item(itemNames.AgedBrie, 0, 10),
    new Item(itemNames.BackstagePasses, 20, 20),
    new Item(itemNames.BackstagePasses, 10, 20),
    new Item(itemNames.BackstagePasses, 5, 20),
    new Item(itemNames.BackstagePasses, 2, 20),
    new Item(itemNames.ConjuredWhateverItem, 3, 20),
    new Item(itemNames.ConjuredAgedBrie, 4, 20),
    new Item(itemNames.ConjuredBackstagePasses, 5, 20),
];

let gildedRose = new GildedRose(items);

gildedRose.updateQuality();
gildedRose.updateQuality();
gildedRose.updateQuality();

for (let idx: number = 0; idx < gildedRose.items.length; idx++) {
    console.log(
        `${gildedRose.items[idx].name} - sellIn ${gildedRose.items[idx].sellIn} - quality ${gildedRose.items[idx].quality}`,
    );
}
