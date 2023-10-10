Array.prototype.minBy = function (selector) {
    return this.reduce(/* your implementation */);
};

Array.prototype.maxBy = function (selector) {
    return this.reduce(/* your implementation */);
};


const results = [
    { name: "Max", points: 16, grade: 1 },
    { name: "Tobias", points: 14, grade: 1 },
    { name: "Sophie", points: 16, grade: 1 },
    { name: "Laura", points: 14, grade: 1 },
    { name: "Bernhard", points: 13, grade: 2 },
    { name: "Nina", points: 13, grade: 2 },
];

function main() {
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
import { pathToFileURL as _path } from 'url'
if (import.meta.url === _path(process.argv[1]).href) {
    main();
}
