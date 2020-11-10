import React from 'react';
import { useTranslation } from 'react-i18next';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Header from '../Components/Header';
import { Link } from 'react-router-dom';

export default function Blanc() {
    const { t, i18n } = useTranslation();
    return (
        <Container fluid className='containerCenter'>
            <Header />
            <Row>
                <Col md={{ span: 8, offset: 2 }} sm={12} className='titreDet'>
                    <h2>Détails sur le thé blanc</h2>
                </Col>
            </Row>
            <Row className='details'>
                <Col md={{ span: 8, offset: 2 }} sm={12} className="detailsDiv">
                    <p>Le thé blanc est apprécié pour sa finesse et sa douceur. Il provient de bourgeons délicats et de jeunes feuilles de la plante qui ne sont pas oxydés comme pour la production d'autres thés. Il est produit principalement en Chine puisqu'il s'agissait d'un thé réservé aux événements importants. Les thés blancs les plus appréciés et de meilleure qualité sont ceux de la province du Fujian en Chine.</p>
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
                                <th scope="row">Chine</th>
                                <td>70°C - 75°C</td>
                                <td>5 - 10 min</td>
                                <td>6g</td>
                            </tr>
                            <tr>
                                <th scope="row"> Autres origines</th>
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
                    <Link className='backLink' to='/'><h2 className='back'>Atras</h2></Link>
                </Col>
            </Row>
        </Container>
    );
}