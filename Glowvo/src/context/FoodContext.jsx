import { createContext, useEffect, useState} from "react"
import  Swal from "sweetalert2"
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
const AddFood = (name,description, price,restaurant_name,image) =>{
  fetch("/api/foods", {
      method: "POST",
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify({name,description, price,restaurant_name,image})
  })
  .then((res)=>res.json())
  .then((response)=>{
      console.log(response)
      if(response.error)
      {
          Swal.fire(
              'Error',
              response.error,
              'error'
            )
      }
      else if(response.success)
      { 
          nav("/home")
          Swal.fire(
              'Success',
              response.success,
              'success'
            )
            setonChange(!onChange)
      }
      else{
          Swal.fire(
              'Error',
              "Something went wrong",
              'error'
            )
      }

  })
}

// Delete Food
const deleteFood = (id) =>{
  fetch(`/api/foods/${id}`, {
   method: "DELETE",
          })
  .then((res)=>res.json())
  .then((response)=>{
        if(response.success)
        {
          nav("/home")
          Swal.fire(
              'Success',
              response.success,
              'success'
            )
            setonChange(!onChange)
        }
        else{
          Swal.fire(
              'Error',
              "Something went wrong",
              'error'
            )
      }
  })
}
  
    const contextData = {
      foods,
      selectedFoods,
      Addtocheckout,
      removefromcheckout,
      AddFood,
      deleteFood,
    }
  return (
    <div>
        <FoodContext.Provider value = {contextData} >
            {children}
        </FoodContext.Provider>
    </div>
  )
}

