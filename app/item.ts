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

export const itemNames = {
    AgedBrie: 'Aged Brie',
    Sulfuras: 'Sulfuras, Hand of Ragnaros',
    BackstagePasses: 'Backstage passes to a TAFKAL80ETC concert',
    WhateverItem: 'Whatever Item'
}