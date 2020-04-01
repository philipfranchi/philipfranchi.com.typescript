import React from 'react'
import './Project.css'

interface Image {
    src: string
    alt: string
}
interface ProjectProps {
    title: string
    image: Image
    desc: string
}
export default function Project(props: ProjectProps) {
    return (
        <div className="Project">
            <h4>{props.title}</h4>
            <img src={props.image.src} alt={props.image.alt} />
            <p>{props.desc}</p>
        </div>
    );
}