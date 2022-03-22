// Context, Reducer, Provider, Hook
import { createContext, ReactNode, useContext, useReducer } from 'react'

type StateType = {
    currentStep: number,
    name: string,
    level: 0 | 1,
    email: string,
    github: string
}
type ActionType = {
    type: FormAction,
    payload: any
}
type ContextType = {
    state: StateType,
    dispatch: (action: ActionType) => void
}
type FormProviderType = {
    children: ReactNode
}

const initialData: StateType = {
    currentStep: 0,
    name: '',
    level: 0,
    email: '',
    github: ''
}


// Context
const FormContext = createContext<ContextType | undefined>(undefined)

//Reducer
export enum FormAction {
    setCurrentStep,
    setName,
    setLevel,
    setEmail,
    setGithub
}
const formReducer = (state: StateType, action: ActionType) => {
    switch (action.type) {
        case FormAction.setCurrentStep:
            return { ...state, currentStep: action.payload }
        case FormAction.setName:
            return { ...state, name: action.payload }
        case FormAction.setLevel:
            return { ...state, level: action.payload }
        case FormAction.setEmail:
            return { ...state, email: action.payload }
        case FormAction.setGithub:
            return { ...state, github: action.payload }
        default:
            return state
    }
}

// Provider
export const FormProvider = ({ children }: FormProviderType) => {
    const [state, dispatch] = useReducer(formReducer, initialData)
    const value = { state, dispatch }

    return (
        <FormContext.Provider value={value}>
            {children}
        </FormContext.Provider>
    )
}

// Hook
export const useForm = () => {
    const context = useContext(FormContext)
    if (context === undefined) {
        throw new Error('Precisa ser usado dentro do provider')
    }
    return context
}