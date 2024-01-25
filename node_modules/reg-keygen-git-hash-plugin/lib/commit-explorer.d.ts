export declare type CommitNode = string[];
export declare class CommitExplorer {
    private _gitCmdClient;
    private _commitNodes;
    private _branchName;
    private _branchNameCache;
    getCommitNodes(): CommitNode[];
    getCurrentBranchName(): string;
    getCurrentCommitHash(): string;
    getBranchNames(hash: string): string[];
    getAllBranchNames(): string[];
    getIntersection(hash: string): string | undefined;
    getBranchHash(): string | undefined;
    getCandidateHashes(): string[];
    isReachable(a: string, b: string): boolean;
    findBaseCommitHash(candidateHashes: string[], branchHash: string): string | undefined;
    getBaseCommitHash(): string | null;
}
