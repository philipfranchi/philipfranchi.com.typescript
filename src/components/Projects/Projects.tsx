import React from 'react'
import Project from '../Project/Project'
import Page from '../Page/Page'
import './Projects.css'

export default function Projects() {
    const projects = [
        {
            title: "This very website!",
            img: {src: "", alt: "Image Alt"},
            desc: "This very website!",
        },
        {
            title: "2 This very website!",
            img: {src: "", alt: "Image Alt"},
            desc: "This very website!",
        },
        {
            title: "3 This very website!",
            img: {src: "", alt: "Image Alt"},
            desc: "This very website!",
        },
        {
            title: "4 This very website!",
            img: {src: "", alt: "Image Alt"},
            desc: "This very website!",
        },
        {
            title: "5 This very website!",
            img: {src: "", alt: "Image Alt"},
            desc: "This very website!",
        },
    ]
    const projectComponents = projects.map((project) => {
        return <Project key={project.title} title={project.title} image={project.img} desc={project.desc} />
    })
    return(
        <Page pageName="Projects">
            <div className="Projects">
                {projectComponents}
            </div>
        </Page>
    )
}