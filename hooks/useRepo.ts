import useSWR from "swr"
import { fetcher } from "../components/util/fetcher"
import { RepoData } from "../types/RepoData";
import { RepoType } from "../types/RepoType"



const useRepo = (baseURL: string): RepoType => {
    const { data: { data }, error } = useSWR(baseURL, fetcher);
    const repoData: RepoData[] = []

    data.forEach((repo) => {
        repoData.push({
            fullName: repo["full_name"],
            description: repo["description"],
            fork: repo["fork"],
            starCount: repo["stargazers_count"],
            language: repo["language"],
            openIssues: repo["open_issues_count"],
            forks: repo["forks_count"],
            link: repo["html_url"]
        })
    })

    return {
        data: repoData,
        isLoading: !error && !data,
        isError: error
    }


}
export default useRepo