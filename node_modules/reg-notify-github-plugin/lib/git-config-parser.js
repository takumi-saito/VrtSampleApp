"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseGitConfig = exports.readGitConfig = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const reg_suit_util_1 = require("reg-suit-util");
function readGitConfig() {
    const prjRoot = reg_suit_util_1.fsUtil.lookup(".git");
    if (!prjRoot)
        return;
    try {
        const file = fs_1.default.readFileSync(path_1.default.join(prjRoot, "config"), "utf-8");
        return file;
    }
    catch (e) {
        return;
    }
}
exports.readGitConfig = readGitConfig;
function parseGitConfig(file) {
    const lines = file.split("\n");
    const sections = [];
    let currentSection;
    lines.forEach(line => {
        const sectionStartHit = line.match(/^\s*\[([^\]]+)\]/);
        if (sectionStartHit) {
            currentSection = { name: sectionStartHit[1], keys: {} };
            sections.push(currentSection);
        }
        else {
            const keyValueHit = line.match(/^\s*([^\s=]+)\s*=\s*([^\s]*)/);
            if (keyValueHit) {
                currentSection.keys[keyValueHit[1]] = keyValueHit[2];
            }
        }
    });
    return sections;
}
exports.parseGitConfig = parseGitConfig;
//# sourceMappingURL=git-config-parser.js.map