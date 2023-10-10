import * as fs from 'fs';
const rawdata = fs.readFileSync('stores.json');
const data = JSON.parse(rawdata);

// *************************************************************************************************
// MUSTERBEISPIELE
// *************************************************************************************************

// Wie viele Stores sind in der Datei?
function muster1(data) {
    // const result = [];
    const result = data.stores.length;
    return result
}


// Welche Produkte sind in der Kategorie Fantastic und haben eine EAN Nummer > als 700000?
// Gib EAN und den Namen aus.
function muster2(data) {
    // const result = [];
    const result = data.products
        .filter(p => p.productCategory.name == "Fantastic" && p.ean > 700000)
        .map(p => ({
            ean: p.ean,
            name: p.name,
        }));
    return result;
}

// *************************************************************************************************
// ÜBUNGEN
// *************************************************************************************************

// (1) Welche Stores sind in 1050 oder 1110 Wien? Filtere nach der Postleitzahl.
function uebung01(data) {
    const result = [];
    
    return result;
}

// (2) In welchen Postleitzahlen existieren Stores? Verwende ein Set zur Entfernung der doppelten
// Werte.
function uebung02(data) {
    const result = [];

    return result;
}

// (3) Erstelle ein Array mit EAN, Name und Kategorie der Produkte, die vor dem 15. Februar 2021
// hinzugefügt wurden. Hinweis: Du kannst < auch bei Datestrings verwenden.
function uebung03(data) {
    const result = [];

    return result;
}

// (4) Ermittle den Preis des billigsten Angebotes des Produktes mit der EAN 246122.
// Die Preise sind im Angebotsarray (offers).
// Verwende reduce, um den kleineren Wert beim Vergleich zwischen prev und current
// zurückzugeben. Initialisiere mit Number.MAX_VALUE.
function uebung04(data) {
    const result = [];

    return result;
}

// (5) Wie das vorige Beispiel, verwende allerdings Math.min().
// Math.min() unterstützt keine Arrays. Du kannst jedoch den Spread Operator ... verwenden.
// Er liefert alle Arrayelemente als Liste, die Math.min() als Argument verarbeiten kann.
// Beispiel: Math.min(...[1,2,3])  --> 1
// Beachte, dass Math.min nur ein Array mit Zahlen verarbeiten kann.
function uebung05(data) {
    const result = [];

    return result;
}

// (6) Ermittle den maximalen und minimalen Angebotspreis der Produkte der Kategorie Handmade.
// Gehe dabei so vor:
// - Filtere die Produkte des Arrays products nach der Kategorie.
// - Projiziere jedes Produkt auf ein JSON Object. Zur Bestimmung des Preises verwende
//   Math.max bzw. Math.min. Als Argument gehe das Array data.offers mit entsprechender
//   Filterung durch, um nur das aktuelle Produkt zu berücksichtigen.
function uebung06(data) {
    const result = [];

    return result;
}

// (7) Wie viele Angebote gibt es von Produkten der Kategorie Handmade? Gib
// Name, EAN Nummer und die Anzahl der Angebote aus.
// Hinweise:
//   - Gruppiere zuerst die Offers der Kategorie Handmade nach der EAN Nummer mit reduce().
//     Damit erstellst du ein JSON Objekt mit der EAN als Key und einem Array mit allen
//     Offers.
//   - Speichere das Ergebnis in einer Zwischenvariable (z. B. grouped).
//   - Mit Object.keys() kannst du aus dem produzierten JSON Object die Keys als Array bekommen.
//   - Projiziere mit map() jeden Key, indem du damit auf grouped zugreifst.
//   - Der Name ist in jedem Offer einer EAN Nummer gleich. Daher kannst du den Namen des
//     ersten Elementes verwenden.
function uebung07(data) {
    const grouped = {};
    const result = [];

    return result;
}

function main() {
    { // To limit scope of variables.
        const result = muster1(data);
        console.log("Muster: Wie viele Stores sind in der Datei?");
        console.group();
        console.log(result);
        console.groupEnd();
    }

    {
        const result = muster2(data);
        console.log("Muster: Produkte in der Kategorie Fantastic und EAN > 700000.");
        console.group();
        console.table(result);
        console.groupEnd();
    }

    {
        const result = uebung01(data);
        console.log("(1) Stores in 1050 oder 1110 Wien.");
        console.group();
        console.table(result);
        console.groupEnd();
    }

    {
        const result = uebung02(data);
        console.log("(2) PLZ mit Stores.");
        console.group();
        console.log(result);
        console.groupEnd();
    }

    {
        const result = uebung03(data);
        console.log("(3) Produkte, die vor dem 15. Februar 2021 hinzugefügt wurden.");
        console.group();
        console.table(result);
        console.groupEnd();
    }

    {
        const result = uebung04(data);
        console.log("(4) Preis des billigsten Angebotes des Produktes 246122 mit reduce");
        console.group();
        console.log(result);
        console.groupEnd();
    }

    {
        const result = uebung05(data);
        console.log("(5) Preis des billigsten Angebotes des Produktes 246122 mit Math.min()");
        console.group();
        console.log(result);
        console.groupEnd();
    }

    {
        const result = uebung06(data);
        console.log("(6) Maximaler und minimaler Preis der Produkte der Kategorie Handmade.");
        console.group();
        console.table(result);
        console.groupEnd();
    }

    {
        const result = uebung07(data);
        console.log("(7) Angebote der Kategorie Handmade.");
        console.group();
        console.table(result);
        console.groupEnd();
    }
}

export default { main, rawdata, data, muster1, muster2, uebung01, uebung02, uebung03, uebung04, uebung05, uebung06, uebung07 }
import { pathToFileURL as _path } from 'url'
if (import.meta.url === _path(process.argv[1]).href) {
    main();
}
