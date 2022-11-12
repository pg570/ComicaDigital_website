import React from "react";
import { Button, Heading, Select, Flex, Image } from "@chakra-ui/react";

const NetBanking = () => {
  return (
    <div>
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

      <p>Popular Banks</p>
      <br />
      <Flex sx={{ width: "20%", gap: "30px" }}>
        <Image src="https://www.reliancedigital.in/medias/axisbank.jpg?context=bWFzdGVyfGltYWdlc3wyMjUxfGltYWdlL2pwZWd8aW1hZ2VzL2hiNC9oNzAvODg5OTQ3NjY4NDgzMC5qcGd8YWQ1YzllMmMzM2Y5YTgyODAxYzJlZTk0MWZhMzhjYmRmMjFjYTQ0NWZlNjMxNGExZjVjMTM5YjVjMGZmNmY1MQ" />
        <Image src="https://www.reliancedigital.in/medias/Payment-Kotak-Logo.jpg?context=bWFzdGVyfGltYWdlc3w1NTIwfGltYWdlL2pwZWd8aW1hZ2VzL2gyNi9oOTMvOTYxMTY3MTQwNDU3NC5qcGd8MDA5MGMwNWZjOTFiODlhODFkNDkzMTA5YmE1Yzg1OGY0MDY0MjMxZjRkODFhZDc4ZTk0OTRlMmExYzkxN2I5OQ" />
        <Image src="https://www.reliancedigital.in/medias/SBI-Card-Logo.jpg?context=bWFzdGVyfGltYWdlc3w0MTE0fGltYWdlL2pwZWd8aW1hZ2VzL2gyYS9oZTAvOTYwMDUzNjQ3NzcyNi5qcGd8MDEyYjA5NDFmODJhYWUxOWFlMTRkYzcxNDgwOTg4NTc1M2I4YzllM2U4ZDRiNzBiMjRhYzRjMGYxZmRmMzFiMw" />
      </Flex>

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

export default NetBanking;
