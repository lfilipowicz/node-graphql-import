"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const graphql_tag_1 = __importDefault(require("graphql-tag"));
function includeSchemaFromPath(options) {
    const { filesPath, fileTag } = options;
    const schema = fs_1.default
        .readdirSync(filesPath)
        .filter(file => file.endsWith(".graphql") || file.endsWith(".gql"))
        .filter(file => (fileTag ? file.indexOf(fileTag) !== -1 : true))
        .reduce((prev, next) => {
        const file = fs_1.default.readFileSync(`${filesPath}/${next}`, "utf-8");
        return prev + file;
    }, "");
    return graphql_tag_1.default(schema);
}
exports.default = includeSchemaFromPath;
//# sourceMappingURL=index.js.map