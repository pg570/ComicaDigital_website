import { Box ,Flex,Heading,Image ,Input,Table,Text,Button, StylesProvider} from '@chakra-ui/react'
import React from 'react'
import  "./detail.css"
import Tables from './table'




const Detail = () => {
  return (
   <Box>
    <Box className="dev" >

        {/* ****1*** */}
        <Box h={["100"]} w={["100%"]} >
        <Image class="qimg" w={["40%"]} src="https://www.reliancedigital.in/medias/boAt-Stone-Grenade-Speaker-491893336-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w1MzI1MDl8aW1hZ2UvcG5nfGltYWdlcy9oMWYvaDI0Lzk3NzUyNzYwNjQ3OTgucG5nfDE1M2UxZjljY2Y2MDFmYWM4NGU1ZTUzNTdmMTQxOGIzNjExNzllY2MzODEzODBlNDMzOGMyYWE1OTMzYjFhMDg"/>

        </Box>
      

        {/* ****1*** */}
        <Box className='boat'>
            <h3>boAt Stone Grenade 5W Portable Wireless Speaker With Multiple Connectivity Modes, Up to 7H Playback, IPX6 Water and Splash Resistance and Rugged Shock Resistant Design, Black</h3>
            <span class="TextWeb__Text-sc-1cyx778-0 StarRating__StarRatingOuter-sc-1mfqajc-0 bpqZol eOeJGd"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-half-o"></i></span>
            <Box sx={{textAlign:"start",marginTop:"10px",paddingBottom:"20px",borderBottom:"1px solid #e5e5e5"}}>  <label  for="checkboxLabel" id="RIL_PDPCompare">
            <input type="checkbox" id="checkboxLabel" />  Add to Compare </label></Box>
          {/* ****2***** */}
          <Box sx={{display:"flex",marginTop:"10px"}}>
            <Box  className="qoffers">
                <Box  className="qoffers2">
                <h4>Gain more with offers (2)</h4>
                <ul >
                    <li>Shop for Rs.50,000 & above and Get Instant Discount Up To Rs.20,000. Read T&C</li>
                    <li>Get Cashback upto Rs. 1,000 on Mobikwik Wallet. Read T&C
</li>
                </ul>
                </Box>
               
                <Box className="qoffers2">
                <h4>Warranty</h4>
                <ul >
                    <li><b>warranty : </b> 1 Year manufacturer warranty</li>
                   

                </ul>

                </Box> <Box  className="qoffers2">
                <h4>Key Features</h4>
                <ul className='optimum' >
                    <li>Optimum Bluetooth experience V4.2 – Activate your day with good vibes made easy with Bluetooth V4.2, Exercise your right to good music with the highest of authority ; Bluetooth Version: 4.2V ; Wireless range: 10M ; Power Output (RMS): 5W ; Frequency Response: 70 HZ-18KHZ ; Impedance: 4 Ohms ; Charging Time: 2 hrs</li>
                  <br/>
                    <li>HD explosive sound – Blast your surroundings to bits with the boAt Stone Grenade RTL, Set into the sound and prime your senses for Nirvana. Set with a 1.75” full-range 5W driver, get ready to experience the sound
</li>
<br/>
<li>Sharp fabric coated IPX 6 finish – A compact build finished with rounded edges and even a strap made for easy carrying, IPX 6 water resistant as well as shockproof, this Grenade won’t explode until you need it to</li>
<br/>
                <li>Aligned easy access control – Experience audio Nirvana the right way with the integrated controls system making all your moves fluid, pause, play, change, and take a call with ease</li>
                <br/>
                </ul>
                </Box>
            
                <p>see more → →  </p>
                <Box className="qoffers2">
                <h4>Return Policy</h4>
                <ul >
                    <li>Items are eligible for return within 7 Days of Delivery. Read T&C</li>
                    <br/>
                    <li>All accessories, product & packaging need to be returned in original condition.</li>
                   

                </ul>
                <br/>
                <h4>Got Feedback to share on this page? <b>report here.</b> </h4>

                </Box> 

               

                </Box>
                <Box sx={{textAlign:"Start",marginLeft:"13px"}}>
                  <br/>
                  

                  <Flex sx={{gap:"3px"}}>
                    <h4 className='rajawat_p'>Deal Price :</h4>
                    <span class="pdp__offerPrice"><span>₹</span><span>24,990.00</span></span>
                  </Flex>
                  <Flex sx={{gap:"3px"}}>
                    <h4 >Offer Price: </h4>
                    <span class="odd"><span>₹</span><span>28,990.00</span></span>
                  </Flex>

                  <Flex sx={{gap:"3px"}}>
                    <h4 >MRP : </h4>
                    <span class="odd"><span>₹</span><span>70,990.00</span></span>
                  </Flex>
                  <li class="pdp__priceSection__priceListText pdp__savePrice">You Save: 65%(₹46,000)</li>
               
                  <li class="pdp__priceSection__priceListText_r">EMIs (Credit Cards) from ₹1199.84/month | <span class="pdp__emiLinkTextStyle">View Plans</span></li>
                   
                   <h4>FREE Shipping!</h4>

                   <br/>
                   <Input type="number" required="true" placeholder='PIN Code' />
                   <br/>

                   <Flex sx={{display:"flex",justifyContent:"space-around",marginTop:"20px"}}>
                    <Button id="add_cart">ADD TO CART</Button>
                    <Button id="by_n">BUY NOW</Button>
                   </Flex>
                </Box>

            

            

          </Box>
        </Box>
      

    </Box>



    <Box>
      <Flex sx={{marginLeft:"auto",gap:"10px",padding:"20px 0px 10px 20px",color:"black"}}>
       
       <h5>Description</h5>
       <h5>Specifications</h5>
       <h5>Customer Reviews</h5>

      </Flex>
      <br />
     <Image  sx={{marginLeft:"100px",height:"700px",willChange:"transform"}} src="https://www.reliancedigital.in/akamai/images/products/Iffalcon-55U71-Television-493179244-20.jpg"/>
     <br />
     <h6>* This Iffalcon 55U71 Television image is for illustration purpose only. Actual image may vary.</h6>
     <br />
     <Image sx={{marginLeft:"100px",height:"600px",willChange:"transform"}}  src="https://www.reliancedigital.in/akamai/images/products/Iffalcon-55U71-Television-493179244-21.jpg"/>
     <br />
     <Image  sx={{marginLeft:"100px",height:"700px",willChange:"transform"}} src="https://www.reliancedigital.in/akamai/images/products/Iffalcon-55U71-Television-493179244-22.jpg"/>
     <br />
     <h6>* This Iffalcon 55U71 Television image is for illustration purpose only. Actual image may vary.</h6>
     <br />
     <Image sx={{marginLeft:"100px",height:"600px",willChange:"transform"}}  src="https://www.reliancedigital.in/akamai/images/products/Iffalcon-55U71-Television-493179244-23.jpg"/>
     <br />
     <Image  sx={{marginLeft:"100px",height:"700px",willChange:"transform"}} src="https://www.reliancedigital.in/akamai/images/products/Iffalcon-55U71-Television-493179244-24.jpg"/>
     <br />
     <h6>* This Iffalcon 55U71 Television image is for illustration purpose only. Actual image may vary.</h6>
     <br />
     <Image sx={{marginLeft:"100px",height:"600px",willChange:"transform"}}  src="https://www.reliancedigital.in/akamai/images/products/Iffalcon-55U71-Television-493179244-25.jpg"/>
     <br />
     <Image sx={{marginLeft:"100px",height:"600px",willChange:"transform"}}  src="https://www.reliancedigital.in/akamai/images/products/Iffalcon-55U71-Television-493179244-27.jpg"/>
    
    
    </Box>
<br/>
    <Box sx={{borderTop:"1px solid #e5e5e5 ",marginLeft:"20px",borderBottom:"1px solid #e5e5e5 "}}>
   <Tables/>

    </Box>
    <br/>
    <Flex sx={{gap:"20px",marginLeft:"20px"}}>
      <Heading sx={{fontSize:"24px",fontWeight:"500"}}>Customer Reviews</Heading>
    <Text sx={{marginTop:"6px",fontSize:"16px",fontWeight:"500",color:"rgb(0, 51, 128)"}}>(IFFALCON 139.7 cm (55 Inch) Ultra HD (4K) Smart LED TV, 55U71)</Text>
     
    </Flex>
<br/>

   </Box>
  )
}

export default Detail