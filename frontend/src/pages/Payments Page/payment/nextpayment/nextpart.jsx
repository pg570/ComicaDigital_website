import { Box, Text, Button, Flex, Heading, Checkbox } from "@chakra-ui/react";
import React from "react";
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  Icon,
  UnorderedList,
  Radio,
  RadioGroup,
} from "@chakra-ui/react";

import { CheckCircleIcon } from "@chakra-ui/icons";
import { Select } from "@chakra-ui/react";
import { useContext } from "react";
import { useBoolean } from "@chakra-ui/react";
import { AppProvider } from "../context/Context";
import { Link } from "react-router-dom";
import PaymetRoutes from "../PayRoutes/PaymetRoutes";
import CreditCard from "../PayRoutes/AllpaymentGateway/CreditCard";
import NetBanking from "../PayRoutes/AllpaymentGateway/NetBanking";
import Upi from "../PayRoutes/AllpaymentGateway/Upi";

const Nextpayment = () => {
  const { data } = useContext(AppProvider);
  console.log(data, "me data hu");
  const [flag, setFlag] = useBoolean();
  return (
    <Box sx={{ backgroundColor: "#f5f7f7", height: "auto", padding: "70px" }}>
      <Box
        sx={{
          width: "95%",
          height: "auto",
          borderRadius: "8px",
          backgroundColor: "#e7e9e9",
          border: "1px solid #dddddd",
          padding: "20px",
          textAlign: "start",
          margin: "auto",
        }}
      >
        <Flex>
          <Checkbox size="xl" colorScheme="blue" defaultChecked>
            <h4>SHIPPING ADDRESS</h4>
          </Checkbox>
        </Flex>
        <br />

        <h6 class="owl_schl">
          {data.firstname} {data.lastname}
        </h6>

        <Text
          sx={{
            marginLeft: "13px",
            color: "black",
            fontSize: "15px",
            paddingTop: "5px",
          }}
        >
          {data.address}, {data.city}, {data.city}-{data.pincode}, {data.state}
        </Text>

        <Text
          sx={{
            marginLeft: "13px",
            color: "black",
            fontSize: "15px",
            paddingTop: "5px",
          }}
        >
          <b id="spcl_b">Mobile : </b> {data.mobile}{" "}
        </Text>
        <br />
        <br />
      </Box>
      <br />
      <Box
        sx={{
          width: "95%",
          height: "auto",
          borderRadius: "8px",
          backgroundColor: "#e7e9e9",
          border: "1px solid #dddddd",
          padding: "20px",
          textAlign: "start",
          margin: "auto",
        }}
      >
        <Flex>
          <Checkbox size="xl" colorScheme="blue" defaultChecked>
            <h4>ORDER DETAILS</h4>
          </Checkbox>
        </Flex>

        <br />

        <h6 class="owl_schl">Priya Rajawat</h6>

        <Text
          sx={{
            marginLeft: "13px",
            color: "black",
            fontSize: "15px",
            paddingTop: "5px",
          }}
        >
          123,address,city,city-pincode,state
        </Text>

        <Text
          sx={{
            marginLeft: "13px",
            color: "black",
            fontSize: "15px",
            paddingTop: "5px",
          }}
        >
          <b id="spcl_b">Mobile : </b>1234567890
        </Text>
        <br />
        <br />
      </Box>
      <br />
      <br />
      <br />
      <br />

      <Box
        sx={{
          textAlign: "start",
          backgroundColor: "white",
          widht: "90%",
          height: "auto",
          padding: "20px 0px 20px 0px",
          border: "1px solid black",
        }}
      >
        <h4 id="ha_havp">PAY SECURILY</h4>

        <Flex>
          <Box
            sx={{
              borderRight: "1px solid #adadad ",
              padding: "0px 10px 0px 0px",
            }}
          >
            <RadioGroup defaultValue="1">
              <List spacing={3}>
                <Box
                  sx={{
                    padding: "10px",
                    border: "1px solid #e7e9e9  ",
                    cursor: "pointer",
                  }}
                >
                  <ListItem sx={{ cursor: "pointer" }}>
                    <Radio size="md" colorScheme="blue">
                      <Link to="/nextpayment/credit">Credit Card</Link>
                    </Radio>
                  </ListItem>
                </Box>
                <Box
                  sx={{
                    padding: "10px",
                    border: "1px solid #e7e9e9 ",
                    cursor: "pointer",
                  }}
                >
                  <Link to="/nextpayment/netbanking">
                    <ListItem sx={{ cursor: "pointer" }}>
                      <Radio size="md" colorScheme="blue">
                        Net Banking
                      </Radio>
                    </ListItem>
                  </Link>
                </Box>
                <Box
                  sx={{
                    padding: "10px",
                    border: "1px solid #e7e9e9",
                    cursor: "pointer",
                  }}
                >
                  <ListItem sx={{ cursor: "pointer" }}>
                    <Radio size="md" colorScheme="blue">
                      <Link to="/nextpayment/credit">Debit Card</Link>
                    </Radio>
                  </ListItem>
                </Box>
                <Box
                  sx={{
                    padding: "10px",
                    border: "1px solid #e7e9e9",
                    cursor: "pointer",
                  }}
                >
                  {/* You can also use custom icons from react-icons */}
                  <ListItem sx={{ cursor: "pointer" }}>
                    <Radio size="md" colorScheme="blue">
                      <Link to="/nextpayment/upi">UPI</Link>
                    </Radio>
                  </ListItem>
                </Box>
                <Box
                  sx={{
                    padding: "10px",
                    border: "1px solid #e7e9e9",
                    cursor: "pointer",
                  }}
                >
                  <ListItem sx={{ cursor: "pointer" }}>
                    <Radio size="md" colorScheme="blue">
                      <Link to="/nextpayment/wallet">Wallet </Link>
                    </Radio>
                  </ListItem>{" "}
                </Box>
                <Box
                  sx={{
                    padding: "10px",
                    border: "1px solid #e7e9e9",
                    cursor: "pointer",
                  }}
                >
                  <ListItem sx={{ cursor: "pointer" }}>
                    <Radio size="md" colorScheme="blue">
                      <Link to="/nextpayment/buynowpaylater">
                        BuyNow Pay Later
                      </Link>
                    </Radio>
                  </ListItem>
                </Box>
              </List>
            </RadioGroup>
          </Box>

          <Box sx={{ padding: "0px 200px 0px 20px" }}>
            <PaymetRoutes />
          </Box>

          {/* ***** */}
        </Flex>
      </Box>
    </Box>
  );
};

export default Nextpayment;
