export class Item {
    name: string;
    sellIn: number;
    quality: number;

    constructor(name: string, sellIn: number, quality: number) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
}

export class GildedRose {
    items: Array<Item>;

    constructor(items: Item[] = [] as Array<Item>) {
        this.items = items;
    }

    updateQuality(): Item[] {
        for (let i: number = 0; i < this.items.length; i++) {
            // If the item is 'Sulfuras', it should not update anything
            if (this.items[i].name === 'Sulfuras, Hand of Ragnaros')
                continue;

            // Decrease sellIn by 1
            this.items[i].sellIn -= 1;

            // If the item is 'Backstage passes' and the sellIn has expired, set quality to 0 and skip
            if (this.items[i].name === 'Backstage passes to a TAFKAL80ETC concert' && this.items[i].sellIn <= 0) {
                this.items[i].quality = 0;
                continue;
            }

            // Define sign to illustrate increasing or decreasing depending on product type
            const changeBySign: number = (this.items[i].name != 'Aged Brie' && this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') ? -1 : 1
            // Define weights to increase/decrease quality for items that are not a Backstage pass
            const weightNotBackstagePass: number = (this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert' && this.items[i].sellIn <= 0) ? 2 : 1
            // Define weights to increase/decrease quality for items that are a Backstage pass
            const weightBackstagePass: number = (this.items[i].name === 'Backstage passes to a TAFKAL80ETC concert' && this.items[i].sellIn <= 5) ? 3 : (this.items[i].name === 'Backstage passes to a TAFKAL80ETC concert' && this.items[i].sellIn <= 10) ? 2 : 1
            // Define the final weight
            const weight: number = (this.items[i].name === 'Backstage passes to a TAFKAL80ETC concert') ? weightBackstagePass : weightNotBackstagePass;

            // If quality is lower or equal then 0 and it should be decreased, don't do anything
            if (this.items[i].quality <= 0 && changeBySign === -1)
                continue;
            // If quality is greater or equal then 50 and it should be increased, don't do anything
            if (this.items[i].quality >= 50 && changeBySign === 1)
                continue;

            // Update quality
            this.items[i].quality += changeBySign * weight;
        }
        return this.items;
    }
}
