import * as C from './style'

type Props = {
    title: string,
    sub: string,
    emoji: string,
    selected: boolean,
    onClick: () => void
}

export const SelectOption = ({ title, sub, emoji, selected, onClick }: Props) => {
    return (
        <C.Container onClick={onClick} selected={selected}>
            <strong>{emoji}</strong>
            <div>
                <p>{title}</p>
                <span>{sub}</span>
            </div>
        </C.Container>
    )
}