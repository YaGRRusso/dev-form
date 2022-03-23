import { ReactNode } from 'react'
import { Header } from '../Header'
import { Sidebar } from '../Sidebar'
import * as C from './style'
import { useForm } from '../../context/FormContext'
import ProfileIcon from '../../svgs/profile.svg'
import BookIcon from '../../svgs/book.svg'
import MailIcon from '../../svgs/mail.svg'

type Props = {
    children: ReactNode
}

export const Theme = ({ children }: Props) => {
    const { state } = useForm()

    return (
        <C.Container>
            <C.Area>
                <Header />
                <C.Steps>
                    <C.Sidebar>
                        <Sidebar title='Pessoal' sub='Se indentifique.' icon={ProfileIcon} path='/' active={state.currentStep === 1} />
                        <Sidebar title='Profissional' sub='Sua experiência.' icon={BookIcon} path='/second' active={state.currentStep === 2} />
                        <Sidebar title='Contato' sub='Como te encontrar.' icon={MailIcon} path='/third' active={state.currentStep === 3} />
                    </C.Sidebar>
                    <C.Page>
                        {children}
                    </C.Page>
                </C.Steps>
            </C.Area>
        </C.Container>
    )
}