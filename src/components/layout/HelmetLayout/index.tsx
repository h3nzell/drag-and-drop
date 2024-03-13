import { FC } from 'react'
import {  Helmet } from 'react-helmet'

import { HelmetLayoutProps } from './types'

const HelmetLayout: FC<HelmetLayoutProps> = ({ children, title }) => (
  <div className="w-full h-screen">
    <Helmet>
      <title>{title}</title>
    </Helmet>
    {children}
  </div>
)

export default HelmetLayout
