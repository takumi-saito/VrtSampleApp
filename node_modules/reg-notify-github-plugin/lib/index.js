"use strict";
const github_notifier_plugin_1 = require("./github-notifier-plugin");
const github_preparer_1 = require("./github-preparer");
const factory = () => {
    return {
        notifier: new github_notifier_plugin_1.GitHubNotifierPlugin(),
        preparer: new github_preparer_1.GitHubPreparer(),
    };
};
module.exports = factory;
//# sourceMappingURL=index.js.map