import { Box,Text ,Button,Flex, Heading, Checkbox} from '@chakra-ui/react'
import React from 'react'
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  Icon,
  UnorderedList,
  Radio,RadioGroup
} from '@chakra-ui/react'

import { CheckCircleIcon} from '@chakra-ui/icons'
import { Select } from '@chakra-ui/react'
import { useContext } from 'react'
import { AppProvider } from '../context/Context'
 

const Nextpayment = () => {
  const {data}=useContext(AppProvider)
  console.log(data,"me data hu")
  return (
    <Box sx={{backgroundColor:"#f5f7f7",height:"auto",padding:"70px"}}>
     
      <Box sx={{width:"95%",height:"auto",borderRadius:"8px",backgroundColor:"#e7e9e9",border:"1px solid #dddddd",padding:"20px",textAlign:"start",margin:"auto"}}>

      <Flex>
  <Checkbox size='xl' colorScheme='blue' defaultChecked>
  <h4>SHIPPING ADDRESS</h4>
  </Checkbox>
    
    </Flex>
<br/>

<h6 class="owl_schl">{data.firstname} {data.lastname}</h6>

<Text sx={{marginLeft:"13px",color:"black",fontSize:"15px",paddingTop:"5px"}}>{data.address}, {data.city}, {data.city}-{data.pincode},  {data.state}</Text>

<Text sx={{marginLeft:"13px",color:"black",fontSize:"15px",paddingTop:"5px"}}><b id="spcl_b">Mobile : </b> {data.mobile} </Text>
<br/>
<br/>




</Box>
<br/>
<Box sx={{width:"95%",height:"auto",borderRadius:"8px",backgroundColor:"#e7e9e9",border:"1px solid #dddddd",padding:"20px",textAlign:"start",margin:"auto"}}>

  <Flex>
  <Checkbox size='xl' colorScheme='blue' defaultChecked>
  <h4>ORDER DETAILS</h4>
  </Checkbox>
    
    </Flex>

<br/>

<h6 class="owl_schl">Priya Rajawat</h6>

<Text sx={{marginLeft:"13px",color:"black",fontSize:"15px",paddingTop:"5px"}}>123,address,city,city-pincode,state</Text>

<Text sx={{marginLeft:"13px",color:"black",fontSize:"15px",paddingTop:"5px"}}><b id="spcl_b">Mobile : </b>1234567890</Text>
<br/>
<br/>




</Box>
<br/>
<br/>
<br/>
<br/>

<Box sx={{textAlign:"start",backgroundColor:"white",widht:"90%",height:"400px",padding:"20px 0px",border:"1px solid black"}}>

<h4>PAY SECURILY</h4>
<Flex>
  <Box sx={{borderRight:"1px solid #adadad ",padding:"0px 10px 0px 0px"}}>
  <RadioGroup defaultValue='1'>
  <List spacing={3}>
    <Box sx={{padding:"10px",border:"1px solid #e7e9e9  ",cursor:"pointer"}}>
    <ListItem sx={{cursor:"pointer"}}>
  
   <Radio size='md'  colorScheme='blue'>
   Credit Card
   </Radio>
  </ListItem>
    </Box>
    <Box sx={{padding:"10px",border:"1px solid #e7e9e9 ",cursor:"pointer"}}>
  <ListItem sx={{cursor:"pointer"}}>

    
  <Radio size='md'  colorScheme='blue'>
  Net Banking
   </Radio>
  </ListItem>
  </Box>
  <Box sx={{padding:"10px",border:"1px solid #e7e9e9",cursor:"pointer"}}>
  <ListItem sx={{cursor:"pointer"}}>
 
  
   <Radio size='md'  colorScheme='blue'>
   Credit Card EMI
   </Radio>
  </ListItem>
  </Box>
  <Box sx={{padding:"10px",border:"1px solid #e7e9e9",cursor:"pointer"}}>
  {/* You can also use custom icons from react-icons */}
  <ListItem sx={{cursor:"pointer"}}>
   
    <Radio size='md'  colorScheme='blue'>
    UPI
   </Radio>
  
  </ListItem>
  </Box>
  <Box sx={{padding:"10px",border:"1px solid #e7e9e9",cursor:"pointer"}}>
  <ListItem sx={{cursor:"pointer"}}>
    
    <Radio size='md'  colorScheme='blue'>
   Wallet
  </Radio>
 
  </ListItem> </Box>
  <Box sx={{padding:"10px",border:"1px solid #e7e9e9",cursor:"pointer"}}>
    <a href=""><ListItem sx={{cursor:"pointer"}}>
  
    <Radio size='md'  colorScheme='blue'>
    BuyNow Pay Later
  </Radio>
  

  </ListItem></a>
  
  </Box>
</List>
</RadioGroup>

  </Box>
  <Box sx={{padding:"0px 200px 0px 20px"}}>
    <Heading sx={{fontSize:"16px",color:"rgb(0, 75, 142)",padding:"0px 200px 10px 0px",fontWeight:"700",borderBottom:"1px solid rgb(209, 209, 209)"}}>Select Payment Method</Heading>
    
    <p>Select Wallet</p>

    <br/>

    <Select sx={{padding:"0px 90px",widht:"100%"}} placeholder='Select a Wallet'>
  
  <option value='option1'>Phone Pay</option>
  <option value='option2'>Jio Money</option>
  <option value='option3'>Free Charge</option>
  <option value='option1'>ITZ Cash Card</option>
  <option value='option2'>PayTM Wallet</option>
  <option value='option3'>Oxygen Wallet</option>
</Select>
<br/>
<p className='pin_pr'>*Clicking on “Pay” will take you to a secure payment gateway where you can make your payment.
Your order will not be completed without this action</p>
<br/>
<label  for="checkboxLabel" id="RIL_PDPCompare">
            <input type="checkbox" id="checkboxLabel" /> I agree to the <p>Terms & Conditions</p></label>
            <br/>
           <a href="https://pages.razorpay.com/pl_KeqWYMYZZpaMjV/view"> <Button class='p_riya'>Pay Rs. 19999 </Button></a>
           
    </Box>
   
  
</Flex>

<img src=""/>
</Box>
    

    </Box>
  )
}

export default Nextpayment