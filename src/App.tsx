import { Routes , Route } from "react-router-dom"
import SinginForm from "./_auth/forms/SinginForm"
import Singupform from "./_auth/forms/Singupform"
import { Home } from "./_root/pages"
import AuthLayout from "./_auth/AuthLayout"
import RootLayout from "./_root/RootLayout"
function App() {

  return (
   <main className="flex h-screen">
      <Routes>

        {/* Public routes */}

        <Route element={<AuthLayout/>}>

        <Route path="/sing-in" element={<SinginForm />}/>
        <Route path="/sing-up" element={<Singupform />}/>
            
        </Route>
        
        
         

        {/* Private  routes */}

        <Route element={<RootLayout/>}>
          
        <Route index element= {<Home/>}/>
           
        </Route>


      </Routes>
   </main>
  )
}

export default App
