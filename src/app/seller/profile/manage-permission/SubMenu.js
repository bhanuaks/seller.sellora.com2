'use client'
import React, { useEffect, useState } from 'react'

function SubMenu({list, token}) {
  
  
  
  
      
      {list && list.map((subList, index) => {
        
        return (
          <>
          
          <tr className="winner__table" key={`sub-menu-${index}`}>
                <td>
                  <div className="content_p2">
                    {subList.name} {" "}
                    <span
                      className="tooltiptext"
                      data-tooltip="Success Hub Pricing Suggestions"
                    >
                      {" "}
                      <i className="far fa-exclamation-circle" />
                    </span>{" "}
                  </div>
                </td>
                <td>
                  <div className="text-center">
                    <label className="radio-container_120">
                      <input type="radio" name="group" defaultChecked="checked" />
                    </label>
                  </div>
                </td>
                <td>
                  <div className="text-center">
                    <label className="radio-container_120">
                      <input type="radio" name="group" />
                    </label>
                  </div>
                </td>
                <td>
                  <div className="text-center">
                    <label className="radio-container_120">
                      <input type="radio" name="group" />
                    </label>
                  </div>
                </td>
                <td />
              </tr>
              </>

        )
      })}
      
    
}

export default SubMenu