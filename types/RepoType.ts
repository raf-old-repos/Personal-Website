import { RepoData } from "./RepoData";

export interface RepoType {
    data?: RepoData[]
    isLoading?: boolean,
    isError?: boolean
}