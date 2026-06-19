const fs = require("fs");

function load(path) {
    if (!fs.existsSync(path)) return [];
    const raw = fs.readFileSync(path, "utf-8");
    return JSON.parse(raw);
}

function save(path, data) {
    fs.writeFileSync(path, JSON.stringify(data, null, 2));
}

module.exports = { load, save };