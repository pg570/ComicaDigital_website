import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Allitemspage from '../pages/Product Page/Allitemspage'
import CartPage from '../pages/Product Page/CartPage/CartPage'
import Catogarybar from '../pages/Product Page/Catogarybar'

const Allrouts = () => {
  return (
    <Box>
     <Catogarybar/>
    <Routes>
    <Route path={"/Allitems/:category"} element={<Allitemspage/>} />
    <Route path="/SingleProduct/:id" element={""} />
    <Route path="/Cart" element={<CartPage/>} />
    <Route path={"/payment"} element={""}/>
 
  </Routes>
  </Box>
  )
}

export default Allrouts
