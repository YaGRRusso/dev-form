import { useNavigate } from 'react-router-dom'
import * as C from './style'

type Props = {
    title: string,
    sub: string,
    icon: string,
    path: string,
    active: boolean
}

export const Sidebar = ({ title, sub, icon, path, active }: Props) => {
    const navigate = useNavigate()

    return (
        <C.Container onClick={() => { navigate(path) }}>
            <C.Info>
                <div className='title'>{title}</div>
                <div className='subtitle'>{sub}</div>
            </C.Info>
            <C.Icon active={active}>
                <img src={icon} alt={title} />
            </C.Icon>
        </C.Container>
    )
}