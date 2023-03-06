import { useRef } from "react"
import { useDispatch } from "react-redux"
import { addImc } from "./ImcSlice"

const ImcForm = () => {


    const dateRef = useRef()
    const heightRef = useRef()
    const weightRef = useRef()

    const dispatch = useDispatch()

    const submitFormHandler = async (e) => {
        e.preventDefault()

        const date = dateRef.current.value
        const height = +heightRef.current.value
        const weight = +weightRef.current.value

        const imcValues = {
            date,
            height,
            weight
        }

        await dispatch(addImc(imcValues))



    }


    return (
    <>
        <h3></h3>
        <hr />
        <form onSubmit={submitFormHandler}>
            <div className="mb-3">
                <label htmlFor="date" className="form-label">Date: </label>
                <input type="date" id="date" className="form-control" ref={dateRef} />
            </div>
            <div className="mb-3">
                <label htmlFor="height" className="form-label">Taille (en mètres) : </label>
                <input type="number" id="height" className="form-control" ref={heightRef} />
            </div>
            <div className="mb-3">
                <label htmlFor="weight" className="form-label">Poids (en Kg): </label>
                <input type="number" id="weight" className="form-control" ref={weightRef}  />
            </div>
            {/* <div className="text-end">
                <button className={`btn btn-${mode === 'delete' ? 'danger' : mode === 'edit' ? 'warning' : 'success'}`}>
                    <i className={`bi bi-${mode === 'delete' ? 'trash' : mode === 'edit' ? 'pencil-square' : 'plus-circle'}`}></i> {mode === 'delete' ? 'Confirm' : mode === 'edit' ? 'Edit' : 'Add'}
                </button>
            </div> */}
        </form> 
    </>
    )
}

export default ImcForm