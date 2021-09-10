import { GetStaticProps } from "next"
import React from "react"
import ProjectCard from "../components/ProjectCard"
import ProjectLayout from "../layouts/project.layout"
import { useRepo } from "../hooks/useRepo"

const Projects = (props) => {
    return (
        <ProjectLayout>
            {props.isError}
            {!props.isLoading && (
                <ProjectCard {...props.data}/>
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

