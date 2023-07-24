import t from './aufgabe2.mjs'

describe('xxxBy', () => {
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

    test("main", () => {
        t.main();

        expect(console.table).toHaveBeenNthCalledWith(
            1,
            [{ "grade": 2, "name": "Bernhard", "points": 13 }, { "grade": 2, "name": "Nina", "points": 13 }]
        );
        expect(console.table).toHaveBeenNthCalledWith(
            2,
            [{ "grade": 1, "name": "Max", "points": 16 }, { "grade": 1, "name": "Sophie", "points": 16 }]
        );
        expect(console.table).toHaveBeenNthCalledWith(
            3,
            [{ "grade": 1, "name": "Max", "points": 16 }, { "grade": 1, "name": "Tobias", "points": 14 }, { "grade": 1, "name": "Sophie", "points": 16 }, { "grade": 1, "name": "Laura", "points": 14 }]
        );
        expect(console.table).toHaveBeenNthCalledWith(
            4,
            [{ "grade": 2, "name": "Bernhard", "points": 13 }, { "grade": 2, "name": "Nina", "points": 13 }]
        );
    });

    test("minBy", () => {
        const a = [{a: 1, b: 1}, {a: 1, b: 2}, {a: 1, b: 3}, {a: 2, b: 1}]
        const r1 = a.minBy(e => e.a);
        const r2 = a.minBy(e => e.b);

        expect(r1).toStrictEqual(
            [{"a": 1, "b": 1}, {"a": 1, "b": 2}, {"a": 1, "b": 3}]
        );
        expect(r2).toStrictEqual(
            [{"a": 1, "b": 1}, {"a": 2, "b": 1}]
        );
    });

    test("maxBy", () => {
        const a = [{a: 1, b: 1}, {a: 1, b: 2}, {a: 1, b: 3}, {a: 2, b: 1}]
        const r1 = a.maxBy(e => e.a);
        const r2 = a.maxBy(e => e.b);

        expect(r1).toStrictEqual(
            [{"a": 2, "b": 1}]
        );
        expect(r2).toStrictEqual(
            [{"a": 1, "b": 3}]
        );
    });
});