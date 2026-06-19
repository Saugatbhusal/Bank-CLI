const fs = require("fs");

function storage() {
    return {
        load(path) {
            if (!fs.existsSync(path)) return [];
            const raw = fs.readFileSync(path, "utf-8");
            return JSON.parse(raw);
        },

        save(path, data) {
            fs.writeFileSync(path, JSON.stringify(data, null, 2));
        }
    }


}

module.exports = storage