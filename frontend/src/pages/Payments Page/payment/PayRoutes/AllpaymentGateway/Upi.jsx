import React from 'react'
import { Button, Heading, Select ,Flex,Image,Box,Input} from '@chakra-ui/react'

const Upi = () => {
  return (
    <div>
           <Heading sx={{ fontSize: "16px", color: "rgb(0, 75, 142)", padding: "0px 200px 10px 0px", fontWeight: "700", borderBottom: "1px solid rgb(209, 209, 209)" }}>Select Payment Method</Heading>

<p>Select Wallet</p>

<br />

<Input placeholder='Please Enter Your UPI ID' />
<p>The UPI Id is in the format of name / mobile number@bankname</p>

<br />
<p className='pin_pr'>*Clicking on “Pay” will take you to a secure payment gateway where you can make your payment.
    Your order will not be completed without this action</p>
<br />
<label for="checkboxLabel" id="RIL_PDPCompare">
    <input type="checkbox" id="checkboxLabel" /> I agree to the <p>Terms & Conditions</p></label>
<br />
<a href="https://pages.razorpay.com/pl_KeqWYMYZZpaMjV/view"> <Button class='p_riya'>Pay Rs. 19999 </Button></a>
    </div>
  )
}

export default Upi