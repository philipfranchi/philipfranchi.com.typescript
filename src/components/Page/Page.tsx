import React from 'react'
import './Page.css'

interface PageProps {
    pageName: string,
    children: React.ReactNode,
}
export default function Page(props: PageProps) {
    return(
        <div className="Page">
            <h2>{props.pageName}</h2>
            {props.children}
        </div>
    )
}