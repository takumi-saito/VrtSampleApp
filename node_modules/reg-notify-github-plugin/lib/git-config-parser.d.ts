export interface ConfigSection {
    name: string;
    keys: {
        [key: string]: string;
    };
}
export declare function readGitConfig(): string | undefined;
export declare function parseGitConfig(file: string): ConfigSection[];
