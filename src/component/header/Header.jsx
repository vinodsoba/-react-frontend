import React from 'react'
import Navigation from '../navigation/Navigation'

// import bootstrap
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

// style
import './style.css'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className='header'>
    <Row>   
        <Col md={6}><div className='logo'><Link to="/">Logo</Link></div></Col>
        <Col md={6}><Navigation /></Col>
    </Row>
    
    </div>
   
  )
}
