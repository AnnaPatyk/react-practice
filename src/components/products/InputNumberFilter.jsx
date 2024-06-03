import React, { useState } from 'react'
import { InputNumber } from 'antd';
import { Button, Flex } from 'antd';

export default function InputNumberFilter() {
   const [minValue, setMinValue] = useState(1);
   const [maxValue, setMaxValue] = useState(10)
  const onChangeMin = (value) => {
   setMinValue(value)
};
  const onChangeMax = (value) => {
   setMaxValue(value)
};
console.log(minValue)
  return (
    <Flex gap="small" wrap>
      <InputNumber addonBefore={'від'} min={1} max={10} defaultValue={1}   onChange={onChangeMin} />
       <InputNumber addonBefore={'до'} min={1} max={10} defaultValue={10} onChange={onChangeMax} />
       <Button type="primary">Пошук</Button>
    </Flex>
  )
}
