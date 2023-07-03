import { createContext, useEffect, useState} from "react"
export const FoodContext= createContext()

export function FoodProvider({children}){
  const [foods , setFoods] = useState('')

  useEffect(()=>{
    fetch("/api/foods")
    .then(res => res.json())
    .then(data =>{
      setFoods(data)
    })
  },[])
    
    const contextData = {
      foods,
    }
  return (
    <div>
        <FoodContext.Provider value = {contextData} >
            {children}
        </FoodContext.Provider>
    </div>
  )
}

