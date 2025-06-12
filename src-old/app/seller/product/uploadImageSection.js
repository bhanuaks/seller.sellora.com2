import { baseUrl } from '@/Http/helper'
import React, { useEffect, useRef, useState } from 'react'

const UploadImageSection = ({ variantData, 
    setVariantData,
    image, 
    setImage, 
    imagePath, 
    setImagePath,
    errors
  }) => {

  const imageRef = useRef(null);
  // const [image, setImage] = useState([])
  // const [imagePath, setImagePath] = useState([]);

  function handleChangeImage(e) {
    const file = e.target.files[0];
    if (file) {

      if (!file.type.startsWith("image/")) {
        alert("Only image files are allowed.");
        return;
      }

      if (file.size > 10 * 1024 * 1024) {
        //   check image size and alert 
        alert("Image size must be 10MB or smaller.");
            if (imageRef.current) {
                imageRef.current.value = "";
            }
            return;
        }

      setImage((prevImages) => [...prevImages, file]);
      const reader = new FileReader();
      reader.onload = () => {
        const img = new Image()

        img.onload =()=>{
          const width = img.width;
          const height = img.height;
          const aspectRatio =  width/height;
          const targetRatio = 4 / 4;

          if(width < 1000 ){
                alert("Image must be at least 1000px in width and height."); 
                if (imageRef.current) {
                    imageRef.current.value = "";  
                  
                }
                return
            }

        //   if(!(Math.abs(aspectRatio-targetRatio) < 0.01)){
        //     alert("Image does not have a 4:4 aspect ratio");
        //     if (imageRef.current) {
        //         imageRef.current.value = "";   
        //     }
        //     return
        // }

          setImagePath((prevPaths) => [...prevPaths, reader.result]);
            if (imageRef.current) {
              imageRef.current.value = ""; 
            }
        }
        img.onerror=()=>{
          alert("Error loading image. Please select a valid image file.");
        }
        img.src = reader.result;

      };
      reader.readAsDataURL(file);
      
    } 
  }

  // delete image
  function deleteImage(e, index) {
    e.preventDefault();
    const updatedImage = image.filter((_, i) => i !== index);
    const updatedImagePath = imagePath.filter((_, i) => i !== index);
    setImage(updatedImage)
    setImagePath(updatedImagePath)

  }



  useEffect(() => {
    
      setVariantData((oldData) => ({
        ...oldData,
        image_1: image[0] || null,
        image_2: image[1] || null,
        image_3: image[2] || null,
        image_4: image[3] || null,
        image_5: image[4] || null,
        image_6: image[5] || null,
        image_7: image[6] || null,
      }))
    
  }, [image.length])

  return (
    <div className="uploaded_images">
      <div className="uplaod_image_heading">
        <h2>Uploaded Variant Images <span>*</span> <small style={{fontSize:'12px'}}>(upload max 7 images)</small> </h2>
      </div>
      <div className="row">
        {imagePath.length > 0 ? imagePath.map((img, index) => (
          <div className="col-lg-2" key={index}>
            <div className="image_box">
              <div className="remove">
                <a href="#" onClick={(e) => deleteImage(e, index)}>
                  <i className="far fa-trash-o" />
                </a>
              </div>
              <img src={`${img}`} alt='' />
            </div>
          </div>
        )) : null}


        {imagePath.length < 7 ? (
          <div className="col-lg-2">
            <a href="#" >
              <div className="add_image_box">
                <label htmlFor='image_1'><div>
                  <input type="file" name="image_1" id="image_1" hidden
                    accept='image/jpg, image/jpeg, image/png'
                    ref={imageRef}
                    onChange={(e) => handleChangeImage(e)}
                  />
                  <div className="add_content">
                    <i className="far fa-plus" />
                  </div>
                  <div>Add image </div>
                </div>
                </label>
              </div>
            </a>
          </div>
        ) : null}

{errors.image && ( 
                                        <span className='error_message'>{errors.image}</span>
                                    )}

                                    {errors.image_1 && ( 
                                        <span className='error_message'>{errors.image_1}</span>
                                    )}
                                    {errors.image_2 && ( 
                                        <span className='error_message'>{errors.image_2}</span>
                                    )}
                                    {errors.image_3 && ( 
                                        <span className='error_message'>{errors.image_4}</span>
                                    )}
                                    {errors.image_4 && ( 
                                        <span className='error_message'>{errors.image_4}</span>
                                    )}
      </div>
    </div>

  )
}

export default UploadImageSection