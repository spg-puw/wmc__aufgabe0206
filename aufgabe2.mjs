Array.prototype.minBy = function (selector) {
    return this.reduce(/* your implementation */);
};

Array.prototype.maxBy = function (selector) {
    return this.reduce(/* your implementation */);
};


export const results = [
    { name: "Max", points: 16, grade: 1 },
    { name: "Tobias", points: 14, grade: 1 },
    { name: "Sophie", points: 16, grade: 1 },
    { name: "Laura", points: 14, grade: 1 },
    { name: "Bernhard", points: 13, grade: 2 },
    { name: "Nina", points: 13, grade: 2 },
];

export function main() {
    console.log("results.minBy(r => r.points)");
    console.table(results.minBy(r => r.points));
    console.log("results.maxBy(r => r.points)");
    console.table(results.maxBy(r => r.points));

    console.log("results.minBy(r => r.grade)");
    console.table(results.minBy(r => r.grade));
    console.log("results.maxBy(r => r.grade)");
    console.table(results.maxBy(r => r.grade));
}

export default { main, results }
if (import.meta.url.endsWith(process.argv[1])) {
    main();
}
