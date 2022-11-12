import { Checkbox } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { Itembrandfun } from '../../store/Itembrand/itembrand.Module'

const CheckBoxComp = (props) => {
//  let facilities = [];
let [checked,setchecked] =useState(false)

const dispatch = useDispatch()
const   handleChange = (name) => {
  setchecked(!checked)
    if(!checked) {
      // this.facilities.push(name)
      console.log(name)
      dispatch(Itembrandfun(name))
    }
    console.log(checked)//axios.post
  }

  return (
    <div>
    <Checkbox name={props.brand} onChange={()=>handleChange(props.brand)} isChecked={checked} > {props.brand}</Checkbox>

    </div>
  )
}

export default CheckBoxComp
