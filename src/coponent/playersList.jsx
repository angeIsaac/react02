import Player from "./player";
import { players } from "./players";


export default function playerListe(){
    const list = players.map((value)=>{
        return(
            <li key={value.age}>
                <Player nom={value.nom} age={value.age} imageUrl={value.imageUrl} logo={value.logo} nationalite={value.nationalite} numero={value.numero}/>
            </li>
        )
    })
    return(
        <ul className="flex flex-col gap-6 overflow-hidden container mx-auto">{list}</ul>
    )
}