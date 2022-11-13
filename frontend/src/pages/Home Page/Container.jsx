import React, { useEffect } from 'react'
import { Box, Button, Grid, GridItem, Heading, Image } from "@chakra-ui/react";
import { SlideData } from "./SlideData";
import { MainSliderComp, MultiSliderAllItemsComp, MultiSliderComp } from "./SliderComp";
import { useDispatch,useSelector } from "react-redux"
import { getProductsAC, getProductsheadphones, getProductsSmartPhone, getProductsTV, getProductsWashingMachine, getProductsWatches } from '../../store/product/products.action';

const productsData = [
  {
    img: "https://www.reliancedigital.in/medias/Watch-180x180-27-02-2020.png?context=bWFzdGVyfGltYWdlc3w2Njk2fGltYWdlL3BuZ3xpbWFnZXMvaGQ1L2g2My85MjUzNTA3NTk2MzE4LnBuZ3w4NmEwODU5NDI5YzVlMzJjNzRlNzNlYmJkMmJmYTZjMTI2OWY0YTUxYWU3YzMzM2E3YTc5YjljZmU4ZGMyNGQ2",
    name: "Smart Wearables",
    category:"watches"
  },
  {
    img: "https://www.reliancedigital.in/medias/Explore-Our-Range-of-Products-Ref.png?context=bWFzdGVyfGltYWdlc3wxNDQwMXxpbWFnZS9wbmd8aW1hZ2VzL2hlZC9oMjQvOTg5MjQwNzUwOTAyMi5wbmd8NTc5ZWE5ZGEzYTYzODYwNDNlNTRhNjExZjcyZGI4NzQ1YmE0NDVjYmUwY2M3MzRiZjFkMWZmNDY3NTMxYjNkMA",
    name: "Refrigerators",
    category:"refrigerator"
  },
  {
    img: "https://www.reliancedigital.in/medias/Camera-180x180-15-01-2019.png?context=bWFzdGVyfGltYWdlc3w0MzE0OHxpbWFnZS9wbmd8aW1hZ2VzL2gzNi9oMGMvOTI1MTA1MDc0OTk4Mi5wbmd8NDMxMGMyNjg2M2I3ZDFhOTc4YjkzMTNhYWM1ZmU5YzRlMjc3Mzg4MDcxOTU1OGE0NzZjODczZWU3NTdhMTM0MA",
    name: "Cameras",
    category:"cameras"
  },
  {
    img: "https://www.reliancedigital.in/medias/Speaker-Headset-180x180-15-01-2019.png?context=bWFzdGVyfGltYWdlc3wyNzUzN3xpbWFnZS9wbmd8aW1hZ2VzL2g1YS9oODAvOTI1MTA1MDY4NDQ0Ni5wbmd8YmMyYWJiNzRhMzk4NjMxMDRmOWRlZGI1MzVjZDk2Y2IxYTkxOGNlNjlmZjA2YTgwMGIwMjhmYTJlYmNhYjIwOA",
    name: "Speakers & Handsets",
    category:"speakers"
  },
  {
    img: "https://www.reliancedigital.in/medias/Explore-Our-Range-of-Products-AC.png?context=bWFzdGVyfGltYWdlc3wxNzI3NnxpbWFnZS9wbmd8aW1hZ2VzL2hmMy9oNDMvOTg5MjQwNzQ0MzQ4Ni5wbmd8ODkxZDlkYTUxODhkM2RiOWUzMTU4ZDZhYmVkYTM3MzE2MDEyNDEzODMzNWZlZWQ5ZDQwMzNmMWM1OTliZGYwZA",
    name: "Air Conditioners",
    category:"ac"
  },
  {
    img: "https://www.reliancedigital.in/medias/iphone-pro-11-01.png?context=bWFzdGVyfGltYWdlc3wyOTc3NnxpbWFnZS9wbmd8aW1hZ2VzL2gxNi9oNWUvOTI3NjA1OTkxMDE3NC5wbmd8MzdkYzljODgzMDcyM2ZjMjJmZDI2ZjMwNjhkZmU5YjFmOTJmMGRmOTFiYzc4ZjcyMDRhMjQ5MWMyNjYwOTgxYg",
    name: "SmartPhones",
    category:"smartphone"
  },
  {
    img: "https://www.reliancedigital.in/medias/Washing-Machine-180x180-15-01-2019.png?context=bWFzdGVyfGltYWdlc3wzNDU4MXxpbWFnZS9wbmd8aW1hZ2VzL2gzOC9oM2UvOTI1MTA1MDg4MTA1NC5wbmd8ZDAyZGNkMzU1MzE3N2E2OGFlOTliMzUyODZkYzlkNTc0NzFmODllY2JiZDVlNzdhYjg3MTgyMTc4ZGVhODA3ZA",
    name: "Washing Machines",
    category:"washing machine"
  },
  {
    img: "https://www.reliancedigital.in/medias/Laptop-180x180-15-01-2019.png?context=bWFzdGVyfGltYWdlc3wyOTAwOXxpbWFnZS9wbmd8aW1hZ2VzL2g0Mi9oNTYvOTI1MTA1MDYxODkxMC5wbmd8N2ZjYTg0ZDAyOTZmMmQ5OTZhZDNiM2M4NDg0ZDgxY2UyNzNjMmJiYzMwZTZiOGQwOWE5N2JlZDI4M2ViMGZjNw",
    name: "Laptops",
    category:"laptops"
  },
  {
    img: "https://www.reliancedigital.in/medias/TV-180x180-15-01-2019.png?context=bWFzdGVyfGltYWdlc3w0OTM4M3xpbWFnZS9wbmd8aW1hZ2VzL2g1ZC9oMTEvOTI1MTA1MDU1MzM3NC5wbmd8MThiNmU4NTZiNWI5MTE1ZGVjYjA4ZjIwM2QwZjUyMzFlOGExZTY0YmQ0MTRkYTkyN2M2MDZiYzUzZDY1ZjM4Ng",
    name: "Televisions",
    category:"tv"
  },
];

