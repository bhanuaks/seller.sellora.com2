import { baseUrl } from '@/Http/helper'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react' 

function Page() {
  return (
    <div className="bg33">
   
  <div className="container">
    <div className="row">
      <div className="col-lg-8 offset-lg-2">
        <div>
         
          <div className="form_outer">
            <div className="seller_edit_information">
              <div className="row">
                <div className="col-lg-12">
                  <h2>Manage Sub Users</h2>
                  {/* <span className="edit_span"><a href="#">Edit</a></span> */}
                </div>
                <div className="col-lg-10 offset-lg-1">
                  <div className="form_s2">
                    <div className="col-lg-10 offset-lg-1">
                      <Link href={`${baseUrl}seller/profile/add-sub-user`}>
                        <button className="save">Add Sub User</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Page