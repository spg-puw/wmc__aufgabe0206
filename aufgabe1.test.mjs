import t from './aufgabe1.mjs'

describe('Store normal', () => {
    const log = console.log;
    const table = console.table;

    beforeEach(() => {
        console.log = import.meta.jest.fn();
        console.table = import.meta.jest.fn();
    });

    afterAll(() => {
        console.log = log;
        console.table = table;
    });

    test("uebung01", () => {
        const r = t.uebung01(t.data);

        expect(r).toHaveLength(2);
        expect(r).toEqual(
            expect.arrayContaining([{"address": "Im Dorf 87", "city": "Wien", "guid": "8e1bd9de-7cf5-be9b-f1e6-c8d4344317ec", "name": "Ertl KG", "zip": "1050"}, {"address": "Hallesche Str. 71c", "city": "Wien", "guid": "02f18081-6afb-993b-5785-369331102393", "name": "Koszewski UG", "zip": "1110"}])
        );
    });

    test("uebung02", () => {
        const r = t.uebung02(t.data);

        expect(r).toHaveLength(5);
        expect(r).toEqual(
            expect.arrayContaining([ '1020', '1050', '1180', '1110', '1220' ])
        );
    });

    test("uebung03", () => {
        const r = t.uebung03(t.data);

        expect(r).toHaveLength(3);
        expect(r).toEqual(
            expect.arrayContaining([{"category": "Fantastic", "ean": 283778, "name": "Rustic Soft Shirt"}, {"category": "Handmade", "ean": 848527, "name": "Tasty Cotton Towels"}, {"category": "Handmade", "ean": 881282, "name": "Licensed Fresh Hat"}])
        );
    });

    test("uebung04", () => {
        const reduceFn = import.meta.jest.spyOn(Array.prototype, 'reduce');
        const minFn = import.meta.jest.spyOn(Math, 'min');
        reduceFn.mockClear();
        minFn.mockClear();

        const r = t.uebung04(t.data);
        expect(r).toBe(361.67);
        expect(reduceFn).toHaveBeenCalled();
        expect(minFn).not.toHaveBeenCalled();

        reduceFn.mockRestore();
        minFn.mockRestore();
    });

    test("uebung05", () => {
        const reduceFn = import.meta.jest.spyOn(Array.prototype, 'reduce');
        const minFn = import.meta.jest.spyOn(Math, 'min');
        reduceFn.mockClear();
        minFn.mockClear();

        const r = t.uebung05(t.data);
        expect(r).toBe(361.67);
        expect(reduceFn).not.toHaveBeenCalled();
        expect(minFn).toHaveBeenCalled();
        
        reduceFn.mockRestore();
        minFn.mockRestore();
    });

    test("uebung06", () => {
        const r = t.uebung06(t.data);

        expect(r).toHaveLength(5);
        expect(r).toEqual(
            expect.arrayContaining([{"ean": 952530, "maxPrice": 921.91, "minPrice": 324.8, "name": "Tasty Concrete Computer"}, {"ean": 848527, "maxPrice": 802.25, "minPrice": 802.25, "name": "Tasty Cotton Towels"}, {"ean": 881282, "maxPrice": 890.91, "minPrice": 121.35, "name": "Licensed Fresh Hat"}, {"ean": 964205, "maxPrice": 726.71, "minPrice": 344.84, "name": "Practical Concrete Mouse"}, {"ean": 199829, "maxPrice": 901.05, "minPrice": 147.77, "name": "Fantastic Fresh Towels"}])
        );
    });

    test("uebung07", () => {
        const r = t.uebung07(t.data);

        expect(r).toHaveLength(5);
        expect(r).toEqual(
            expect.arrayContaining([{"count": 4, "ean": "199829", "name": "Fantastic Fresh Towels"}, {"count": 1, "ean": "848527", "name": "Tasty Cotton Towels"}, {"count": 3, "ean": "881282", "name": "Licensed Fresh Hat"}, {"count": 3, "ean": "952530", "name": "Tasty Concrete Computer"}, {"count": 3, "ean": "964205", "name": "Practical Concrete Mouse"}])
        );
    });
});

