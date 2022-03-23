import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { FormTitle } from '../../components/FormTitle'
import { SelectOption } from '../../components/SelectOption'
import { Theme } from '../../components/Theme'
import { useForm, FormAction } from '../../context/FormContext'
import * as C from './style'

export const SecondStep = () => {
    const navigate = useNavigate()
    const { state, dispatch } = useForm()

    useEffect(() => {
        if (state.name.length < 3) {
            navigate('/')
        } else {
            dispatch({ type: FormAction.setCurrentStep, payload: 2 })
        }
    }, [])

    const setLevel = (level: number) => {
        dispatch({ type: FormAction.setLevel, payload: level })
    }

    return (
        <Theme>
            <C.Container>
                <FormTitle step={state.currentStep} title={`${state.name}, o que melhor descreve você?`} sub='Escolha a opção que melhor condiz com o seu estado atual.' />

                <SelectOption
                    title='Junior'
                    sub='Sou programador há menos de 2 anos.'
                    emoji='🥳'
                    selected={state.level === 0}
                    onClick={() => setLevel(0)}
                />
                <SelectOption
                    title='Senior'
                    sub='Sou programador há mais de 2 anos.'
                    emoji='😎' selected={state.level === 1}
                    onClick={() => setLevel(1)}
                />

                <Link className='backButton' to={'/'}>Voltar</Link>
                <button onClick={() => { navigate('/third') }}>Próximo</button>
            </C.Container>
        </Theme>
    )
}