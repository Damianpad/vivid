import React, { useState } from "react";
import { StyledFilterSelector } from "./FilterSelector.style";
import Select from 'react-select';

const options = [
    { value: 'lead', label: 'Lead' },
    { value: 'client', label: 'Client' },
    { value: 'other', label: 'Other' },
  ];

export default function FilterSelector(){
// Dark Purple
const main = `#212840`
// Light Green
const secondary = `#73cba9`
// Dark DARK Purple
const dark = `#16192b`
// Dark Shadow
const shadow = '#080D2E'

const [selectedOption, setSelectedOption] = useState(null);

    return (
        <StyledFilterSelector>
            <Select
                styles={{
                    control: (baseStyles, state) => ({
                    ...baseStyles,
                    borderColor: `${secondary}`,
                    background: `${dark}`,
                    color: `white`,
                    width: `200px`
                    
                    }),
                    singleValue: (styles, { data }) => ({ ...styles, color: `white` }) 
                }}
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                options={options}
                className="filter"
            />
        </StyledFilterSelector>
    )
}