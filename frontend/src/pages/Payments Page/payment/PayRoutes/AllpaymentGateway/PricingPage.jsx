import { Button, Heading, Select } from '@chakra-ui/react'
import React from 'react'

const PricingPage = () => {
    return (
        <div>
            <Heading sx={{ fontSize: "16px", color: "rgb(0, 75, 142)", padding: "0px 200px 10px 0px", fontWeight: "700", borderBottom: "1px solid rgb(209, 209, 209)" }}>Select Payment Method</Heading>

            <p>Select Wallet</p>

            <br />

            <Select sx={{ padding: "0px 90px", widht: "100%" }} placeholder='Select a Wallet'>

                <option value='option1'>Phone Pay</option>
                <option value='option2'>Jio Money</option>
                <option value='option3'>Free Charge</option>
                <option value='option1'>ITZ Cash Card</option>
                <option value='option2'>PayTM Wallet</option>
                <option value='option3'>Oxygen Wallet</option>
            </Select>
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

export default PricingPage