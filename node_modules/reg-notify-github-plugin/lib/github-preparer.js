"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GitHubPreparer = void 0;
const open_1 = __importDefault(require("open"));
class GitHubPreparer {
    inquire() {
        return [
            {
                type: "confirm",
                name: "openApp",
                message: "notify-github plugin requires a client ID of reg-suit GitHub app. Open installation window in your browser",
                default: true,
            },
            {
                type: "input",
                message: "This repositoriy's client ID of reg-suit GitHub app",
                name: "clientId",
                when: ({ openApp }) => {
                    openApp && (0, open_1.default)("https://reg-viz.github.io/gh-app/index.html");
                    return true;
                },
            },
        ];
    }
    prepare(option) {
        return Promise.resolve({
            prComment: true,
            prCommentBehavior: "default",
            clientId: option.options.clientId,
        });
    }
}
exports.GitHubPreparer = GitHubPreparer;
//# sourceMappingURL=github-preparer.js.map