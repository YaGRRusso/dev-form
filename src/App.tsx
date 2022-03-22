import { FormProvider } from "./context/FormContext"
import { RouteList } from "./router"

const App = () => {
  return (
    <FormProvider>
      <RouteList />
    </FormProvider>
  )
}

export default App