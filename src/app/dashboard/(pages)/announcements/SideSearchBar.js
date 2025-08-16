import { useRouter, useSearchParams } from 'next/navigation';
import React, { useState } from 'react'

function SideSearchBar() {
    const router = useRouter();
     const searchParams = useSearchParams();
       const [searchText, setSearchText] = useState("");

       
    function searchSubmit(e){
        e.preventDefault()
        const query = new URLSearchParams(searchParams);
        query.set("searchData", searchText);
        query.set("page", 1);
        router.push(`/dashboard/announcements?${query.toString()}`)
    }


  return (
      <div className="col-lg-3">
        <div className="ann-card2 sidebar_11">
          <div className="mb-3">
            <label className="form-label fw-semibold">
              Search announcements
            </label>
            <form className="search-form" onSubmit={(e)=>searchSubmit(e)}>
              <input type="text" placeholder="Search..." 
              value={searchText}
              onChange={(e)=>setSearchText(e.target.value)}
              />
              <button type="submit">Search</button>
            </form>
          </div>
        </div>
      </div>
  )
}

export default SideSearchBar