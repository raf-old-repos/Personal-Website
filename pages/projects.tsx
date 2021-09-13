import { GetStaticProps } from "next"
import React from "react"
import ProjectCard from "../components/ProjectCard"
import ProjectLayout from "../layouts/project.layout"
import { useRepo } from "../hooks/useRepo"
import { RepoType } from '../types/RepoType'
import { RepoData } from "../types/RepoData"

const Projects: React.FC<RepoType> = ({ data, isError, isLoading }) => {
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

export const getStaticProps: GetStaticProps = async () => {

    const { data, isError, isLoading } = useRepo(process.env.GITHUB_REPOS_URL)

    return {
        props: {
            data, isError, isLoading
        }
    }

}

export default Projects

