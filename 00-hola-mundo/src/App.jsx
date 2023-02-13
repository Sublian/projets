import React, { useState } from 'react';
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

const user =[
    {
    userName: 'subliangel',
    name: 'Luis Gonzalez',
    isFollowing: true
    },
    {
    userName: 'salenakelvin',
    name: 'Dayana Mata',
    isFollowing: true
    },
    {
    userName: 'pierovillata',
    name: 'Gian Piero',
    isFollowing: false
    },
    {
    userName: 'wladox08',
    name: 'Wladimir Campos',
    isFollowing: false
    }
]


export function App (){
        
    return(
        <section  className="App">
            {
                user.map(user=> {
                    const {userName, name, isFollowing} = user
                    return (
                        <TwitterFollowCard
                        key={userName}
                        userName={userName}
                        name={name}
                        initialIsFollowing={isFollowing}
                        ></TwitterFollowCard>
                    )
                })
            }
                    
        </section>
    )
}