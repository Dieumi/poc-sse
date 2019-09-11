"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
//get router
//options for cors midddleware
//enable pre-flight
const PORT = 3000;
app_1.default.listen(PORT, () => {
    console.log('Express server listening on port ' + PORT);
});
//# sourceMappingURL=index.js.map