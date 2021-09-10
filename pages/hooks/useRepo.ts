import useSWR from "swr"
import { fetcher } from "../../components/util/fetcher"
import { RepoData } from "../../types/RepoData"

interface RepoType {
    data?: RepoData
    isLoading: boolean,
    isError: boolean
}



export const useRepo = (baseURL: string): RepoType => {
    const { data: { data }, error } = useSWR(baseURL, fetcher);

    return {
        data: {
            fullName: data["full_name"],
            description: data["description"],
            fork: data["fork"],
            starCount: data["stargazers_count"],
            language: data["language"],
            openIssues: data["open_issues_count"],
            forks: data["forks_count"],
            link: data["html_url"]
        },
        isLoading: !error && !data,
        isError: error
    }


}