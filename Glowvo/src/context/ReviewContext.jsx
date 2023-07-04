import { createContext, useEffect, useState} from "react"
import { useNavigate } from "react-router"
import  Swal from "sweetalert2"
export const ReviewContext = createContext()

export function ReviewProvider({children}){

  const nav = useNavigate()
  const [reviews, setReviews] = useState()
  const [onChange, setonChange] = useState(false)
  
  useEffect(()=>{
    fetch("/api/reviews")
    .then(res => res.json())
    .then(data =>{
      setReviews(data)
    })
  },[onChange])

//   Add A review
const AddReviews= (comment) =>{
    fetch("/api/reviews", {
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(comment)
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
  
  // Delete Review
const deleteReview = (id) =>{
  fetch(`/api/reviews/${id}`, {
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
        reviews,
        AddReviews,
        deleteReview,
       
    }
  return (
    <div>
        <ReviewContext.Provider value = {contextData} >
            {children}
        </ReviewContext.Provider>
    </div>
  )
}

