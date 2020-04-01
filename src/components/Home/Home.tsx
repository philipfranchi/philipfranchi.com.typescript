import React from 'react'
import Page from '../Page/Page'

/*function Lorem () {
    return <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
}*/

export default function Home() {
    return <Page pageName="Welcome to my site!">
        <p>
            I'm a software engineer currently based in New York City. 
            I've been working in the tech industry since 2016 - first
             as a Junior Developer at Penguin Random House and now as
              a mid-level at the New York Times.
        </p>
        <p>
            Thanks for taking the time to come see my site in action. 
            I've definitely tried to create several versions of this 
            thing over the course of many years, but given the amount 
            of free time I have (it's currently March, 2020), I figured 
            I could really give this thing a fair shot, and take 
            advantage of the opportunity to learn some new tech!
        </p>

        <p>
            This site is built with React and Go, and reflects my best 
            attempts at making readable and maintainable production-ready 
            code. I don't really think that means a lot when this entire 
            thing could have been made with just HTML and CSS (probably 
            little to no scripting), but like I said, I'm practicing here. 
        </p>

        <p>
            Anyways, you'll find the links to my relevant stuff at the 
            bottom of each page, and hopefully I'll find time to sprinkle 
            in some fun games and stuff to keep me occupied. Have fun! And don't
            judge me too hard for this, we all start somewhere.
        </p>
    </Page>
}