describe('Store dynamic', () => {
    const log = console.log;
    const table = console.table;
    let product;
    let store;
    let d;

    beforeEach(() => {
        console.log = import.meta.jest.fn();
        console.table = import.meta.jest.fn();

        d = structuredClone(t.data);

        product = {
            "guid": "test",
            "ean": 123456,
            "name": "Testprodukt",
            "description": "leer",
            "added": "2023-01-01T01:01:01",
            "productCategory": {
              "guid": "266dde85-cc10-4bf2-94c9-1e590e802fea",
              "name": "Handmade"
            }
        };

        store = {
            "guid": "testspg",
            "name": "SPG",
            "address": "Spengergasse",
            "zip": "1050",
            "city": "Wien"
        };
    });

    afterAll(() => {
        console.log = log;
        console.table = table;
    });

    test("uebung06", () => {
        d.products.push(product);

        const r = t.uebung06(d);

        expect(r).toHaveLength(6);
        expect(r).toEqual(
            expect.arrayContaining([{"ean": 952530, "maxPrice": 921.91, "minPrice": 324.8, "name": "Tasty Concrete Computer"}, {"ean": 848527, "maxPrice": 802.25, "minPrice": 802.25, "name": "Tasty Cotton Towels"}, {"ean": 881282, "maxPrice": 890.91, "minPrice": 121.35, "name": "Licensed Fresh Hat"}, {"ean": 964205, "maxPrice": 726.71, "minPrice": 344.84, "name": "Practical Concrete Mouse"}, {"ean": 199829, "maxPrice": 901.05, "minPrice": 147.77, "name": "Fantastic Fresh Towels"}, {"ean": 123456, "maxPrice": -Infinity, "minPrice": Infinity, "name": "Testprodukt"}])
        );
        
        d.offers.push({
            "guid": "testoffer",
            "product": product,
            "store": store,
            "price": 111.99,
            "lastUpdate": "2023-01-01T01:01:01"
        });

        const r2 = t.uebung06(d);

        expect(r2).toHaveLength(6);
        expect(r2).toEqual(
            expect.arrayContaining([{"ean": 952530, "maxPrice": 921.91, "minPrice": 324.8, "name": "Tasty Concrete Computer"}, {"ean": 848527, "maxPrice": 802.25, "minPrice": 802.25, "name": "Tasty Cotton Towels"}, {"ean": 881282, "maxPrice": 890.91, "minPrice": 121.35, "name": "Licensed Fresh Hat"}, {"ean": 964205, "maxPrice": 726.71, "minPrice": 344.84, "name": "Practical Concrete Mouse"}, {"ean": 199829, "maxPrice": 901.05, "minPrice": 147.77, "name": "Fantastic Fresh Towels"}, {"ean": 123456, "maxPrice": 111.99, "minPrice": 111.99, "name": "Testprodukt"}])
        );
    });

    test("uebung07", () => {
        d.products.push(product);
        d.offers.push({
            "guid": "testoffer",
            "product": product,
            "store": store,
            "price": 111.99,
            "lastUpdate": "2023-01-01T01:01:01"
        });

        const r = t.uebung07(d);

        expect(r).toHaveLength(6);
        expect(r).toEqual(
            expect.arrayContaining([{"count": 1, "ean": "123456", "name": "Testprodukt"}, {"count": 4, "ean": "199829", "name": "Fantastic Fresh Towels"}, {"count": 1, "ean": "848527", "name": "Tasty Cotton Towels"}, {"count": 3, "ean": "881282", "name": "Licensed Fresh Hat"}, {"count": 3, "ean": "952530", "name": "Tasty Concrete Computer"}, {"count": 3, "ean": "964205", "name": "Practical Concrete Mouse"}])
        );
    });
});