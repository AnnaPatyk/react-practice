import React, { useContext, useEffect, useState } from 'react'
import { InputNumber } from 'antd';
import { Flex } from 'antd';
import { FilterProducts } from '../../context/FilterProducts';

export default function InputNumberFilter({onChangeMin ,onChangeMax,minValue,maxValue, min, max}) {
  
  return (
    <Flex gap="small" wrap>
      <InputNumber addonBefore={'від'} min={min} max={max} step={0.1} value={minValue} onChange={onChangeMin} />
       <InputNumber addonBefore={'до'} min={min} max={max} step={0.1} value={maxValue}  onChange={onChangeMax} />
    </Flex>
  )
}
