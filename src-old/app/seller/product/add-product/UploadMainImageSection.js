import { baseUrl, main_thumb_img_path } from '@/Http/helper';
import React, { useEffect, useRef, useState } from 'react'
 

const UploadMainImageSection = ({ productDetails, 
    setProductDetails,  
    errors, setErrors }) => {

    const imageRef = useRef(null);
   
    
    function changeMainImage(e){
        const file = e.target.files[0];
        if(file){
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

                
                const reader = new FileReader();
                reader.onload = () => {
                    const img = new Image() 
                    img.onload =()=>{
                            const width = img.width;
                            const height = img.height;
                            const aspectRatio = width/height
                            const targetRatio = 4 / 4;
                            
                            if(width < 1000 ){
                                alert("Image must be at least 1000px in width and height.");
                                if (imageRef.current) {
                                    imageRef.current.value = "";  
                                   
                                }
                                return
                            }

                        // if(!(Math.abs(aspectRatio-targetRatio) < 0.01)){
                        //     alert("Image does not have a 4:4 aspect ratio");
                        //     if (imageRef.current) {
                        //         imageRef.current.value = "";  
                               
                        //     }
                        //     return
                        // }

                        setProductDetails((prevData) =>({
                            ...prevData,
                            main_image: file,
                            main_image_path:reader.result
                        }));
                        setErrors((prevError)=>{
                            const errorData = { ...prevError };  
                            delete errorData['main_image'];     
                            return errorData;
                        })
                        if (imageRef.current) {
                            imageRef.current.value = "";  
                           
                        }

                    };
                    img.onerror = () => {
                        alert("Error loading image. Please select a valid image file.");
                    };
        
                    img.src = reader.result;
                   

                }
                reader.readAsDataURL(file);
                
            };
           

            

    }

    // delete image
    function deleteImage(e, index){
        e.preventDefault();
        setProductDetails((prevData) =>({
            ...prevData,
            main_image: null,
            main_image_path:""
        }));
 
    }
 

    useEffect(()=>{
        if(productDetails && productDetails.main_image && typeof productDetails.main_image == "string"){
            setProductDetails((currentData)=>({
                ...currentData,
                main_image_path:`${baseUrl}${main_thumb_img_path}${productDetails.main_image}`
            }))
        }
    },[productDetails.main_image])
    
  
  
    
    return (
        <div className="uploaded_images">
            <div className="uplaod_image_heading">
                <h2>Uploaded Main Images<span>*</span> </h2>
            </div>
            <div className="row">
                
                
                    {productDetails.main_image_path && (
                            <div className="col-lg-12 image_box1_parent" >
                            <div className="image_box1">
                                <div className="remove">
                                    <a href="#" onClick={(e)=>deleteImage(e)} title='Remove image'>
                                        <i className="far fa-trash-o" />
                                    </a>
                                </div>
                                <img src={productDetails.main_image_path} alt='' />
                                 
                            </div>
                        </div>
                        )}

                        {!productDetails.main_image_path && (
                            <div className="col-lg-12" >
                                <a href="#" >
                                    <div className="add_image_box">
                                    <label htmlFor='main_image'>
                                        <div> 
                                        <input type="file" name="main_image"  id="main_image" hidden  
                                        accept='image/jpg, image/jpeg, image/png'
                                        ref={imageRef}
                                        onChange={(e) => changeMainImage(e)} 
                                        />
                                        <div className="add_content">
                                        <i className="fa-solid fa-cloud-arrow-up"></i>
                                        </div>
                                            <div>Select Image</div>
                                        </div>
                                    </label> 
                                    </div>
                                </a>
                            </div>
                        )}
                        
                   
                
                                    {errors.main_image && ( 
                                        <span className='error_message'>{errors.main_image}</span>
                                    )}
 
                 


            </div>
        </div>
    )
}

export default UploadMainImageSection