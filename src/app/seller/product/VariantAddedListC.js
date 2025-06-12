import React from 'react';
import { baseUrl, getVariantAttribute } from '@/Http/helper';

const VariantAddedListC = ({ newVariants, deleteVariant, handleInputChange, editVariant, formRef }) => {
  return (
    <div className="form-container">
      <div className="form-group form-group2" id="appendVariant">
        <div style={{ maxWidth: "100%", overflowX: "scroll" }}>
          <table className="variant_list_table" style={{ width: '2000px' }}>
            <thead>
              <tr>
                <th>S.N.</th>
                <th>Product Id</th>
                <th>Product Id Type</th>
                <th>Condition Type</th>
                <th>SKU</th>
                <th>Listing Status</th>
                <th>Currency</th>
                <th>MSRP</th>
                <th>Consumer Sale Price</th>
                <th>Business Sale Price</th>
                <th>Variants</th> 
                <th>Stock</th> 
                <th>With Image</th>
                <th>Edit</th>
                {/* <th>Delete</th> */}
              </tr>
            </thead>
            <tbody>
              {newVariants.length > 0 ? (
                (() => {
                  let serialNumber = 0; 
                  return newVariants.map((variant, index) => {
                    if (variant.customAttributes ) {
                      serialNumber++; 
                      return (
                        <tr key={index}>
                          <td>{serialNumber}</td> 
                          <td>{variant.manual_product_id || '-'}</td>
                          <td>{variant.manual_product_id_type || '-'}</td>
                          <td>{variant.conditionType || '-'}</td>
                          <td>{variant.sku || '-'}</td>
                          <td>{variant.listingStatus==1?"Active":"Inactive"}</td>
                          <td>{variant.currency || '-'}</td>
                          <td>{variant.msrp || '-'}</td>
                          <td>{variant.consumerSalePrice || '-'}</td>
                          <td>{variant.businessSalePrice || '-'}</td>
                          <td>
                           
                            {Object.entries(variant.customAttributes).map((data, idx) => (
                              <div key={idx} style={{textAlign:"left",marginLeft:'10px'}}> 
                                <strong>{data[0]}:</strong> {data[1]}
                              </div>
                            ))}
                          </td>
                          
                          <td>{variant.stock || '-'}</td>
                          
                          <td>{variant.withImage || '-'}</td>
                          
                          <td>
                          <button onClick={() => {
                              editVariant(variant);
                              if(formRef.current){
                                formRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
                              }
                            }}>
                              Edit
                            </button>
                          </td>
                          {/* <td>
                            <button onClick={() => deleteVariant(variant._id)}>Delete</button>
                          </td> */}
                        </tr>
                      );
                    }
                    return null;
                  });
                })()
              ) : (
                <tr>
                  <td colSpan="14" style={{ textAlign: 'center' }}>
                    No variants added.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default VariantAddedListC;
