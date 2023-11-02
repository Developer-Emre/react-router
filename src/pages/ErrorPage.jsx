import React from 'react'
import {Link} from 'react-router-dom'

function ErrorPage() {
  return (
    <div>
        <h3>Page Not Found</h3>
        <h4>Go to 
            <Link to='/'> Homepage</Link>
        </h4>
    </div>
  )
}

export default ErrorPage