import {
  Button,
  Heading,
  Select,
  Image,
  Flex,
  Box,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const PricingPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();
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

      <p>Select Wallet</p>

      <br />

      <Select
        sx={{ padding: "0px 90px", widht: "100%" }}
        placeholder="Select a Wallet"
      >
        <option value="option1">Phone Pay</option>
        <option value="option2">Jio Money</option>
        <option value="option3">Free Charge</option>
        <option value="option1">ITZ Cash Card</option>
        <option value="option2">PayTM Wallet</option>
        <option value="option3">Oxygen Wallet</option>
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
      <Flex sx={{ gap: "10px" }}>
        <Box>
          <Button onClick={onOpen} class="p_riya">
            Pay Now{" "}
          </Button>

          <AlertDialog
            isOpen={isOpen}
            leastDestructiveRef={cancelRef}
            onClose={onClose}
          >
            <AlertDialogOverlay>
              <AlertDialogContent>
                <AlertDialogHeader fontSize="lg" fontWeight="bold">
                  Payment Successfull
                </AlertDialogHeader>

                <AlertDialogBody>
                  Thank You For Shopping in our website 😊
                </AlertDialogBody>

                <AlertDialogFooter>
                  <Link to="/">
                    <Button
                      ref={cancelRef}
                      colorScheme="red"
                      onClick={onClose}
                      ml={3}
                    >
                      OK
                    </Button>{" "}
                  </Link>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialogOverlay>
          </AlertDialog>
        </Box>

        <a href="https://pages.razorpay.com/pl_KeqWYMYZZpaMjV/view">
          <Image
            width="20%"
            sx={{ marginTop: "9px" }}
            src="data:image/png;base64,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"
          />
        </a>
      </Flex>
    </div>
  );
};

export default PricingPage;