function Container() {
  const dispatch = useDispatch();
  const smartphone = useSelector(store=>store.productsSmartphone)
  const tv = useSelector(store=>store.productsTV)
  const washingMachine = useSelector(store=>store.productsWashingMachine)
  const watches = useSelector(store=>store.productsWatches)
  const headphones = useSelector(store=>store.productsHeadphones)
  const ac = useSelector(store=>store.productsAC)

  useEffect(()=>{
     dispatch(getProductsSmartPhone())
     dispatch(getProductsTV())
     dispatch(getProductsWashingMachine())
     dispatch(getProductsWatches())
     dispatch(getProductsheadphones())
     dispatch(getProductsAC())
  },[])

  // console.log(smartphone)
  return (
    <>
    <Box width={"100%"}>
          <Image
            src="https://www.reliancedigital.in/medias/20000-instant-Discount-Carousel-Banner-08-11-2022.jpg?context=bWFzdGVyfGltYWdlc3w2MDk0OXxpbWFnZS9qcGVnfGltYWdlcy9oZmUvaGIwLzk5MTgzMzc3NDQ5MjYuanBnfDAwMzE2Mjg3YmFlMGM4MzA3OGNhZWZkZmRjZDQ1NzVhMWUyNzkxMmNjYzI0MGQwMjNjNWRkMjcxMGQ2MGY4ZGY"
            margin={"auto"}
            width="100%"
          />
        </Box>
        <Box mb="30px">
          <MainSliderComp slides={SlideData} />
        </Box>
        <Box>
          <MultiSliderComp slides={smartphone.data} />
        </Box>
        <Box>
          <MultiSliderComp slides={tv.data}  />
        </Box>
        <Box>
          <MultiSliderComp slides={washingMachine.data}  />
        </Box>
        
        <Box>
          <Heading textAlign={"left"} fontSize="xl" p="30px">GREAT DEALS ON ELECTRONICS</Heading>
          <Grid templateColumns={{lg:'repeat(4, 1fr)',sm:'repeat(2, 1fr)'}} gap={6}>
            <GridItem>
              <Image src="https://www.reliancedigital.in/medias/Televisions-Small-Banners.jpg?context=bWFzdGVyfGltYWdlc3w4MTU1NXxpbWFnZS9qcGVnfGltYWdlcy9oNDEvaDYwLzk5MTM3Nzc1MjA2NzAuanBnfGIxMjNhZGFhN2FiYzVmMTRmNjExNDkyOTliNjZkYmNhNjk5NDI5Y2ZkODU2MmNjZmViMmQ3N2FlY2EyZDZjYjk"/>
            </GridItem>
            <GridItem>
              <Image src="https://www.reliancedigital.in/medias/Smartwatches-Small-Banners.jpg?context=bWFzdGVyfGltYWdlc3w0OTAwNHxpbWFnZS9qcGVnfGltYWdlcy9oNzUvaDMxLzk5MTM3Nzc2NTE3NDIuanBnfDc0ZjgyYjQzZjcxNGYxMWUxMDdkOTk1Y2RlNTg2MWJlMTdmMmJlYTcwNmUxN2NhNTAzM2JmZTQxNmFjNjgzYjU"/>
            </GridItem>
            <GridItem>
              <Image src="https://www.reliancedigital.in/medias/Washing-Machines-Small-Banners.jpg?context=bWFzdGVyfGltYWdlc3w0NDcwMHxpbWFnZS9qcGVnfGltYWdlcy9oNWIvaDUwLzk5MTM3Nzc3MTcyNzguanBnfGMyNWJhNDNiMTFkMjE4YmQ2OGRiMzdkMGIxNmZmZDhiYzViMTBjY2I1ZDllYzAyMWFjN2FlZTU1ZGVmMDk4MmU"/>
            </GridItem>
            <GridItem>
              <Image src="https://www.reliancedigital.in/medias/Printers-Small-Banners.jpg?context=bWFzdGVyfGltYWdlc3w1NjMwNnxpbWFnZS9qcGVnfGltYWdlcy9oZWIvaDRjLzk5MTM3Nzc1ODYyMDYuanBnfGZkMDA2YTU3ZTUxMGNjZTAwNjQxNmE3ZGZjNjg4NDI4NTE1ZDBhZWJhMThiZjMxMTJkNjdmMTliOWQ5ODdiNGY"/>
            </GridItem>
            <GridItem>
              <Image src="https://www.reliancedigital.in/medias/5G-smartphones-Small-Banners.jpg?context=bWFzdGVyfGltYWdlc3w1NjI5MXxpbWFnZS9qcGVnfGltYWdlcy9oYTkvaDMwLzk5MTYxNzg1NjMxMDIuanBnfGNjMTViZWY2NDViY2YyYmI4MTc3YzhlNWU3NDViYzAwOTAzYWRiYmRmNzI2YzYzYTcwYTA5ZjVlNjQxZWJkYmQ"/>
            </GridItem>
            <GridItem>
              <Image src="https://www.reliancedigital.in/medias/True-Wireless-Small-Banners.jpg?context=bWFzdGVyfGltYWdlc3w0NjcyOXxpbWFnZS9qcGVnfGltYWdlcy9oODAvaDljLzk5MTM3NzcyNTg1MjYuanBnfGY3MDIxZDZlYTBhMjEwYjQ4NGIzMmQwZjdjMzQ2M2FhYzIwYWE0NGE4MzFmYjRlZjQwNzFlZjk2NWMwMzYxN2Y"/>
            </GridItem>
            <GridItem>
              <Image src="https://www.reliancedigital.in/medias/Gaming-laptops-Small-Banners.jpg?context=bWFzdGVyfGltYWdlc3w1NzM3MHxpbWFnZS9qcGVnfGltYWdlcy9oYTIvaGRlLzk5MTM3Nzc0NTUxMzQuanBnfDYwNGRmMTk1MGM3YmVlMjc5MTkzYjRmNTgzMWNjYjZmOGM3NTdhMzY5Njk1OTEwYWVkYWVhOTUzYTk2ZTFjZWY"/>
            </GridItem>
            <GridItem>
              <Image src="https://www.reliancedigital.in/medias/Winter-Appliances-Small-banners.jpg?context=bWFzdGVyfGltYWdlc3w2ODA0M3xpbWFnZS9qcGVnfGltYWdlcy9oYTUvaDhmLzk5MTM3NzczMjQwNjIuanBnfDdjMTE5YzUzNjcyODZiNDljNGJlNDMzZTNkNGI5Nzg2ZjlhOTg0YmFhYTViOTZmOTFkNmY1MWRlZGQ4NWY5ZDY"/>
            </GridItem>
          </Grid>
        </Box>
        <Box>
          <MultiSliderComp slides={watches.data} />
        </Box>
        <Box>
          <MultiSliderComp slides={headphones.data} />
        </Box>
        <Box>
          <MultiSliderComp slides={ac.data} />
        </Box>
        <Box bgColor={"#f7f7f7"}>
          <Box p="20px 30px">
            <Heading fontSize={"2xl"}>EXPLORE OUR RANGE OF PRODUCTS</Heading>
          </Box>
          <Box>
            <MultiSliderAllItemsComp slides={productsData} />
          </Box>
          <Button
            size={"lg"}
            color="white"
            _hover={{ color: "black", bgColor: "#f7f7f7" }}
            bgColor={"#003380"}
            borderRadius="50px"
          >
            View All
          </Button>
        </Box>
</>
  )
}

export default Container