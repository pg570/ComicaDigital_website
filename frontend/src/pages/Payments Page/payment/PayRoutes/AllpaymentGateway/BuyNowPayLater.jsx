import React from 'react'
import { Button, Heading, Select } from '@chakra-ui/react'

const BuyNowPayLater = () => {
  return (
    <div>
             <Heading sx={{ fontSize: "16px", color: "rgb(0, 75, 142)", padding: "0px 200px 10px 0px", fontWeight: "700", borderBottom: "1px solid rgb(209, 209, 209)" }}>Select Payment Method</Heading>

<p>Select Wallet</p>

<br />

<Select sx={{ padding: "0px 90px", widht: "100%" }} placeholder='Select a Provider'>

    <option value='option1'>Simpl</option>
  
 
</Select>
<br />
<p className='pin_pr'>*You need to be pre-registered on these providers to facilitate transaction</p>

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

export default BuyNowPayLater