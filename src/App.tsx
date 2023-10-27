import { Routes , Route } from "react-router-dom"
function App() {

  return (
   <main className="flex h-screen">
      <Routes>

        {/* Public routes */}
        
        <Route path="/sing-in" element={<SigninForm />}/>
         

        {/* Private  routes */}

        <Route index element= {<Home/>}/>

      </Routes>
   </main>
  )
}

export default App
