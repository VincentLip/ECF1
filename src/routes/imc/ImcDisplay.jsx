import { useSelector } from "react-redux"


const ImcDisplay = (props) => {

    const user = useSelector (state => state.auth.user)
    const imc = useSelector(state => state.imcs.imcs.find(a => a.id === props.imcId))

    return (
        <>
        {user.email === imc.email ?
        <div className="m-3 border border-info p-3 d-flex align-items-center rounded">
            <span>{imc.date} // {imc.height} // {imc.weight} // {Math.round(imc.weight/(imc.height*imc.height))}</span>
    
        </div> :
        <p></p>}

        
        
        </>
    )
}

export default ImcDisplay
