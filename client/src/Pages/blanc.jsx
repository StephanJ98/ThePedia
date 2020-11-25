import React from 'react'
import { useTranslation } from 'react-i18next'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Header from '../Components/Header'
import { Link } from 'react-router-dom'

export default function Blanc () {
  const { t } = useTranslation()
  return (
    <Container fluid className='containerCenter'>
      <Header />
      <Row>
        <Col md={{ span: 8, offset: 2 }} sm={12} className='titreDet'>
          <h2>{t('Détails sur le thé blanc')}</h2>
        </Col>
      </Row>
      <Row className='details'>
        <Col md={{ span: 8, offset: 2 }} sm={12} className='detailsDiv'>
          <p>{t('Le thé blanc est apprécié')}</p>
        </Col>
      </Row>
      <Row className='details'>
        <Col md={{ span: 8, offset: 2 }} sm={12} className='detailsDiv'>
          <table className='col-12 detailsDivTable'>
            <thead>
              <tr>
                <th scope='col'>{t('#Théière#')}</th>
                <th scope='col'>{t('Température')}</th>
                <th scope='col'>{t('Temps d\'infusion')}</th>
                <th scope='col'>{t('Dose pour 10 cl')}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope='row'>{t('Chine')}</th>
                <td>70°C - 75°C</td>
                <td>5 - 10 min</td>
                <td>6g</td>
              </tr>
              <tr>
                <th scope='row'>{t('Autres origines')}</th>
                <td>70°C - 75°C</td>
                <td>4 - 8 min</td>
                <td>6g</td>
              </tr>
            </tbody>
          </table>
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
