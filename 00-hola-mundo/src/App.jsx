import React from 'react';
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App (){
    return(
        <section  className='App'>
            <TwitterFollowCard isFollowing={"false"} userName="subliangel" name="Luis Angel Gonzalez" />
            <TwitterFollowCard isFollowing={"true"} userName="salenakelvin" name="Dayana Mata" />
            <TwitterFollowCard isFollowing userName="pierovillata" name="Gian Piero" />
            <TwitterFollowCard isFollowing userName="wladox09" name="Wladimir Campos" />
            <TwitterFollowCard isFollowing userName="elonmusk" name="Elon Musk" />
        </section>
    )
}