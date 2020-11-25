import React from 'react'
import { useTranslation } from 'react-i18next'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Header from '../Components/Header'
import { Link } from 'react-router-dom'

export default function Noir () {
  const { t } = useTranslation()
  return (
    <Container fluid className='containerCenter'>
      <Header />
      <Row>
        <Col md={{ span: 8, offset: 2 }} sm={12} className='titreDet'>
          <h2>{t('Détails sur le thé noir')}</h2>
        </Col>
      </Row>
      <Row className='details'>
        <Col md={{ span: 8, offset: 2 }} sm={12} className='detailsDiv'>
          <p>{t('Le thé noir est lun des plus consommés')}</p>
        </Col>
      </Row>
      <Row className='details'>
        <Col md={{ span: 8, offset: 2 }} sm={12} className='detailsDiv'>
          <p>{t('Les thés noirs portent généralement le nom de la région')}</p>
        </Col>
      </Row>
      <Row className='details'>
        <Col md={{ span: 8, offset: 2 }} sm={12} className='detailsDiv'>
          <p>{t('En règle générale, les thés dInde et de Ceylan')}</p>
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
                <td>90°C</td>
                <td>4 - 5 min</td>
                <td>6g</td>
              </tr>
              <tr>
                <th scope='row'>{t('Inde - Darjeeling (Printemps)')}</th>
                <td>85°C</td>
                <td>3'30 - 3'45 min</td>
                <td>6 - 8g</td>
              </tr>
              <tr>
                <th scope='row'>{t('Inde – Darjeeling Grands Crus')}</th>
                <td>85°C</td>
                <td>3'45 - 4 min</td>
                <td>6 - 8g</td>
              </tr>
              <tr>
                <th scope='row'>{t('Inde – Darjeeling Autres périodes')}</th>
                <td>90°C</td>
                <td>4 - 5 min</td>
                <td>6 - 8g</td>
              </tr>
              <tr>
                <th scope='row'>{t('Inde – Assam')}</th>   {/* {t('')} */}
                <td>90°C</td>
                <td>3 - 4 min</td>
                <td>6g</td>
              </tr>
              <tr>
                <th scope='row'>{t('Sri Lanka et autres origines')}</th>
                <td>90°C</td>
                <td>3 - 5 min</td>
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
