import { useSelector } from "react-redux"
import classes from './ImcDisplay.module.css'



const ImcDisplay = (props) => {

    const user = useSelector (state => state.auth.user)
    const imc = useSelector(state => state.imcs.imcs.find(a => a.id === props.imcId))
    const calculImc = Math.round(imc.weight/(imc.height*imc.height))

    return (
        <>
        {user.email === imc.email ?
        <div className="m-3 border border-info p-3 rounded">
            <div className="row align-items-center">
                <div className="col-5">
                    <div>
                        <b>Le :</b> {imc.date.split('-').reverse().join('-')}
                    </div>
                    <br />
                    <div>
                        <b>Votre taille : </b>{imc.height} m 
                    </div>
                    <br />
                    <div>
                        <b>Votre poids : </b>{imc.weight} Kg
                    </div>
                </div>
                <div className="col-7 text-center">
                    <div className={classes.imc}>
                        <div className={`${calculImc <= 16.5 ? classes.severeunderweight: 
                    calculImc > 16.5 && calculImc <= 18.5 ? classes.underweight :
                        calculImc > 18.5 && calculImc <= 25 ? classes.normal :
                        calculImc > 25 && calculImc <= 30 ? classes.overweight :
                        calculImc > 30 && calculImc <= 35 ? classes.moderateobesity :
                        calculImc > 35 && calculImc <= 40 ? classes.severeobesity : classes.morbidobesity }`}>
                            {calculImc}                
                        </div>
                    </div>

                    <div className={classes.interpretation}>
                    <div className={`${calculImc <= 16.5 ? classes.severeunderweight: 
                        calculImc > 16.5 && calculImc <= 18.5 ? classes.underweight :
                        calculImc > 18.5 && calculImc <= 25 ? classes.normal :
                        calculImc > 25 && calculImc <= 30 ? classes.overweight :
                        calculImc > 30 && calculImc <= 35 ? classes.moderateobesity :
                        calculImc > 35 && calculImc <= 40 ? classes.severeobesity : classes.morbidobesity 
                        }`}>
                        {calculImc <= 16.5 ? 'D??nutrition': 
                        calculImc > 16.5 && calculImc <= 18.5 ? 'Maigreur' :
                        calculImc > 18.5 && calculImc <= 25 ? 'Poids normal' :
                        calculImc > 25 && calculImc <= 30 ? 'Surpoids' :
                        calculImc > 30 && calculImc <= 35 ? 'Ob??sit?? mod??r??e' :
                        calculImc > 35 && calculImc <= 40 ? 'Ob??sit?? s??v??re ' : 'Ob??sit?? morbide ou massive '}
                    </div>
                    </div>
                </div>
            </div>
        </div> :
        <p></p>}
        </>
    )
}

export default ImcDisplay
