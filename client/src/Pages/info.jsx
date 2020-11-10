import React from 'react';
import { useTranslation } from 'react-i18next';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Header from '../Components/Header';
import { Link } from 'react-router-dom';

export default function Info() {
    const { t, i18n } = useTranslation();
    return (
        <Container fluid className='containerCenter'>
            <Header />
            <Row>
                <Col md={{ span: 8, offset: 2 }} sm={12} className='titreDet'>
                    <h2>Informations de base sur le thé</h2>
                </Col>
            </Row>
            <Row className='details'>
                <Col md={{ span: 8, offset: 2 }} sm={12} className="detailsDiv">
                    <p>Le thé est une infusion des feuilles et des bourgeons du théier (Camellia sinensis). La popularité de cette boisson n'est dépassée que par l'eau.</p>
                    <p>Aujourd'hui, on distingue de nombreuses formes traditionnelles qui diffèrent par le degré d'oxydation:</p>
                    <ul>
                        <li>
                            <Row>
                                <p className="col-12">Thé blanc - Ainsi nommé parce que les poils sur la face inférieure des feuilles donnent aux feuilles de thé séchées une couleur blanc argenté. Ce sont de jeunes feuilles qui n'ont pas rouillé; les pousses peuvent avoir été protégées du soleil pour empêcher la formation de chlorophylle. Les jeunes pousses sont récoltées et séchées. Dans de nombreux cas, seules les meilleures plantes conviennent à la production de thé blanc.</p>
                                <img className="img-responsive offset-3 col-6" alt="Té blanco" src="https://upload.wikimedia.org/wikipedia/commons/a/ae/Bai_Hao_Yin_Zhen_tea_leaf_%28Fuding%29.jpg" />
                            </Row>
                        </li>
                        <li>
                            <Row>
                                <p className="col-12">Thé vert - Sans oxydation. Un favori en Asie, il est ainsi nommé parce que les feuilles sèchent rapidement après avoir été cueillies. Dans la production traditionnelle, après la récolte, le thé se dessèche dans des casseroles en fer sur le feu puis sèche. Dans la production industrielle, cela se produit dans de grands conteneurs. Le thé fabriqué à partir de ces feuilles a une saveur plus fraîche que les autres types de thé. Pour cette raison, le thé vert n'est pas servi avec du lait ou du sucre.</p>
                                <img className="img-responsive offset-3 col-6" alt="Té verde" src="https://upload.wikimedia.org/wikipedia/commons/a/a7/Stir_frying_Xi_Hu_Longjing.png" />
                            </Row>
                        </li>
                        <li>
                            <Row>
                                <p className="col-12">Thé Wulong - Aussi appelé thé bleu. Il a un degré moyen d'oxydation entre les thés noirs et les thés verts. Ses feuilles fermentent environ la moitié du temps utilisées dans le thé noir. Les wulong se fanent très lentement et leur processus d'oxydation est lent et subtil. Le thé développe de nombreux composés aromatiques aux fleurs et aux fruits qui se refléteront dans la tasse.</p>
                                <img className="img-responsive offset-3 col-6" alt="Té Oolong" src="https://upload.wikimedia.org/wikipedia/commons/a/a1/Oolong_tea_leaf.jpg" />
                            </Row>
                        </li>
                        <li>
                            <Row>
                                <p className="col-12">Thé noir - Oxydation complète. Il donne lieu à une infusion rougeâtre et sombre; Le thé noir est très populaire dans les pays occidentaux, mais il est principalement produit en Asie, plus précisément en Chine.</p>
                                <img className="img-responsive offset-3 col-6" alt="Té negro" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/JacksonsLapsangSouchong_low.jpg/1280px-JacksonsLapsangSouchong_low.jpg" />
                            </Row>
                        </li>
                        <li>
                            <Row>
                                <p className="col-12">Pu Erh - C'est une préparation spéciale de thé qui est laissée à maturité pendant plusieurs mois à plusieurs années. Contrairement aux autres thés, qui sont généralement pris après la récolte, le processus de fermentation de cette variété peut durer de 2 à 60 ans en fûts de bambou, ce qui donne aux feuilles une couleur cuivrée et, par conséquent, infusion. Il peut se présenter sous différentes formes, en vrac ou compressé en gâteau.</p>
                                <img className="img-responsive offset-3 col-6" alt="Té Pu Erh" src="https://upload.wikimedia.org/wikipedia/commons/c/c6/Haiwan_bingcha.jpg" />
                            </Row>
                        </li>
                    </ul>
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