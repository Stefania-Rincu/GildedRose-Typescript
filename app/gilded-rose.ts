import { Item, itemNames } from '../app/item';

export class GildedRose {
    items: Array<Item>;

    constructor(items: Item[] = [] as Array<Item>) {
        this.items = items;
    }

    updateQuality(): Item[] {
        for (let i: number = 0; i < this.items.length; i++) {
            // If the item is 'Sulfuras', it should not update anything
            if (this.items[i].name.includes('Sulfuras')) continue;

            // Decrease sellIn by 1
            this.items[i].sellIn -= 1;

            // If the item is 'Backstage passes' and the sellIn has expired, set quality to 0 and skip
            if (
                this.items[i].name.includes(itemNames.BackstagePasses) &&
                this.items[i].sellIn <= 0
            ) {
                this.items[i].quality = 0;
                continue;
            }

            // Define sign to illustrate increasing or decreasing depending on product type
            const changeBySign: number =
                !this.items[i].name.includes(itemNames.AgedBrie) &&
                !this.items[i].name.includes(itemNames.BackstagePasses)
                    ? -1
                    : 1;
            // Define weights to increase/decrease quality for items that are not a Backstage pass
            const weightNotBackstagePass: number =
                !this.items[i].name.includes(itemNames.BackstagePasses) &&
                this.items[i].sellIn <= 0
                    ? 2
                    : 1;
            // Define weights to increase/decrease quality for items that are a Backstage pass
            const weightBackstagePass: number =
                this.items[i].name.includes(itemNames.BackstagePasses) &&
                this.items[i].sellIn <= 5
                    ? 3
                    : this.items[i].name.includes(itemNames.BackstagePasses) &&
                        this.items[i].sellIn <= 10
                      ? 2
                      : 1;
            // Define the weight
            const weight: number = this.items[i].name.includes(
                itemNames.BackstagePasses,
            )
                ? weightBackstagePass
                : weightNotBackstagePass;
            // Define final weight
            const finalWeight: number =
                this.items[i].name.includes('Conjured') && changeBySign === -1
                    ? weight * 2
                    : weight;

            // If quality is lower or equal then 0 and it should be decreased, don't do anything
            if (
                (this.items[i].quality <= 0 ||
                    this.items[i].quality - finalWeight <= 0) &&
                changeBySign === -1
            ) {
                this.items[i].quality = 0;
                continue;
            }

            // If quality is greater or equal then 50 and it should be increased, don't do anything
            if (
                (this.items[i].quality >= 50 ||
                    this.items[i].quality + finalWeight >= 50) &&
                changeBySign === 1
            ) {
                this.items[i].quality = 50;
                continue;
            }

            // Update quality
            this.items[i].quality += changeBySign * finalWeight;
        }
        return this.items;
    }
}
