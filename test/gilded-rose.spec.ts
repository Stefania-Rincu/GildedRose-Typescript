const { expect } = require('chai');
import { GildedRose } from '../app/gilded-rose';
import { Item } from '../app/item';

describe('Gilded Rose', function () {
    it('Should decrease sellIn and quality', function () {
        const gildedRose = new GildedRose([new Item('Whatever Item', 11, 10)]);
        gildedRose.updateQuality();
        gildedRose.updateQuality();
        const items = gildedRose.updateQuality();
        expect(items[0].name).to.equal('Whatever Item');
        expect(items[0].sellIn).to.equal(8);
        expect(items[0].quality).to.equal(7);
    });

    it('Should decrease sellIn and keep quality >= 0', function () {
        const gildedRose = new GildedRose([new Item('Whatever Item', 2, 2)]);
        gildedRose.updateQuality();
        gildedRose.updateQuality();
        const items = gildedRose.updateQuality();
        expect(items[0].name).to.equal('Whatever Item');
        expect(items[0].sellIn).to.equal(-1);
        expect(items[0].quality).to.equal(0);
    });

    it('Should decrease quality by 2 when sellIn <= 0', function () {
        const gildedRose = new GildedRose([new Item('Whatever Item', 0, 10)]);
        gildedRose.updateQuality();
        gildedRose.updateQuality();
        const items = gildedRose.updateQuality();
        expect(items[0].name).to.equal('Whatever Item');
        expect(items[0].sellIn).to.equal(-3);
        expect(items[0].quality).to.equal(4);
    });

    it('Should not decrease sellIn or quality for Sulfuras', function () {
        const gildedRose = new GildedRose([
            new Item('Sulfuras, Hand of Ragnaros', 1, 80),
        ]);
        gildedRose.updateQuality();
        gildedRose.updateQuality();
        const items = gildedRose.updateQuality();
        expect(items[0].name).to.equal('Sulfuras, Hand of Ragnaros');
        expect(items[0].sellIn).to.equal(1);
        expect(items[0].quality).to.equal(80);
    });

    it('Should decrease sellIn and increase quality for Aged Brie', function () {
        const gildedRose = new GildedRose([new Item('Aged Brie', 4, 10)]);
        gildedRose.updateQuality();
        gildedRose.updateQuality();
        const items = gildedRose.updateQuality();
        expect(items[0].name).to.equal('Aged Brie');
        expect(items[0].sellIn).to.equal(1);
        expect(items[0].quality).to.equal(13);
    });

    it('Should decrease sellIn and keep quality <= 50 for Aged Brie', function () {
        const gildedRose = new GildedRose([new Item('Aged Brie', 4, 49)]);
        gildedRose.updateQuality();
        gildedRose.updateQuality();
        const items = gildedRose.updateQuality();
        expect(items[0].name).to.equal('Aged Brie');
        expect(items[0].sellIn).to.equal(1);
        expect(items[0].quality).to.equal(50);
    });

    it('Should increase quality by 2 when sellIn <= 0 for Aged Brie', function () {
        const gildedRose = new GildedRose([new Item('Aged Brie', 0, 10)]);
        gildedRose.updateQuality();
        gildedRose.updateQuality();
        const items = gildedRose.updateQuality();
        expect(items[0].name).to.equal('Aged Brie');
        expect(items[0].sellIn).to.equal(-3);
        expect(items[0].quality).to.equal(16);
    });

    it('Should decrease sellIn and increase quality for Backstage passes', function () {
        const gildedRose = new GildedRose([
            new Item('Backstage passes to a TAFKAL80ETC concert', 20, 20),
        ]);
        gildedRose.updateQuality();
        gildedRose.updateQuality();
        const items = gildedRose.updateQuality();
        expect(items[0].name).to.equal(
            'Backstage passes to a TAFKAL80ETC concert',
        );
        expect(items[0].sellIn).to.equal(17);
        expect(items[0].quality).to.equal(23);
    });

    it('Should decrease sellIn and increase quality by 2 for Backstage passes', function () {
        const gildedRose = new GildedRose([
            new Item('Backstage passes to a TAFKAL80ETC concert', 10, 20),
        ]);
        gildedRose.updateQuality();
        gildedRose.updateQuality();
        const items = gildedRose.updateQuality();
        expect(items[0].name).to.equal(
            'Backstage passes to a TAFKAL80ETC concert',
        );
        expect(items[0].sellIn).to.equal(7);
        expect(items[0].quality).to.equal(26);
    });

    it('Should decrease sellIn and increase quality by 3 for Backstage passes', function () {
        const gildedRose = new GildedRose([
            new Item('Backstage passes to a TAFKAL80ETC concert', 5, 20),
        ]);
        gildedRose.updateQuality();
        gildedRose.updateQuality();
        const items = gildedRose.updateQuality();
        expect(items[0].name).to.equal(
            'Backstage passes to a TAFKAL80ETC concert',
        );
        expect(items[0].sellIn).to.equal(2);
        expect(items[0].quality).to.equal(29);
    });

    it('Should make quality = 0 when sellIn < 0 for Backstage passes', function () {
        const gildedRose = new GildedRose([
            new Item('Backstage passes to a TAFKAL80ETC concert', 2, 20),
        ]);
        gildedRose.updateQuality();
        gildedRose.updateQuality();
        const items = gildedRose.updateQuality();
        expect(items[0].name).to.equal(
            'Backstage passes to a TAFKAL80ETC concert',
        );
        expect(items[0].sellIn).to.equal(-1);
        expect(items[0].quality).to.equal(0);
    });

    it('Should decrease twice as fast as a normal item if Conjured', function () {
        const gildedRose = new GildedRose([
            new Item('Conjured Whatever Item', 3, 20),
        ]);
        gildedRose.updateQuality();
        gildedRose.updateQuality();
        const items = gildedRose.updateQuality();
        expect(items[0].name).to.equal('Conjured Whatever Item');
        expect(items[0].sellIn).to.equal(0);
        expect(items[0].quality).to.equal(12);
    });

    it('Conjured should not affect items that do not decrease quality - Aged Brie', function () {
        const gildedRose = new GildedRose([
            new Item('Conjured Aged Brie', 4, 20),
        ]);
        gildedRose.updateQuality();
        gildedRose.updateQuality();
        const items = gildedRose.updateQuality();
        expect(items[0].name).to.equal('Conjured Aged Brie');
        expect(items[0].sellIn).to.equal(1);
        expect(items[0].quality).to.equal(23);
    });

    it('Conjured should not affect items that do not decrease quality - Backstage passes', function () {
        const gildedRose = new GildedRose([
            new Item(
                'Conjured Backstage passes to a TAFKAL80ETC concert',
                5,
                20,
            ),
        ]);
        gildedRose.updateQuality();
        gildedRose.updateQuality();
        const items = gildedRose.updateQuality();
        expect(items[0].name).to.equal(
            'Conjured Backstage passes to a TAFKAL80ETC concert',
        );
        expect(items[0].sellIn).to.equal(2);
        expect(items[0].quality).to.equal(29);
    });
});
