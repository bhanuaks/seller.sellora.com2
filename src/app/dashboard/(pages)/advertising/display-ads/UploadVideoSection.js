import React from 'react'

function UploadVideoSection({fileRef, hendleInputChangeInput, campaign}) {
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
                      accept="video/*"
                      name="fileUrl"
                      onChange={(e) => hendleInputChangeInput(e)}
                    />
    
                    <div>
                      <div className="adfor_boxs1">
                        <h4>Upload Image</h4>
                        <div className="box-img py-5">
                          

                              <video
                                        className="iframeVideo"
                                        controls
                                        autoPlay={false}
                                        src={campaign.fileUrlPath}
                                        style={{ width: "100%", height: "auto" }}
                                        />
                           
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
                      accept="video/*"
                      name="fileUrl"
                      onChange={(e) => hendleInputChangeInput(e)}
                    />
    
                    <label htmlFor="fileRef"  style={{ width: "100%" }}  >
                      <div className="adfor_boxs1" htmlFor="fileRef">
                        <h4>Upload Image</h4>
                        <div className="box-img py-5">
                          <i className="fa-solid fa-play vdAd" />
                          <p className="mt-1">Upload</p>
                        </div>
                      </div>
                    </label>
                  </div>
                )}


        {/* <div className="col-lg-6 col-12">
          <div className="adfor_boxs1">
            <h4>Upload Video</h4>
            <div className="box-img py-5">
              <i className="fa-solid fa-play vdAd" />
              <p className="mt-1">Upload</p>
            </div>
          </div>
        </div> */}
        <div className="col-lg-4 col-12">
          <div className="adfor_boxs1 vidAud">
            <p className="mb-2">See video guideline</p>
            <strong>Video</strong>
            <ul>
              <li>Aspect Ratio: 16:9</li>
              <li>Resolution: 1920x1080 (min)</li>
              <li>Length: 6-45 sec</li>
              <li>File Size: Max 200MB</li>
              <li>Format: H.264, MPEG-2, MPEG-4</li>
              <li>Frame Rate: 23.976, 24, 25, 29.97, 29.98, 30 fps</li>
              <li>Bitrate: 1 Mbps (min)</li>
            </ul>
            <strong>Audio</strong>
            <ul>
              <li>Language: Matches ad locale</li>
              <li>Sample Rate: 44.1kHz or 48kHz</li>
              <li>Codec: PCM or AAC</li>
              <li>Bitrate: 96 kbps (min)</li>
              <li>Format: Stereo or mono</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UploadVideoSection