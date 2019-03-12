import React from "react"
import { Helmet } from 'react-helmet'

import 'bootstrap/dist/css/bootstrap.css'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.bundle.js'

const Bootstrap = (props) => (
  <div>
    <Helmet>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Helmet>
 </div>
)

export default Bootstrap
