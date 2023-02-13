import React from 'react';
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App (){
    return(
        <section  className="App">
            <TwitterFollowCard  userName="subliangel" name="Luis Angel Gonzalez" />
            <TwitterFollowCard  userName="salenakelvin" name="Dayana Mata" />
            <TwitterFollowCard  userName="pierovillata" name="Gian Piero" />
            <TwitterFollowCard  userName="wladox09" name="Wladimir Campos" />
            
        </section>
    )
}