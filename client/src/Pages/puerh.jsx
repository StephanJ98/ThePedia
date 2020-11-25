import React from 'react'
import { useTranslation } from 'react-i18next'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Header from '../Components/Header'
import { Link } from 'react-router-dom'

export default function Puerh () {
  const { t } = useTranslation()
  return (
    <Container fluid className='containerCenter'>
      <Header />
      <Row>
        <Col md={{ span: 8, offset: 2 }} sm={12} className='titreDet'>
          <h2>{t('Détails sur le thé Pu Erh')}</h2>
        </Col>
      </Row>
      <Row className='details'>
        <Col md={{ span: 8, offset: 2 }} sm={12} className='detailsDiv'>
          <Row>
            <h6 className='col-6'>{t('Température')}</h6>
            <p className='col-6'>95°C</p>
          </Row>
          <Row>
            <h6 className='col-6'>{t('Temps d\'infusion')}</h6>
            <p className='col-6'>4 - 5 min</p>
          </Row>
          <Row>
            <h6 className='col-6'>{t('Dose pour 10 cl')}</h6>
            <p className='col-6'>6g</p>
          </Row>
          <hr />
          <Row>
            <Col md={6} sm={12}>
              <p>{t('Les thés Pu Erh sont un type spécial de thé')}</p>
            </Col>
            <Col md={6} sm={12}>
              <p>{t('Traditionnellement, seul le Pu Erh (Sheng)')}</p>
            </Col>
          </Row>
          <Row>
            <Col md={6} sm={12}>
              <p>{t('Mais depuis le siècle dernier, des Pu Erh cuits (Shu)')}</p>
            </Col>
            <Col md={6} sm={12}>
              <p>{t('Les meilleurs Pu Erh')}</p>
            </Col>
          </Row>
          <hr />
          <Row>
            <Col md={6} sm={12}>
              <h4>{t('En feuilles')}</h4>
              <p>{t('Type Pu Erh adapté à la consommation quotidienne')}</p>
            </Col>
            <Col md={6} sm={12}>
              <h4>{t('En feuilles compressées')}</h4>
              <p>{t('Type de Pu Erh adapté à une maturation')}</p>
            </Col>
          </Row>
          <hr />
          <Row>
            <Col md={6} sm={12}>
              <h4>Pu Erh Shu</h4>
              <p>{t('Pu Erh Shu')}</p>
            </Col>
            <Col md={6} sm={12}>
              <h4>Pu Erh Sheng</h4>
              <p>{t('Pu Erh Sheng')}</p>
            </Col>
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
