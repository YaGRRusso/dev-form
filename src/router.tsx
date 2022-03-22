import { useRoutes } from "react-router-dom"
import { NotFound } from './pages/NotFound'
import { FirstStep } from './pages/FirstStep'
import { SecondStep } from './pages/SecondStep'
import { ThirdStep } from './pages/ThirdStep'

export const RouteList = () => {
    return useRoutes([
        { path: '*', element: <NotFound /> },
        { path: '/', element: <FirstStep /> },
        { path: '/second', element: <SecondStep /> },
        { path: '/third', element: <ThirdStep /> }
    ])
}