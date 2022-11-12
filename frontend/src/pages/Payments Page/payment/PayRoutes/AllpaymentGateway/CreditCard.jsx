import React from "react";
import { Button, Heading, Select, Flex, Image, Box } from "@chakra-ui/react";

const CreditCard = () => {
  return (
    <div>
      <Flex>
        {" "}
        <Heading
          sx={{
            fontSize: "16px",
            color: "rgb(0, 75, 142)",
            padding: "0px 200px 10px 0px",
            fontWeight: "700",
            borderBottom: "1px solid rgb(209, 209, 209)",
          }}
        >
          Select Payment Method
        </Heading>
        <Box>
          <Image
            widht="20%"
            src="https://www.reliancedigital.in/build/client/images/debit-card-icons.png"
          />
        </Box>
      </Flex>

      <p>Payment Option</p>

      <br />

      <Select
        sx={{ padding: "0px 90px", widht: "100%" }}
        placeholder="Select a Bank"
      >
        <option value="option1">Bank Of Maharastra</option>
        <option value="option2">State Bank Of India </option>
        <option value="option3">Union Bank</option>
        <option value="option1">Punjab National Bank</option>
        <option value="option2">HDFC Bank</option>
        <option value="option3">Axis Bank</option>
      </Select>
      <br />
      <p className="pin_pr">
        *Clicking on “Pay” will take you to a secure payment gateway where you
        can make your payment. Your order will not be completed without this
        action
      </p>
      <br />
      <label for="checkboxLabel" id="RIL_PDPCompare">
        <input type="checkbox" id="checkboxLabel" /> I agree to the{" "}
        <p>Terms & Conditions</p>
      </label>
      <br />
      <a href="https://pages.razorpay.com/pl_KeqWYMYZZpaMjV/view">
        {" "}
        <Button class="p_riya">Pay Rs. 19999 </Button>
      </a>
    </div>
  );
};

export default CreditCard;