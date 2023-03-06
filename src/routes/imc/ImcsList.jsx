import { useRef } from "react"
import { useSelector } from "react-redux"
import ImcDisplay from "./ImcDisplay"

const ImcsList = () =>{

    const imcs = useSelector(state => state.imcs.imcs)

console.log(imcs)
    
    return (

        <>
        <div className="d-flex justify-content-between align-items-center">
            <h3>Voici la liste de vos IMC</h3>
        </div>
        <hr />

        {imcs.length === 0 ?
        <p>Il n'y a aucune information !</p> : 
        imcs.map(a => <ImcDisplay key={a.id} imcId={a.id} />)}
        </>
    )

}

export default ImcsList