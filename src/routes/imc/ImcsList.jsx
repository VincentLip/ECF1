
import { useRef } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import ImcDisplay from "./ImcDisplay"

const ImcsList = () =>{

    const imcs = useSelector(state => state.imcs.imcs)
    const navigate = useNavigate()
    const startDateRef = useRef()

    const add = () => {

        navigate(`/imc`)
    }


    return (

        <>
        <div className="d-flex justify-content-between align-items-center">
            <h3>Voici la liste de vos IMC</h3>
            <button className="btn btn-primary m-2" onClick={add}><i className=""></i> Ajouter</button>
        </div>
        <hr />

        {imcs.length === 0 ?
        <p>Il n'y a aucune information !</p> : 
        imcs.map(a => <ImcDisplay key={a.id} imcId={a.id}  />)}
        </>
    )

}

export default ImcsList