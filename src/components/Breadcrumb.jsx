import React from 'react'

export default function Breadcrumb({heading, title, total, sort}) {
  return (
    <div className="row no-gutters justify-content-center pb-5">
        <div class="col-md-12 heading-section text-center">
            <span class="subheading">{heading}</span>
            <h2 class="mb-4">{title}</h2>
            <p class="tongso mb-4">{total}</p>
            {sort}
        </div>
    </div>
  )
}
