import { createContext, useEffect, useState} from "react"
export const FoodContext= createContext()

export function FoodProvider({children}){
  const [foods , setFoods] = useState('')
  const [selectedFoods, setSelectedFoods] = useState([]);
  const [checkout, setCheckout] = useState()

  const Addtocheckout = (food) => {
    setSelectedFoods([...selectedFoods, food]);
    const newcheckout = checkout.filter((b) => b.id !== food.id);
    setCheckout([...newcheckout, food]);
  };
  const removefromcheckout = (food) => {
    const newSelectedFoods = selectedFoods.filter((f) => f.id !== food.id);
    setSelectedFoods(newSelectedFoods);

    const newcheckout = checkout.filter((b) => b.id !== food.id);
    setCheckout(newcheckout);
  };

  useEffect(()=>{
    fetch("/api/foods")
    .then(res => res.json())
    .then(data =>{
      setFoods(data)
    })
  },[])
    


  // Add Food 
  
    const contextData = {
      foods,
      selectedFoods,
      Addtocheckout,
      removefromcheckout
    }
  return (
    <div>
        <FoodContext.Provider value = {contextData} >
            {children}
        </FoodContext.Provider>
    </div>
  )
}

