import { Box,Button,Text,Flex, Link } from '@chakra-ui/react'
import React,{useState,useEffect} from 'react'

import "./payment.css"
import Paymets from './Paymet'
import axios from 'axios'

const Paymentform = () => {
    const [payme,setPayme] = useState([])
    const [invoice , setInvoice] = useState({
        pincode:"",
        firstname:"",
        lastname:"",
        address:"",
        city:"",
        state:"",
        mobile:""
    
    
        })
        const [address,setAddress]=useState([])
    
        const handleChange = (event) => {
          const {name, value} = event.target
          setInvoice({
           ...invoice,
            [name]: value
            
          })
          
          
        }
        async function handleSubmit(e){
          e.preventDefault()
          console.log(invoice)
          try{
            let res=await axios.post("http://localhost:8080/payment",invoice)
            console.log(res.data)
            setAddress(res.data)
    
    
          }catch(e){
            console.log(e.message)
          }
        }

         useEffect( () => {
       
        }, [address])
        
        const handleDelete = async (id) => {
            try{
                
                await axios.delete(`http://localhost:8080/user/${id}`)
                 alert ("Delete Successful")
                 setAddress([])
        
        
              }catch(e){
                console.log(e.message)
              }
          
        }
       
      console.log(address,"me address hu")
    
  return (
    <Box sx={{backgroundColor:"#f5f7f7"}}>
        <br/>
        <br/>
        
           <Box sx={{width:"80%",margin:"auto",padding:"20px 30px",
    border:"1px solid black",height:"auto",borderRadius:"4px",backgroundColor:"white",textAlign:"start"}}>
        <h4>SHIPPING ADDRESS</h4>
        <br/>
        <Box sx={{width:"38%",height:"auto",borderRadius:"8px",backgroundColor:"#f5f7f7",border:"1px solid #dddddd",padding:"20px 0px 0px 0px",textAlign:"start"}}>

            <h6 class="owl_schl">{address?.firstname}  {address?.lastname} </h6>
          
            <Text sx={{marginLeft:"13px",color:"black",fontSize:"15px",paddingTop:"5px"}}>{address.address} {address.city} {address.pincode}  {address.state}</Text>
           
            <Text sx={{marginLeft:"13px",color:"black",fontSize:"15px",paddingTop:"5px"}}><b id="spcl_b">Mobile : </b>{address.mobile}</Text>
<br/>
<br/>
            <Flex>
                <Button className="raja_wat">Edit</Button>
                <Button onClick={()=>handleDelete(address?._id)} className="raja_wat" >Delete</Button>
            </Flex>
            


        </Box>
        <br/>


        <Box sx={{border:"1px solid #dddddd",width:"100%",margin:"auto",height:"auto",marginTop:"20px",padding:"0px 0px 20px 4px"}}>
            <Box sx={{textAlign:"start",widht:"100%",borderBottom:"1px solid #dddddd",padding:"20px 0px",backgroundColor:"#f5f7f7"}}>
            <Text sx={{color:"black",padding:"0px 30px"}}>Select Delivery Method</Text>
            </Box>
            <Box>
                <Flex>
                <Button id="instant_pri" sx={{width:"20%",margin:"10px 0 20px 30px"}}>INSTANT DELIVERY</Button>
                <Button id="stand_pri" sx={{width:"20%",margin:"10px 0 20px 20px"}}>STANDARD DELIVERY</Button>  
                </Flex>
               
                    <p className='pin_pr'> * Either your PIN code or some items in your Order are not eligible for INSTA Delivery.</p>
  <p className='pin_pr'> * Delivery assurance is subject to our delivery locations staying open as per govt. regulation</p>
  <div class="TextWeb__Text-sc-1cyx778-0">*Please Note:</div>

  <div class="pin_pr">1) OTP is required for delivery completion.</div>
  <div class="pin_pr">2) For additional information, refer <b>Read T&C's</b></div>
            </Box>
    
        </Box>
        <br/>
        <br/>

        <Flex sx={{borderTop:"1px solid #dddddd",gap:"20px",padding:"7px 0px 0px 7px"}}>
          <Button class='pri_btn'>DELIVER HERE</Button> 
          
          
            <Paymets handleChange={handleChange}  handleSubmit={handleSubmit}/>
            
        </Flex>

    </Box>
    <br/>
        <br/>

    </Box>
 
  )
}

export default Paymentform