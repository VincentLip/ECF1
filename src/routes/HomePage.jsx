import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"

const HomePage = () => {

    const user = useSelector(state => state.auth.user)
    const navigate = useNavigate()
    const start = () => {

        navigate(`/imc`)
    }

    return (
    <>
        <h3>Home</h3>
        <hr />
        <p>L’indice de masse corporelle (IMC) permet d’évaluer rapidement votre corpulence simplement avec votre poids et votre taille, quel que soit votre sexe. Calculez rapidement votre IMC et découvrez dans quelle catégorie vous vous situez.
        L’indice de masse corporelle (IMC) est le seul indice validé par l’Organisation mondiale de la santé pour évaluer la corpulence d’un individu et donc les éventuels risques pour la santé. L’IMC permet de déterminer si l’on est situation de maigreur, de surpoids ou d’obésité par exemple.
        En anglais on parle de BMI pour Body Mass Index.</p>

        {user && <div className="">
                <button className="btn btn-primary m-2" onClick={start}><i className=""></i> Commencer</button>
        </div>}
    </>
    )
}

export default HomePage