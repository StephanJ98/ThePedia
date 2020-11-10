import React from 'react';
import { useTranslation } from 'react-i18next';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Header from '../Components/Header';
import { Link } from 'react-router-dom';

export default function Noir() {
    const { t, i18n } = useTranslation();
    return (
        <Container fluid className='containerCenter'>
            <Header />
            <Row>
                <Col md={{ span: 8, offset: 2 }} sm={12} className='titreDet'>
                    <h2>Détails sur le thé noir</h2>
                </Col>
            </Row>
            <Row className='details'>
                <Col md={{ span: 8, offset: 2 }} sm={12} className="detailsDiv">
                    <p>Le thé noir est l'un des plus consommés, c'est principalement parce que le Royaume-Uni l'a diffusé à travers ses colonies lorsqu'il a commencé à s'intéresser au commerce de ce produit. De plus, contrairement au thé vert qui ne conserve sa saveur que depuis quelques années, le thé noir le conserve beaucoup plus longtemps, ce qui facilite son commerce sur la route du thé entre les pays asiatiques.</p>
                </Col>
            </Row>
            <Row className='details'>
                <Col md={{ span: 8, offset: 2 }} sm={12} className="detailsDiv">
                    <p>Les thés noirs portent généralement le nom de la région où ils sont produits. Les noms les plus connus et prestigieux sont Lapsang Souchong, Keemun, Diang Hong, Ying de Hong pour la Chine; Assam, Ceylan, Darjeeling, Nigiri pour l'Inde et Sry Lanka. En outre, il existe d'autres régions productrices (Vietnam, Népal et Turquie) qui produisent également du thé intéressant.</p>
                </Col>
            </Row>
            <Row className='details'>
                <Col md={{ span: 8, offset: 2 }} sm={12} className="detailsDiv">
                    <p>En règle générale, les thés d'Inde et de Ceylan sont traités par de fortes quantités de pesticides, donc avant de consommer un thé de cette origine, il est conseillé de s'assurer qu'il s'agit d'un thé Bio et de producteurs renommés.</p>
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
                                <td>90°C</td>
                                <td>4 - 5 min</td>
                                <td>6g</td>
                            </tr>
                            <tr>
                                <th scope="row">Inde - Darjeeling (Printemps)</th>
                                <td>85°C</td>
                                <td>3'30 - 3'45 min</td>
                                <td>6 - 8g</td>
                            </tr>
                            <tr>
                                <th scope="row">Inde – Darjeeling Grands Crus</th>
                                <td>85°C</td>
                                <td>3'45 - 4 min</td>
                                <td>6 - 8g</td>
                            </tr>
                            <tr>
                                <th scope="row">Inde – Darjeeling Autres périodes</th>
                                <td>90°C</td>
                                <td>4 - 5 min</td>
                                <td>6 - 8g</td>
                            </tr>
                            <tr>
                                <th scope="row">Inde – Assam</th>
                                <td>90°C</td>
                                <td>3 - 4 min</td>
                                <td>6g</td>
                            </tr>
                            <tr>
                                <th scope="row">Sri Lanka et autres origines</th>
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
                    <Link className='backLink' to='/'><h2 className='back'>Atras</h2></Link>
                </Col>
            </Row>
        </Container>
    );
}