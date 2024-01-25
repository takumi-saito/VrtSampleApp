import { PreparerQuestion, PluginCreateOptions, PluginPreparer } from "reg-suit-interface";
import { GitHubPluginOption } from "./github-notifier-plugin";
export interface GitHubPreparerOption {
    clientId: string;
}
export declare class GitHubPreparer implements PluginPreparer<GitHubPreparerOption, GitHubPluginOption> {
    inquire(): PreparerQuestion[];
    prepare(option: PluginCreateOptions<GitHubPreparerOption>): Promise<GitHubPluginOption>;
}
