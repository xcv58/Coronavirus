import React, { useContext } from "react"
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import { LangContext, EN } from "./LangContext"
import { Link } from "gatsby"


export default () => {
  const lang = useContext(LangContext)
  const zh = <Link to='/'>中文</Link>
  const en = <Link to='/en'>English</Link>
  const link = lang === EN ? zh : en
  return (
    <div className='nav'>
      {link}
    </div>
  )
}
