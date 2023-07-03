import { createContext} from "react"
export const AuthContext = createContext()

export function AuthProvider({children}){
    
    const contextData = {
       
    }
  return (
    <div>
        <AuthContext.Provider value = {contextData} >
            {children}
        </AuthContext.Provider>
    </div>
  )
}

