import { baseUrl } from '@/Http/helper'
import Link from 'next/link'
import React from 'react'

function SingleLIstingSection() {
  return (
    <div className="form_s2 search_the_sellora_catalog">
    <h2>Search the Sellora catalog</h2>
    <p>
      Search for the item in the Sellora catalog and match it, if
      exists. If not,
      &nbsp;<Link href={`${baseUrl}dashboard/categories?ref=single`}>create a new catalog</Link>.
    </p>
    <div className="category_search seach_df pt--30 pb--10">
      <div className="col-lg-6 offset-lg-3">
        <form role="search" className="sr-input-func">
          <input
            type="text"
            placeholder="Enter an Item Name"
            className="search-int form-control"
          />
          <Link href="#">
            <i className="fa fa-search" />
          </Link>
        </form>
      </div>
    </div>
  </div>
  )
}

export default SingleLIstingSection