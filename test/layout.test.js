const test = require("node:test");
const assert = require("node:assert");
const fs = require("fs");

const html = fs.readFileSync("index.html", "utf8");
const css = fs.readFileSync("style.css", "utf8");

test("page contains a header", () => {
    assert.match(html, /<header/i);
});

test("header uses Flexbox", () => {
    assert.match(css, /\.header\s*\{[\s\S]*display:\s*flex/i);
});

test("page contains six stop cards", () => {
    const cards = html.match(/class="stop-card"/g) || [];
    assert.strictEqual(cards.length, 6);
});

test("stop cards use CSS Grid", () => {
    assert.match(css, /\.stop-grid\s*\{[\s\S]*display:\s*grid/i);
});

test("grid has three columns", () => {
    assert.match(
        css,
        /grid-template-columns:\s*repeat\(3,\s*1fr\)/i
    );
});