import * as C from './style'
import { useForm } from '../../context/FormContext'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export const Complete = () => {
    const { state } = useForm();
    const navigate = useNavigate()

    useEffect(() => {
        if (!state.name || !state.email || !state.github) {
            navigate('/third')
        } else {
            console.log(state)
        }
    }, [])

    return (
        <C.Container>
            Nome: {state.name} <br />
            Nivel: {state.level} <br />
            Email: {state.email} <br />
            Github: {state.github}
        </C.Container>
    )
}