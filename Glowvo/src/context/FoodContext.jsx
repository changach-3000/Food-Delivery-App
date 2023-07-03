import { createContext} from "react"
export const FoodContext= createContext()

export function FoodProvider({children}){
    
    const contextData = {
       

    }
  return (
    <div>
        <FoodContext.Provider value = {contextData} >
            {children}
        </FoodContext.Provider>
    </div>
  )
}

