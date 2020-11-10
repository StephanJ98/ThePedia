import React from 'react';
import { useTranslation } from 'react-i18next';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Header from '../Components/Header';
import { Link } from 'react-router-dom';

export default function Wulong() {
    const { t, i18n } = useTranslation();
    return (
        <Container fluid className='containerCenter'>
            <Header />
            <Row>
                <Col md={{ span: 8, offset: 2 }} sm={12} className='titreDet'>
                    <h2>Détails sur le thé Wulong</h2>
                </Col>
            </Row>
            <Row className='details'>
                <Col md={{ span: 8, offset: 2 }} sm={12} className="detailsDiv">
                    <p>Le Wulong a plus le goût du thé vert que du noir: il n'a pas l'arôme doux et rosé du thé noir ni les fortes notes herbacées qui caractérisent le thé vert.</p>
                </Col>
            </Row>
            <Row className='details'>
                <Col md={{ span: 8, offset: 2 }} sm={12} className="detailsDiv">
                    <p>Les feuilles de thé Wulong sont traitées de deux manières différentes. Certaines variétés sont enroulées en longues feuilles incurvées, tandis que d'autres sont pressées en forme de boule.</p>
                </Col>
            </Row>
            <Row className='details'>
                <Col md={{ span: 8, offset: 2 }} sm={12} className="detailsDiv">
                    <p>Les wulong les plus prestigieux proviennent des provinces chinoises du Fujian et du Guangdong, de Taiwan et du Népal.</p>
                </Col>
            </Row>
            <Row className='details'>
                <Col md={{ span: 8, offset: 2 }} sm={12} className="detailsDiv">
                    <table className="col-12 detailsDivTable">
                        <thead>
                            <tr>
                                <th scope="col">#Théière#</th>
                                <th scope="col">Température</th>
                                <th scope="col">Temps d'infusion</th>
                                <th scope="col">Dose pour 10 cl</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">Thés Wulong</th>
                                <td>95°C</td>
                                <td>5 - 7 min</td>
                                <td>8 - 10g</td>
                            </tr>
                            <tr>
                                <th scope="row">Préparation avec Gong Fu Cha</th>
                                <td>95°C</td>
                                <td>Pour des passages de 20 sec - 1 min</td>
                                <td>6g</td>
                            </tr>
                        </tbody>
                    </table>
                </Col>
            </Row>
            <Row>
                <Col md={{ span: 8, offset: 2 }} sm={12} className='titreDet'>
                    <Link className='backLink' to='/'><h2 className='back'>Atras</h2></Link>
                </Col>
            </Row>
        </Container >
    );
}