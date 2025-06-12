import React from 'react'

function UploadAdImageSection({fileRef, hendleInputChangeInput, campaign}) {
  return (
      <div className="container pt-80">
              <div className="row g-4">
                <div className="col-12">
                  <div className="outerhead1">
                    <h2>Choose how you'd like to customize your ad</h2>
                  </div>
                </div>
    
                {campaign?.fileUrlPath ? (
                  <div className="col-lg-6 col-12">
                    <input
                      type="file"
                      ref={fileRef}
                      id="fileRef"
                      style={{ display: "none" }}
                      accept=".jpg, .jpeg, .png"
                      name="fileUrl"
                      onChange={(e) => hendleInputChangeInput(e)}
                    />
    
                    <div>
                      <div className="adfor_boxs1">
                        <h4>Upload Image</h4>
                        <div className="box-img py-5">
                          <img src={campaign?.fileUrlPath || ""} />
                          {/* <i className="fa-solid fa-images" /> */}
                          <label htmlFor="fileRef">
                            <span className="mt-1">Change</span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="col-lg-6 col-12">
                    <input
                      type="file"
                      ref={fileRef}
                      id="fileRef"
                      style={{ display: "none" }}
                      accept=".jpg, .jpeg, .png"
                      name="fileUrl"
                      onChange={(e) => hendleInputChangeInput(e)}
                    />
    
                    <label htmlFor="fileRef"  style={{ width: "100%" }}  >
                      <div className="adfor_boxs1" htmlFor="fileRef">
                        <h4>Upload Image</h4>
                        <div className="box-img py-5">
                          <i className="fa-solid fa-images" />
                          <p className="mt-1">Upload</p>
                        </div>
                      </div>
                    </label>
                  </div>
                )}
    
                <div className="col-lg-4 col-12">
                  <div className="adfor_boxs1">
                    <h4>Image specs</h4>
                    <p className="mb-0">See image guideline</p>
                    <ul className="img-specs">
                      <li>Image size: 1100 x 576 px or large</li>
                      <li>File size: 5MB or smaller</li>
                      <li>7 File format: PNG or JPEG</li>
                      <li>
                        Content: No text, graphics, or logo added to the image
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
  )
}

export default UploadAdImageSection