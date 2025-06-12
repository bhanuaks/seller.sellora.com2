'use client';
import { useState, useEffect } from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';

const Multiselect = ({ variant, selectedVariants, setSelectedVariants, selectedOptions, setSelectedOptions }) => {
  // Transform variant data into options
  const options = Array.isArray(variant) 
    ? variant
        .filter(item => Array.isArray(item) && item.length > 0)
        .map((variantItem, index) => ({
          value: variantItem[0] || `option-${index}`,
          label: variantItem[0] || `Option ${index + 1}`,
        }))
    : [];


  const MAX_SELECTIONS = 2;

  const handleChange = (selected) => {
    if (selected.length <= MAX_SELECTIONS) {
      setSelectedOptions(selected); 
      const selectedValues = selected.map(option => option.value);
      if (setSelectedVariants) {
        setSelectedVariants(selectedValues);
      }
    }
  };

  useEffect(() => {
    console.log('Selected values:', selectedOptions);
  }, [selectedOptions]);

  if (!Array.isArray(variant) || variant.length === 0) {
    return (
      <div className="container ">
        <h3>Choose Variation</h3>
        <p className="text-gray-500">No Variation available</p>
      </div>
    );
  }

  return (
    <div className="container ">
       <label htmlFor="sku">
                                                  Choose Variation
                                                  <span></span>
                                                </label>
      <Select
        isMulti
        options={options}
        value={selectedOptions}
        onChange={handleChange}
        className="basic-multi-select"
        classNamePrefix="select"
        closeMenuOnSelect={selectedOptions.length >= MAX_SELECTIONS}
        isOptionDisabled={() => selectedOptions.length >= MAX_SELECTIONS}
        placeholder="Select variants..."
        noOptionsMessage={() => "No variants available"}
      />
    </div>
  );
};

Multiselect.propTypes = {
  variant: PropTypes.arrayOf(
    PropTypes.arrayOf(PropTypes.string)
  ),
  onSelectionChange: PropTypes.func,
};

Multiselect.defaultProps = {
  variant: [],
  onSelectionChange: null,
};

export default Multiselect;