import React from 'react';
import { useTranslation } from 'react-i18next';
import Dropdown from 'react-bootstrap/Dropdown';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import ModalAjouter from './Modals/ModalAjouter';
import '../App.css';
import { Link } from 'react-router-dom';

export default function Header() {

    const { i18n } = useTranslation();
    const changeLanguage = lng => {
        i18n.changeLanguage(lng);
    };

    return (
        <header>
            <Row id="header">
                <div className="offset-1 col-4">
                    <h3 className="titre">的 - Thepedia</h3>
                </div>
                <Dropdown className="offset-lg-6 offset-md-4 offset-3 col-1">
                    <Dropdown.Toggle id="drop">
                        <i className="fa fa-bars img_header"></i>
                    </Dropdown.Toggle>
                    <Dropdown.Menu id="DropMenu">
                        <Dropdown.Item className="DropItem">
                            <Row>
                                <Button disabled type="button" className="col-12 DropButton" data-toggle="modal" data-target="#ajouter">
                                    <i className="fa fa-leaf icons"></i>
                                    <i className="fa fa-plus icons"></i>
                                </Button>
                            </Row>
                        </Dropdown.Item>
                        <Dropdown.Item className="DropItem">
                            <Row>
                                <Link to='/info' className="col-12 DropButton"><i className="fa fa-info-circle iconsSpec"></i></Link>
                            </Row>
                        </Dropdown.Item>
                        <Dropdown.Item className="DropItem">
                            <Row>
                                <Button type="button" className="col-12 DropButton" onClick={() => changeLanguage('fr')}>
                                    <span className="iconify icons" data-icon="emojione-v1:flag-for-france" data-inline="false"></span>
                                </Button>
                            </Row>
                        </Dropdown.Item>
                        <Dropdown.Item className="DropItem">
                            <Row>
                                <Button type="button" className="col-12 DropButton" onClick={() => changeLanguage('es')}>
                                    <span className="iconify icons" data-icon="emojione-v1:flag-for-spain" data-inline="false"></span>
                                </Button>
                            </Row>
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Row>
            <Row id="navbar">
                <Link to='/vert' className="col btns"><strong>Vert</strong></Link>
                <Link to='/noir' className="col btns"><strong>Noir</strong></Link>
                <Link to='/blanc' className="col btns"><strong>Blanc</strong></Link>
                <Link to='/puerh' className="col btns"><strong>Pu Erh</strong></Link>
                <Link to='/wulong' className="col btns"><strong>Wulong</strong></Link>
            </Row>
            <ModalAjouter />
        </header>
    );
}