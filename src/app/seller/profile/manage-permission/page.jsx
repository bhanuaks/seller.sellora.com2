'use client'
import React, { useEffect, useState } from 'react'
import RightNav from '../component/RightNav'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { baseUrl } from '@/Http/helper'
import SubMenu from './SubMenu'
import { toast, ToastContainer } from 'react-toastify'

function page() {

  //const searchParams = useSearchParams()
  //const token = searchParams.get('token')
  
  const [menuList, setMenuList] = useState([])
  const [userDetail, setUserDetail] = useState([])
  const [token, setToken] = useState()
  const [userPermission, setUserPermission] = useState({})
  const [show, setShow] = useState(false)
  

const fetchUserDetail = (token) => {
fetch(
            `${baseUrl}api/seller/user-permission?token=${token}`,
            {
              method: "GET",
            }
          )
            .then((response) => {
              
              return response.json();
            })
            .then((res) => {
              $(".loaderouter").css("display", "none");
              if (res.status) {
                //console.log(res.data)
                setUserPermission(res.data)
                //setMenuList(res.data.data)
                
                
              }
            });

}

  useEffect(() => {
      if (typeof window !== 'undefined') {
        const params = new URLSearchParams(window.location.search);
        const tokenValue = params.get('token');
        setToken(tokenValue);
      }
    }, []);
  
  useEffect(() => {
        //console.log(token)
        if(token){
        fetch(
            `${baseUrl}api/get-menu-list?token=${token}`,
            {
              method: "GET",
            }
          )
            .then((response) => {
              
              return response.json();
            })
            .then((res) => {
              $(".loaderouter").css("display", "none");
              if (res.status) {
                
                setMenuList(res.data.data)
                
                
              }
            });

            fetchUserDetail(token);

          }

          
  
      },[token])

const modalShow = (e, id, value) => {
  

  setUserDetail((prev) => {
    const updated = prev.filter((item) => item.id !== id);
    return [...updated, { id:id, value:value }];
  });

  setShow(true)

  
  //console.log(userPermission)
  //const modal = bootstrap.Modal.getOrCreateInstance(document.getElementById('edit-Modal'));
  //modal.show();

}

const popupCancel = () => {
  setUserDetail([])
  fetchUserDetail(token);
  setShow(false)
}

const popupSubmit = (e) => {
//console.log(userDetail, token)
e.preventDefault();
      //setErrors({});
  
      
      
    $(".loaderouter").css("display", "flex");
      fetch(`${baseUrl}api/seller/user-permission`, {
        method: "POST",
        body: JSON.stringify({
          userDetail:userDetail,
          token:token
          
        }),
      })
        .then((response) => {
          if (!response.ok) {
            $(".loaderouter").css("display", "none");
            throw new Error("Network Error");
          }
          return response.json();
        })
        .then((res) => {
          $(".loaderouter").css("display", "none");
          if (res.status) {
            
            toast.success("Permission change successfully.");
            fetchUserDetail(token);
            setShow(false)
            //const modal = bootstrap.Modal.getOrCreateInstance(document.getElementById('edit-Modal'));
            //modal.hide();

          } else if (res.data.status_code == 403) {
            //setErrors(ress.data.errors);
            toast.warning("Seller not found.");
            fetchUserDetail(token);
            setShow(false)
            //const modal = bootstrap.Modal.getOrCreateInstance(document.getElementById('edit-Modal'));
            //modal.hide();
          }
        });
        


}



  return (
    <>
  <div className="notification_breadcomb_rts-navigation-area-breadcrumb">
    <ToastContainer
            position="top-center"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />
          {/* loader start */}
      <div className="loaderouter">
        <div className="loader"></div>
      </div>
      {/* loader end */}
    
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="notification_breadcomb">
            <ul>
              <li>
                <Link href="/dashboard">Dashboard</Link>{" "}
              </li>
              <li>
                <a href="#"> User Management</a>{" "}
              </li>
              <li>
                <a href="#" className="active_002">
                  Manage Permissions
                </a>{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="container">
    <div className="row">
      <div className="col-lg-10 offset-lg-1">
        <div className="adjust_outer">
          <div className="container">
            <div className="radio">
              <input id="radio-1" name="radio" type="radio" defaultChecked="checked" />
              <label htmlFor="radio-1" className="radio-label">
                Adjust access, add/remove users, delegate admin roles, and
                oversee all sites from a single hub
              </label>
            </div>
          </div>
          {/* <label><input type="radio" name="choice" checked> Adjust access, add/remove users, delegate admin roles, and oversee all sites from a single hub</label> */}
        </div>
        <div className="search_outer2">
          <div className="row">
            <div className="col-lg-9">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                  <div className="breadcome-heading_10_2">
                    <form role="search" className="sr-input-func_10_2">
                      <input
                        type="text"
                        placeholder="Search for a permission"
                        className="search-int2 form-control"
                      />
                      <a href="#">
                        <i className="far fa-search" />
                      </a>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <select className="form-select">
                <option>9 Countries / Regions</option>
              </select>
            </div>
          </div>
        </div>
        {/* ======================Listing-table==open============================= */}
        
        {menuList && menuList.map((list, index) => {

          let subMenuList;
          if(list.submenu.length > 0){
            subMenuList = list.submenu 
          } else {
            subMenuList = [list]

          }

          return (
            <div className="table-responsive" key={`menu-${index}`}>
          <table
            className="table table-bordered user-man"
            style={{ marginTop: 20 }}
          >
            <thead className="table__head">
              <tr className="winner__table">
                <th width={510}>{list.name}</th>
                <th width={100}>
                  <span className="white-button">None</span>
                </th>
                <th width={100}>
                  <span className="white-button">View</span>
                </th>
                <th width={100}>
                  <span className="white-button">Edit</span>
                </th>
                <th width={100}>
                  <span className="white-button">Admin</span>
                </th>
              </tr>
            </thead>
            <tbody>
              
              {subMenuList && subMenuList.map((subList, subIndex) => {

                const selectedPermission = userPermission[subList._id] || 'none';
                
            return (
            <tr className="winner__table" key={`sub-menu-${subIndex}`}>
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
                      <input type="radio" name={`group-${list._id}-${subList._id}`} onClick={(e) => modalShow(e, subList._id, 'none')} checked={selectedPermission === 'none'}
                      onChange={() =>
                                              setUserPermission((prev) => ({
                                                ...prev,
                                                [subList._id]: 'none'
                                              }))
                                            }
                      />
                    </label>
                  </div>
                </td>
                <td>
                  <div className="text-center">
                    <label className="radio-container_120">
                      <input type="radio" name={`group-${list._id}-${subList._id}`} onClick={(e) => modalShow(e, subList._id, 'view')} checked={selectedPermission === 'view'} onChange={() =>
                                              setUserPermission((prev) => ({
                                                ...prev,
                                                [subList._id]: 'view'
                                              }))
                                            } />
                    </label>
                  </div>
                </td>
                <td>
                  <div className="text-center">
                    <label className="radio-container_120">
                      <input type="radio" name={`group-${list._id}-${subList._id}`} onClick={(e) => modalShow(e, subList._id, 'edit')} checked={selectedPermission === 'edit'} 
                      onChange={() =>
                                              setUserPermission((prev) => ({
                                                ...prev,
                                                [subList._id]: 'edit'
                                              }))
                                            }
                      />
                    </label>
                  </div>
                </td>
                <td>
                  <div className="text-center">
                    <label className="radio-container_120">
                      <input type="radio" name={`group-${list._id}-${subList._id}`} onClick={(e) => modalShow(e, subList._id, 'admin')} checked={selectedPermission === 'admin'} 
                      onChange={() =>
                                              setUserPermission((prev) => ({
                                                ...prev,
                                                [subList._id]: 'admin'
                                              }))
                                            }
                      />
                    </label>
                  </div>
                </td>
              </tr>
            )})
          
          
          }
            </tbody>
          </table>
          
        </div>
        

          )
        })}
        
        
        
        
        
        {/* ======================Setting-table==end============================= */}
      </div>
      
        
      
    </div>
  </div>
  {/* popup-1-edit-Modal 
  <div
    className="modal fade"
    id="edit-Modal"
    tabIndex={-1}
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div className="modal-dialog modal-dialog2 modal-dialog-centered">
      <div
        className="modal-content"
        style={{ background: "#ff5c2a", padding: 5 }}
      >
        <div className="modal-body">
          <div className="row">
            <div className="col-lg-7">
              <div className="addvertise_ment_10">
                <span className="modified">0 Modified</span>
                <span className="remove-user">Remove User</span>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="modal_button modal_button2">
                <button
                  type="button"
                  className="orange-btn cancel3"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
                <button type="button" className="white-btn" onClick={popupSubmit}>
                  Save Changes
                </button>
                <button
                  type="button"
                  className="btn-close btn-close2"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  X
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  */ }

  {show && 
 <div className="footer_form">
    <div className="container">
      <div className="row">
        <div className="col-lg-10 offset-lg-1">
            <div className="footer_form_inner">

          <div className="row">
            <div className="col-lg-7">
              <div className="addvertise_ment_10">
                {" "}
                <span className="modified">{userDetail?.length} Modified</span>{" "}
                
              </div>
            </div>
            <div className="col-lg-5">
              <div className="modal_button modal_button2">
                <button
                  type="button"
                  className="orange-btn cancel3"
                  data-bs-dismiss="modal"
                  onClick={popupCancel}
                >
                  Cancel
                </button>
                <button type="button" className="white-btn" onClick={popupSubmit}>
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  }
 

</>

  )
}

export default page
