import React from 'react'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'

const Tables = () => {
  return (
    <div>
 <TableContainer>
  <Table >

    <Thead >
      <Tr >
        <Th className='hene'>General Information</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr class='tr'>
        <Td>Series</Td>
    <Td >U71</Td>
      </Tr>
      <Tr>
        <Td>Model</Td>
    
        <Td >55U71</Td>
      </Tr>
      <Tr>
        <Td>Colour</Td>
      <Td >Black</Td>
      </Tr>
      <Tr>
        <Td>Brand</Td>
      <Td >Black</Td>
      </Tr>
    </Tbody>
   
  </Table>
 
  <Table >

<Thead >
  <Tr >
    <Th className='hene'>TV Display</Th>
  </Tr>
</Thead>
<Tbody>
  <Tr class='tr'>
    <Td> HDR</Td>
<Td >U71</Td>
  </Tr>
  <Tr>
    <Td>Yes</Td>

    <Td >55U71</Td>
  </Tr>
  <Tr>
    <Td>Contrast Ratio</Td>
  <Td >Black</Td>
  </Tr>
  <Tr>
    <Td>5000:1</Td>
  <Td >Black</Td>
  </Tr>

  <Tr>
    <Td>Response Time</Td>
  <Td >Black</Td>
  </Tr>
  <Tr>
    <Td>Refresh Rate</Td>
  <Td >Black</Td>
  </Tr>
  <Tr>
    <Td>TV Operating System</Td>
  <Td >Black</Td>
  </Tr>
</Tbody>

</Table>



<Table >

<Thead >
  <Tr >
    <Th className='hene'>SMART TV Features</Th>
  </Tr>
</Thead>
<Tbody>
  <Tr class='tr'>
    <Td>Preloaded Apps</Td>
<Td >
Netflix</Td>
  </Tr>

</Tbody>

</Table>



<Table >

<Thead >
  <Tr >
    <Th className='hene'>TV Audio Related</Th>
  </Tr>
</Thead>
<Tbody>
  <Tr class='tr'>
    <Td>Surround Sound Technology</Td>
<Td >Dolby Audio
</Td>
  </Tr>

</Tbody>

</Table>


<Table >

<Thead >
  <Tr >
    <Th className='hene'>TV Connectivity Choices</Th>
  </Tr>
</Thead>
<Tbody>
  <Tr class='tr'>
    <Td>Stream</Td>
<Td >
Yes</Td>
  </Tr>
  <Tr>
    <Td>Connect to DVD Players via</Td>

    <Td >
HDMI</Td>
  </Tr>
  <Tr>
    <Td>Wi-Fi</Td>
  <Td >Yes</Td>
  </Tr>
  <Tr>
    <Td>Additional side panel ports</Td>
  <Td >Yes</Td>
  </Tr>
</Tbody>

</Table>


<Table >

<Thead >
  <Tr >
    <Th className='hene'>Formats Supported</Th>
  </Tr>
</Thead>
<Tbody>
  <Tr class='tr'>
    <Td>No. of USB Ports</Td>
<Td >1</Td>
  </Tr>
  <Tr>
    <Td>No of HDMI Ports</Td>

    <Td >3</Td>
  </Tr>
  <Tr>
    <Td>USB</Td>
  <Td >Yes</Td>
  </Tr>
  <Tr>
    <Td>Connect to Home Theatre via</Td>
  <Td >Digital Optical, HDMI</Td>
  </Tr>
</Tbody>

</Table>

<Table >

<Thead >
  <Tr >
    <Th className='hene'>General Information</Th>
  </Tr>
</Thead>
<Tbody>
  <Tr class='tr'>
    <Td>Power</Td>
<Td >
AC 110V</Td>
  </Tr>
  <Tr>
    <Td>Model</Td>

    <Td >55U71</Td>
  </Tr>
  <Tr>
    <Td>Colour</Td>
  <Td >Black</Td>
  </Tr>
  <Tr>
    <Td>Brand</Td>
  <Td >Black</Td>
  </Tr>
</Tbody>

</Table>
</TableContainer>

    </div>
  )
}

export default Tables