import { useState } from "react"

export function TwitterFollowCard ({ userName, name }){
    const [isFollowing, setIsFollowing] = useState(false)        
    
    //const imageSrc =("https://unavatar.io/${userName}")
    const texto = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName =  isFollowing ? 'tw--sinseguir tw--seguido' : 'tw--sinseguir'

    const handleClick = () =>{
        setIsFollowing(!isFollowing)
    }
    console.log(isFollowing)
    return(
        <article>
            <header>
                {
                console.log({userName})
                }
                <img alt= 'No se carga la imagen'
                src= { 'https://unavatar.io/{userName}' }  />
                <div>
                    <strong>{name}</strong>
                    <span>@{userName}</span>
                </div>
            </header>

            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    {texto}
                </button>
            </aside>
        </article>
    )
}