import React, { useEffect, useState } from 'react'
import { RadioGroup, RadioGroupItem } from './ui/radio-group'
import { Label } from './ui/label'
import { useDispatch } from 'react-redux'
import { setSearchedQuery } from '@/redux/jobSlice'

const fitlerData = [
    {
        fitlerType: "Location",
        array: ["Noida", "Bangalore", "Hyderabad", "Pune", "Mumbai"]
    },
    {
        fitlerType: "Industry",
        array: ["Frontend Developer", "Software Developer", "Business Analyst"]
    },
    
        
]

const FilterCard = () => {
    const [selectedValue, setSelectedValue] = useState('');
    const dispatch = useDispatch();
    const changeHandler = (value) => {
        setSelectedValue(value);
    }
    useEffect(()=>{
        dispatch(setSearchedQuery(selectedValue));
    },[selectedValue]);
    return (
        <div className='w-full bg-white p-3 rounded-md'>
            <h1 className='font-bold text-lg'>Filter Jobs</h1>
            <hr className='mt-3' />
            <RadioGroup value={selectedValue} onValueChange={changeHandler}>
                {
  fitlerData.map((data, index) => (
    <div key={index}> {/* ✅ Add key here */}
      <h1 className='font-bold text-lg'>{data.fitlerType}</h1>
      {
        data.array.map((item, idx) => {
          const itemId = `id${index}-${idx}`;
          return (
            <div key={itemId} className='flex items-center space-x-2 my-2'> {/* ✅ Add key here */}
              <RadioGroupItem value={item} id={itemId} />
              <Label htmlFor={itemId}>{item}</Label>
            </div>
          );
        })
      }
    </div>
  ))
}

            </RadioGroup>
        </div>
    )
}

export default FilterCard