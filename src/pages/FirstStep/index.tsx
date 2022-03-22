import { ChangeEvent, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { FormTitle } from '../../components/FormTitle'
import { Theme } from '../../components/Theme'
import { useForm, FormAction } from '../../context/FormContext'
import * as C from './style'

export const FirstStep = () => {
    const navigate = useNavigate()
    const { state, dispatch } = useForm()

    useEffect(() => {
        dispatch({ type: FormAction.setCurrentStep, payload: 1 })
    }, [])

    const handleNameChange = (ev: ChangeEvent<HTMLInputElement>) => {
        dispatch({ type: FormAction.setName, payload: ev.target.value })
    }

    return (
        <Theme>
            <C.Container>
                <FormTitle step={state.currentStep} title='Vamos começar com o seu nome.' sub='Preencha o campo abaixo com o seu nome completo.' />

                <label>
                    Seu nome completo:
                    <input type="text" autoFocus value={state.name} onChange={ev => handleNameChange(ev)} />
                </label>

                <button onClick={() => { navigate('/second') }}>Próximo</button>
            </C.Container>
        </Theme>
    )
}