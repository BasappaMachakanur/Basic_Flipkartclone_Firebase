

export const Increment=(data)=> {
    return (
          {
            type:"increment",
            payload:data
          }
    )
}

export const AddToCart=(data)=>{
   return (
        {
          type:"AddToCart",
          payload:data,

        }
   )
}

export const RemoveFromCart=(data)=>{
   return (
    {
      type:"RemoveFromCart",
      payload:data
    }
   )
}