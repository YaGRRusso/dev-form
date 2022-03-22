import * as C from './style'

type Props = {
    step: number,
    title: string,
    sub: string
}

export const FormTitle = ({ step, title, sub }: Props) => {
    return (
        <C.Container>
            <p>Passo {step}/3</p>
            <h2>{title}</h2>
            <p>{sub}</p>
        </C.Container>
    )
}