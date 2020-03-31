import React from 'react'
import './Page.css'

interface PageProps {
    children: React.ReactNode
}
export default function Page(props: PageProps) {
    return(
        <div className="Page">
            {props.children}
        </div>
    )
}