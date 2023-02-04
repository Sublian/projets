import { render } from "react-dom"

export function TwitterFollowCard ({ userName, name, isFollowing }){
    
    //const imageSrc =("https://unavatar.io/${userName}")
    return(
        <article>
            <header>
                {/* console.log('https://unavatar.io/${userName}') */}
                <img alt= 'No se carga la imagen'
                src= {'https://unavatar.io/${userName}'}  />
                <div>
                    <strong>{name}</strong>
                    <span>@{userName}</span>
                </div>
            </header>

            <aside>
                <button>
                    Seguir
                </button>
            </aside>
        </article>
    )
}