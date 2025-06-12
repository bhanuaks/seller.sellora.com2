import React from 'react'
 
const VariantAddedLIst = () => {
  return (
    <div className="form-container">
    <div
      className="form-group form-group2"
      id="appendVariant"
    >
      {/* <div className="col-md-12">
        <a
          style={{ color: "red", float: "right" }}
          onclick="addMore()"
        >
          + Add more
        </a>
      </div> */}
      {/* <div className="scrolling-wrapper row flex-row flex-nowrap"> */}
        <div style={{maxWidth:"100%", overflowX:"scroll"}}>
      <table className='variant_list_table' style={{width:'2000px'}} >
        <thead>
            <tr>
                <th>S.N.</th>
                <th>SKU</th>
                <th>Listing Status</th>
                <th>MSRP </th>
                <th>Consumer Sale Price</th>
                <th>Business Sale Price</th>
                <th>Currency </th>
                <th>Fullfilment By</th>
                <th>Shipping Provider</th>
                <th>Stock</th>
                <th>Color</th>
                <th>Size</th>
                <th>Package Breadth</th>
                <th>Package Height</th>
                <th>Package Weight</th>
                <th>Tax Code</th>
                <th>Tax Rate</th>
                <th>Edit</th>
                <th>Delete</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>value1</td>
                <td>value1</td>
                <td>value1</td>
                <td>value1</td>
                <td>value1</td>
                <td>value1</td>
                <td>value1</td>
                <td>value1</td>
                <td>value1</td>
                <td>value1</td>
                <td>value1</td>
                <td>value1</td>
                <td>value1</td>
                <td>value1</td>
                <td>value1</td>
                <td>value1</td>
                <td><i className="fas fa-edit"/></td> 
                <td><i className="fas fa-trash-alt" /></td>
            </tr>
        </tbody>
      </table>
      </div>
       
    </div>
  </div>
  )
}

export default VariantAddedLIst