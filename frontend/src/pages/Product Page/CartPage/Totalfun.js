import axios from "axios"

export const Totalfun=async (data)=>{

let total =0

   data.map(async(e)=>{
    // return  console.log(e)
   await axios.get(`https://comicadigitalbackend.up.railway.app/api/products/${e.productId}`).then((res)=>{
        console.log(res.data)
    total+=res.data.offer_price
    })
    console.log(total)
    return total
 })


}