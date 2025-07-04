import { Item, GildedRose } from '../app/gilded-rose';

const items: Array<Item> = [
    new Item('Whatever Item', 11, 10),
    new Item('Whatever Item', 2, 2),
    new Item('Whatever Item', 0, 10),
    new Item('Sulfuras, Hand of Ragnaros', 1, 80),
    new Item('Aged Brie', 4, 10),
    new Item('Aged Brie', 4, 49),
    new Item('Aged Brie', 0, 10),
    new Item('Backstage passes to a TAFKAL80ETC concert', 20, 20),
    new Item('Backstage passes to a TAFKAL80ETC concert', 10, 20),
    new Item('Backstage passes to a TAFKAL80ETC concert', 5, 20),
    new Item('Backstage passes to a TAFKAL80ETC concert', 2, 20)
]

let gildedRose = new GildedRose(items);

gildedRose.updateQuality();
gildedRose.updateQuality();
gildedRose.updateQuality();

for (let idx: number = 0; idx < gildedRose.items.length; idx++) {
    console.log(`${gildedRose.items[idx].name} - sellIn ${gildedRose.items[idx].sellIn} - quality ${gildedRose.items[idx].quality}`);
}