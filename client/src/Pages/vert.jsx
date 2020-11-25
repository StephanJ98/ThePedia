import React from 'react'
import { useTranslation } from 'react-i18next'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Header from '../Components/Header'
import { Link } from 'react-router-dom'

export default function Vert () {
  const { t } = useTranslation()
  return (
    <Container fluid className='containerCenter'>
      <Header />
      <Row>
        <Col md={{ span: 8, offset: 2 }} sm={12} className='titreDet'>
          <h2>{t('Détails sur le thé vert')}</h2>
        </Col>
      </Row>
      <Row className='details'>
        <Col md={{ span: 8, offset: 2 }} sm={12} className='detailsDiv'>
          <Row><h4 className='col-12'>{t('Origine Japon')}</h4></Row>
          <Row>
            <h6 className='col-6'>{t('Température')}</h6>
            <p className='col-6'>50 à 75°C</p>
          </Row>
          <Row>
            <h6 className='col-6'>{t('Temps d\'infusion')}</h6>
            <p className='col-6'>1 - 2 min</p>
          </Row>
          <Row>
            <h6 className='col-6'>{t('Dose pour 10 cl')}</h6>
            <p className='col-6'>6g</p>
          </Row>
          <Row>
            <p className='col'>{t('Les thés de cette origine vert japon')}</p>
          </Row>
        </Col>
        <Col md={{ span: 8, offset: 2 }} sm={12} className='detailsDiv'>
          <Row><h4 className='col-12'>{t('Origine Chine')}</h4></Row>
          <Row>
            <h6 className='col-6'>{t('Température')}</h6>
            <p className='col-6'>75°C</p>
          </Row>
          <Row>
            <h6 className='col-6'>{t('Temps d\'infusion')}</h6>
            <p className='col-6'>2 - 4 min</p>
          </Row>
          <Row>
            <h6 className='col-6'>{t('Dose pour 10 cl')}</h6>
            <p className='col-6'>6g</p>
          </Row>
          <Row>
            <p className='col'>{t('Ce nest pas une origine vert chine')}</p>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col md={{ span: 8, offset: 2 }} sm={12} className='titreDet'>
          <Link className='backLink' to='/'><h2 className='back'>{t('Retour')}</h2></Link>
        </Col>
      </Row>
    </Container>
  )
}
