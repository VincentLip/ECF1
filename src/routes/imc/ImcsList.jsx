import { useSelector } from "react-redux"
import ImcDisplay from "./ImcDisplay"

const ImcsList = () =>{

    const user = useSelector (state => state.auth.user)
    const imcs = useSelector(state => state.imcs.imcs)

    return (

        <>
        <div className="d-flex justify-content-between align-items-center">
            <h3>Imc List</h3>
        </div>
        <hr />
        {imcs.length === 0 ?
        <p>There is no address in the database!</p> : 
        imcs.map(a => <ImcDisplay key={a.id} imcId={a.id} />)}
    
        
        </>
    )

}

export default ImcsList