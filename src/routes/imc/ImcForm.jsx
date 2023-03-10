import { useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addImc } from "./ImcsSlice"
import { useNavigate} from "react-router-dom"


const ImcForm = () => {

    const user = useSelector (state => state.auth.user)
    const email = user.email
    const dateRef = useRef()
    const heightRef = useRef()
    const weightRef = useRef()
    const navigate = useNavigate()

    const dispatch = useDispatch()

    const submitFormHandler = async (e) => {
        e.preventDefault()

        const date = dateRef.current.value
        const height = +heightRef.current.value
        const weight = +weightRef.current.value

        const imcValues = {
            date,
            height,
            weight,
            email
        }

        dispatch(addImc(imcValues))
        
        alert("Vos Informations ont été ajouté")
    }

    const visualize = () => {

        navigate(`/affichage`)
    }

    const back =() => {

        navigate(`/`)
    }


    return (
    <>
        <h3>Entrer vos informations</h3>
        <hr />
        <form onSubmit={submitFormHandler}>
            <div className="mb-3">
                <label htmlFor="date" className="form-label">Date: </label>
                <input type="date" id="date" className="form-control" ref={dateRef} required />
            </div>
            <div className="mb-3">
                <label htmlFor="height" className="form-label">Taille (en mètres) : </label>
                <input type="number" step="0.01" id="height" className="form-control" ref={heightRef} required />
            </div>
            <div className="mb-3">
                <label htmlFor="weight" className="form-label">Poids (en Kg): </label>
                <input type="number" step="0.1" id="weight" className="form-control" ref={weightRef} required />
            </div>
            <div className="text-end">
                <button className="btn btn-primary"><i className="bi bi-plus-circle"></i> Ajouter</button>
            </div>
        </form>
        <div className="">
                <button className="btn btn-success m-2" onClick={visualize}><i className=""></i> Visualiser</button>
                <button className="btn btn-danger m-2" onClick={back}><i className=""></i> Retour</button>
        </div>
    </>
    )
}

export default ImcForm