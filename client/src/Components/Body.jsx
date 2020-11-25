import React, { Component } from 'react'
import { withTranslation } from 'react-i18next'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import axios from 'axios'

class Body extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: []
    }
    this.searchAll = this.searchAll.bind(this)
    this.handleSearchTipe = this.handleSearchTipe.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  };

  componentDidMount () {
    this.searchAll()
  };

  searchAll () {
    axios.get('/thes')
      .then((data) => {
        this.setState({ data: data.data })
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  async handleSearchTipe (event) {
    if (event.target.value === 'Tout') {
      this.searchAll()
    } else {
      axios.get(`/tipe/${event.target.value}`)
        .then((data) => {
          this.setState({ data: data.data })
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }

  async handleSubmit (id) {
    await axios.post(`/like/${id}`)
      .catch(error => {
        console.log(error)
      })
    this.searchAll()
  }

  render () {
    const { t, i18n } = this.props
    const items = []
    if (this.state.data.thepedia) {
      if (this.state.data.thepedia.length === 0) {
        items.push(
          <section key='0' className='offset-5 col-3'>
            <Button type='button' className='nodat' disabled='disabled'>
              <strong>{t('Il n\'y a pas de thés disponibles')}</strong>
            </Button>
          </section>
        )
      } else {
        for (const [index, value] of this.state.data.thepedia.entries()) {
          if (value.lang === i18n.language) {
            items.push(
              <div key={index} className='col-lg-3 col-md-6 col-sm-12'>
                <Card className={`carte ${value.tipe}`}>
                  <Card.Body>
                    <Card.Title>
                      <textarea className={`col-12 ${value.tipe}t`} readOnly='readonly' rows='2' value={value.nom} />
                    </Card.Title>
                    <Card.Text className='row'>
                      <textarea className={`col-12 ${value.tipe}t`} readOnly='readonly' rows='4' value={value.description} />
                    </Card.Text>
                    <div className='center'>
                      <Button disabled='disabled' id={`timerbtn${value._id}`} type='button' className='btn-primary' data-toggle='modal' data-target={`#id${value._id}chrono`}>
                        <i className='fa fa-clock-o img_m' />
                      </Button>
                      <Button type='button' className='btn-primary' data-toggle='modal' data-target={`#id${value._id}`}>
                        <i className='fa fa-search img_m' />
                      </Button>
                      <Button onClick={() => this.handleSubmit(value._id)} type='submit' className='btn-primary'>
                        <i className='fa fa-heart img_m' />
                      </Button>
                    </div>
                  </Card.Body>
                  <div className='modal fade mod' id={`id${value._id}`} tabIndex='-1' role='dialog' aria-labelledby='Detalles' aria-hidden='true'>
                    <div className='modal-dialog modal-lg' role='document'>
                      <div className='modal-content'>
                        <div className='modal-header'>
                          <h5 className='modal-title'>{t('Détails')} {value.nom} </h5>
                          <button type='button' className='close' data-dismiss='modal' aria-label='Close'>
                            <span aria-hidden='true'>&times;</span>
                          </button>
                        </div>
                        <div className='modal-body row' id={`printThis${value._id}`}>
                          <div className='col-12'>
                            <Row>
                              <h6 className='col-2'><strong>{t('Nom')}</strong></h6>
                              <p className='col-4'>{value.nom}</p>
                              <h6 className='col-2'><strong>{t('Origine')}</strong></h6>
                              <p className='col-4'>{value.origine}</p>
                            </Row>
                            <hr />
                            <Row>
                              <h6 className='col-2'><strong>{t('Type')}</strong></h6>
                              <p className='col-4'>{value.tipe}</p>
                              <h6 className='col-4'><strong>{t('Température')}</strong></h6>
                              <p className='col-2'>{value.temperature} °C</p>
                            </Row>
                            <hr />
                            <Row>
                              <h6 className='col-4'><strong>{t('Dose (Théière) 10 cl')}</strong></h6>
                              <p className='col-2'>{value.doseT}</p>
                              <h6 className='col-4'><strong>{t('Dose (Gaiwan) 10 cl')}</strong></h6>
                              <p className='col-2'>{value.doseG}</p>
                            </Row>
                            <hr />
                            <Row>
                              <h6 className='col-3'><strong>{t('Temps (Théière)')}</strong></h6>
                              <p className='col-3'>{value.infusionT}</p>
                              <h6 className='col-3'><strong>{t('Temps (Gaiwan)')}</strong></h6>
                              <p className='col-3'>{value.infusionG}</p>
                            </Row>
                            <hr />
                            <Row>
                              <h6 className='col-3'><strong>{t('Description')}</strong></h6>
                              <p className='col'>{value.description}</p>
                            </Row>
                            <hr />
                            <Row>
                              <h6 className='col-3'><strong>{t('Nombre de j\'aime')}</strong></h6>
                              <p className='col'>{value.likes} {t('j\'aime')}</p>
                            </Row>
                          </div>
                        </div>
                        <div className='modal-footer'>
                          <button type='button' className='btn btn-secondary' data-dismiss='modal'>{t('Fermer')}</button>
                          <button disabled type='button' id='Print{{ data.identificateur }}' className='btn btn-primary'>{t('Imprimer')}</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            )
          }
        }
        if (items.length === 0) {
          items.push(
            <section key='0' className='offset-4 col-4'>
              <Button type='button' className='nodat' disabled='disabled'>
                <strong>{t('Il n\'y a pas de thés disponibles dans cette langue')}</strong>
              </Button>
            </section>
          )
        }
      }
    }
    return (
      <section>
        <div className='center'>
          <select className='classeur' onChange={this.handleSearchTipe}>
            <option defaultValue value='Tout' className='tipeOption'>{t('Voir tous les thés')}</option>
            <option value='Noir' className='tipeOption'>{t('Noir')}</option>
            <option value='Vert' className='tipeOption'>{t('Vert')}</option>
            <option value='PuErh' className='tipeOption'>Pu Erh</option>
            <option value='Oolong' className='tipeOption'>Wulong</option>
            <option value='Blanc' className='tipeOption'>{t('Blanc')}</option>
          </select>
        </div>
        <Row>
          {items}
        </Row>
      </section>
    )
  };
}
export default withTranslation()(Body)
