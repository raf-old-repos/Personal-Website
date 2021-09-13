import { GetStaticProps } from "next"
import React from "react"
import ProjectCard from "../components/ProjectCard"
import ProjectLayout from "../layouts/project.layout"
import useRepo from "../hooks/useRepo"
import { RepoType } from '../types/RepoType'
import { RepoData } from "../types/RepoData"

const Projects: React.FC<RepoType> = () => {
    const { data, isError, isLoading } = useRepo(process.env.GITHUB_REPOS_URL)

    return (
        <ProjectLayout>
            {isError ? <div> error </div> :
                isLoading && (
                    data.map((repo: RepoData, idx: number) => (
                        <ProjectCard key={idx} {...repo} />
                    )
                    )
                )}

        </ProjectLayout>
    )
}


export default Projects

