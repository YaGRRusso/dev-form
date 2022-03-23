import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { FormTitle } from '../../components/FormTitle'
import { Theme } from '../../components/Theme'
import { useForm, FormAction } from '../../context/FormContext'
import * as C from './style'

export const ThirdStep = () => {
    const navigate = useNavigate()
    const { state, dispatch } = useForm()

    useEffect(() => {
        if (!state.name) {
            navigate('/')
        } else {
            dispatch({ type: FormAction.setCurrentStep, payload: 3 })
        }
    }, [])

    return (
        <Theme>
            <C.Container>
                <FormTitle step={state.currentStep} title={`${state.name}, onde podemos entrar em contato com você?`} sub='Preencha com suas redes sociais para entrarmos em contato.' />

                <label>
                    Email:
                    <input type="email" autoFocus value={state.email} onChange={ev => dispatch({ type: FormAction.setEmail, payload: ev.target.value })} />
                </label>
                <label>
                    Github:
                    <input type="url" value={state.github} onChange={ev => dispatch({ type: FormAction.setGithub, payload: ev.target.value })} />
                </label>

                <Link className='backButton' to={'/second'}>Voltar</Link>
                <button onClick={() => { navigate('/complete') }}>Finalizar</button>
            </C.Container>
        </Theme>
    )
}