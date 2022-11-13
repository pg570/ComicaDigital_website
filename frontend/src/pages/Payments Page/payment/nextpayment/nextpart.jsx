import { Box, Text, Button, Flex, Heading, Checkbox } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
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

// import { CheckCircleIcon } from "@chakra-ui/icons";
// import { Select } from "@chakra-ui/react";
// import { useContext } from "react";
// import { useBoolean } from "@chakra-ui/react";
// import { AppProvider } from "../context/Context";
import { Link } from "react-router-dom";
import PaymetRoutes from "../PayRoutes/PaymetRoutes";

import axios from "axios";

const Nextpayment = () => {
  // const { data } = useContext(AppProvider);
  // console.log(data, "me data hu");
 
  const [address, setAddress] = useState([]);
  const [product, setProduct] = useState([]);


  async function getProduct(){
    
    try {
      let res = await axios.get("https://comicadigitalbackend.up.railway.app/api/products/category/636d17107a76c29165e5ca37");

      // console.log(res.data);
       setProduct(res.data);
      // setData(res.data);
    } catch (e) {
      console.log(e.message);
    }
  }
  getProduct()
  console.log(product)



  
  async function getData(){
    
    try {
      let res = await axios.get("https://comicadigitalbackend.up.railway.app/api/addresses/userId/636d17107a76c29165e5ca37");

      // console.log(res.data);
       setAddress(res.data);
      // setData(res.data);
    } catch (e) {
      console.log(e.message);
    }
  }



  useEffect(() => {
    getData()

  }, [address]);
  return (
    <Box sx={{ backgroundColor: "#f5f7f7", height: "auto", padding: "70px" }}>
     {
      address.map((data)=>{
        return(
          <>
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
          </>
        )
      })
     }
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
        <Flex >
          <Checkbox size="xl" colorScheme="blue" defaultChecked>
            <h4>ORDER DETAILS</h4>
          </Checkbox>
        </Flex>


        <div className="pr_diff">
          <Flex >
<Box> <div class="swag_priya">
             Hammer Sting 3 Bluetooth Wireless Neckband Earphone With Sweat-Proof And Deep Bass, Black Red With 1 Year Warranty
          </div></Box>
         
         
          <Box></Box>
          <div className="pr_diffs">
          <div class="swag_priya">Qty:1</div>
          </div>
          
          <div className="pr_diffs">
          <div class="swag_priya">Price:1</div>
</div>
       
          </Flex>
        </div>

        <br />

       

      

      
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
