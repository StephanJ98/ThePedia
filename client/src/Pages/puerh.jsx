import React from 'react';
import { useTranslation } from 'react-i18next';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Header from '../Components/Header';
import { Link } from 'react-router-dom';

export default function Puerh() {
    const { t, i18n } = useTranslation();
    return (
        <Container fluid className='containerCenter'>
            <Header />
            <Row>
                <Col md={{ span: 8, offset: 2 }} sm={12} className='titreDet'>
                    <h2>Détails sur le thé Pu Erh</h2>
                </Col>
            </Row>
            <Row className='details'>
                <Col md={{ span: 8, offset: 2 }} sm={12} className="detailsDiv">
                    <Row>
                        <h6 className="col-6">Température</h6>
                        <p className="col-6">95°C</p>
                    </Row>
                    <Row>
                        <h6 className="col-6">Temps d'infusion</h6>
                        <p className="col-6">4 - 5 min</p>
                    </Row>
                    <Row>
                        <h6 className="col-6">Dose pour 10 cl</h6>
                        <p className="col-6">6g</p>
                    </Row>
                    <hr />
                    <Row>
                        <Col md={6} sm={12}>
                            <p>Les thés Pu Erh sont un type spécial de thé, car ils peuvent être oxydés ou non, mais tous subissent une fermentation qui fait apparaître leur saveur caractéristique et leur donne une valeur élevée.</p>
                        </Col>
                        <Col md={6} sm={12}>
                            <p>Traditionnellement, seul le Pu Erh (Sheng) brut était produit, c'est-à-dire que le thé était comprimé en gâteaux et laissé à fermenter naturellement et mettait environ 10 ans pour arriver à maturité.</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6} sm={12}>
                            <p>Mais depuis le siècle dernier, des Pu Erh (Shu) cuits ont également été produits, qui avant d'être compressés en gâteaux, sont arrosés avec de l'eau et mis à fermenter, afin d'essayer d'imiter le processus de fermentation naturel, cela ne s'est pas produit, mais ils ont découvert que le Le thé ainsi préparé avait un très bon goût.</p>
                        </Col>
                        <Col md={6} sm={12}>
                            <p>Les meilleurs Pu Erh viennent du sud-ouest de la Chine et des régions frontalières avec le Tibet, la Birmanie, le Vietnam et le Laos. Les initiatives de production de Pu Erh en Afrique sont également à noter.</p>
                        </Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col md={6} sm={12}>
                            <h4>En feuilles</h4>
                            <p>Type Pu Erh adapté à la consommation quotidienne. Il est généralement composé des restes de feuilles qui n'ont pas été compressées en cookies.</p>
                        </Col>
                        <Col md={6} sm={12}>
                            <h4>En feuilles compressées</h4>
                            <p>Type de Pu Erh adapté à une maturation de plusieurs années et uniquement pour les occasions les plus spéciales. C'est vous qui avez parcouru la grande route du thé qui a traversé toute la Chine. Il est typique du Yunnan et de la province du Fujian.</p>
                        </Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col md={6} sm={12}>
                            <h4>Pu Erh Shu</h4>
                            <p>Pu Erh compressé "Cuit". Fabriqué avec une technique des années 70 qui était destinée à imiter le résultat d'un Pu Erh Sheng avec 10 ans de maturation. A sa place, un nouveau type de Pu Erh est né, plus crémeux qu'un traditionnel.</p>
                        </Col>
                        <Col md={6} sm={12}>
                            <h4>Pu Erh Sheng</h4>
                            <p>Pu erh comprimé "Brut". C'est le traditionnel, affiné pendant au moins 10 ans pour atteindre son niveau gustatif maximum.</p>
                        </Col>
                    </Row>
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