import React from 'react'
import Button from 'react-bootstrap/Button'

export default function ModalAjouter () {
  return (
    <div className='modal fade' id='ajouter' tabIndex='-1' role='dialog' aria-labelledby='ajouter' aria-hidden='true'>
      <div className='modal-dialog modal-lg' role='document'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h5 className='modal-title'>Ajouter un thé</h5>
            <button type='button' className='close' data-dismiss='modal' aria-label='Close'>
              <span aria-hidden='true'>&times;</span>
            </button>
          </div>
          <div className='modal-body'>
            <form id='ajout' method='post' action='/ajouter'>
              {/* <input style="display: none" type="text" id="likes" name="likes" value="0" /> */}
              <div className='form-group'>
                <input type='text' className='form-control' id='nom' name='nom' placeholder='Nom' />
              </div>
              <div className='form-group'>
                <textarea className='form-control' id='description' name='description' placeholder='Description' maxLength='500' rows='4' aria-describedby='Hdescription' />
                <small id='Hdescription' className='form-text text-muted'>Máx: 500 caractères.</small>
              </div>
              <div className='form-row'>
                <div className='form-group col-6'>
                  <select className='form-control' id='tipe' name='tipe' aria-describedby='Tidescription'>
                    <option defaultValue value='Vert'>Vert</option>
                    <option value='Noir'>Noir</option>
                    <option value='Wulong'>Wulong</option>
                    <option value='PuErh'>Pu Erh</option>
                    <option value='Blanc'>Blanc</option>
                    <option value='Jaune'>Jaune</option>
                  </select>
                  <small id='Tidescription' className='form-text text-muted'>Type de thé</small>
                </div>
                <div className='form-group col-6'>
                  <input type='text' className='form-control' id='origen' name='origen' placeholder="Région ou pays d'origine" />
                </div>
              </div>
              <div className='form-row'>
                <div className='form-group col-4'>
                  <select className='form-control' id='duration' name='duration' aria-describedby='Ddescription'>
                    <option value='10s + 3s'>10s + 3s</option>
                    <option value='R; 10s + 3s'>R; 10s + 3s</option>
                    <option value='2R; 10s + 3s'>2R; 10s + 3s</option>
                    <option value='10s + 5s'>10s + 5s</option>
                    <option value='R; 10s + 5s'>R; 10s + 5s</option>
                    <option value='2R; 10s + 5s'>2R; 10s + 5s</option>
                    <option value='15s + 3s'>15s + 3s</option>
                    <option value='R; 15s + 3s'>R; 15s + 3s</option>
                    <option value='2R; 15s + 3s'>2R; 15s + 3s</option>
                    <option value='20s + 5s'>20s + 5s</option>
                    <option value='R; 20s + 5s'>R; 20s + 5s</option>
                    <option value='2R; 20s + 5s'>2R; 20s + 5s</option>
                    <option value='20s + 10s'>20s + 10s</option>
                    <option value='R; 20s + 10s'>R; 20s + 10s</option>
                    <option value='2R; 20s + 10s'>2R; 20s + 10s</option>
                    <option value='25s + 5s'>25s + 5s</option>
                    <option value='R; 25s + 5s'>R; 25s + 5s</option>
                    <option value='2R; 25s + 5s'>2R; 25s + 5s</option>
                    <option value='25s + 10s'>25s + 10s</option>
                    <option value='R; 25s + 10s'>R; 25s + 10s</option>
                    <option value='2R; 25s + 10s'>2R; 25s + 10s</option>
                    <option value='10 s, 30 s ...'>10s, 30s, ...</option>
                    <option value='30 s - 1 min'>30s - 1min</option>
                    <option value='1 min'>1min</option>
                    <option defaultValue value='1 - 2 min'>1 - 2min</option>
                    <option value='2 min'>2min</option>
                    <option value='2 - 3 min'>2 - 3min</option>
                    <option value='3 min'>3min</option>
                    <option value='3 - 4 min'>3 - 4min</option>
                    <option value='4 min'>4min</option>
                    <option value='4 - 5 min'>4 - 5min</option>
                    <option value='5 min'>5min</option>
                    <option value='2 - 4 min'>2 - 4min</option>
                    <option value='2 - 5 min'>2 - 5min</option>
                    <option value='3 - 5 min'>3 - 5min</option>
                    <option value='5 - 10 min'>5 - 10min</option>
                    <option value='10 min'>10min</option>
                  </select>
                  <small id='Ddescription' className='form-text text-muted'>Temps d'infusion</small>
                </div>
                <div className='form-group col-4'>
                  <select className='form-control' id='tempe' name='tempe' aria-describedby='Tdescription'>
                    <option value='50°C'>50°C</option>
                    <option value='55°C'>55°C</option>
                    <option value='50 - 55°C'>50 - 55°C</option>
                    <option value='60°C'>60°C</option>
                    <option value='65°C'>65°C</option>
                    <option value='60 - 65°C'>60 - 65°C</option>
                    <option defaultValue value='70°C'>70°C</option>
                    <option value='75°C'>75°C</option>
                    <option value='70 - 75°C'>70 - 75°C</option>
                    <option value='80°C'>80°C</option>
                    <option value='85°C'>85°C</option>
                    <option value='80 - 85°C'>80 - 85°C</option>
                    <option value='90°C'>90°C</option>
                    <option value='95°C'>95°C</option>
                    <option value='90 - 95°C'>90 - 95°C</option>
                    <option value='99°C'>99°C</option>
                  </select>
                  <small id='Tdescription' className='form-text text-muted'>La température de l'eau</small>
                </div>
                <div className='form-group col-4'>
                  <select className='form-control' id='grames' name='grames' aria-describedby='Qdescription'>
                    <option value='1/4g'>1/4g</option>
                    <option value='1/3g'>1/3g</option>
                    <option value='1/2g'>1/2g</option>
                    <option value='1g'>1g</option>
                    <option value='2g'>2g</option>
                    <option value='3g'>3g</option>
                    <option value='4g'>4g</option>
                    <option value='5g'>5g</option>
                    <option defaultValue value='6g'>6g</option>
                    <option value='7g'>7g</option>
                    <option value='8g'>8g</option>
                    <option value='9g'>9g</option>
                    <option value='10g'>10g</option>
                  </select>
                  <small id='Qdescription' className='form-text text-muted'>Grammes pour 10 cl</small>
                </div>
              </div>
            </form>
          </div>
          <div className='modal-footer'>
            <Button type='button' className='btn btn-sondary' data-dismiss='modal'>Fermer</Button>
            <Button form='ajout' type='submit' className='btn btn-success'>Ajouter</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
