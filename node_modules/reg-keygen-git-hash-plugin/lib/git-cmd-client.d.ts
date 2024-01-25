export declare class GitCmdClient {
    private _revParseHash;
    currentName(): string;
    revParse(currentName: string): string;
    branches(): string;
    containedBranches(hash: string): string;
    logTime(hash: string): string;
    logBetween(a: string, b: string): string;
    logGraph(): string;
    mergeBase(a: string, b: string): string;
}
