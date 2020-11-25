import React from 'react'
import '../App.scss'
import Container from 'react-bootstrap/Container'
import Header from '../Components/Header'
import Body from '../Components/Body'

export default function home () {
  return (
    <Container fluid>
      <Header />
      <Body />
    </Container>
  )
}
