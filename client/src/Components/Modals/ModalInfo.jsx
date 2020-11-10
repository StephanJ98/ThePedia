import React from 'react';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

export default function ModalInfo() {
    return (
        <div className="modal fade" id="info" tabIndex="-1" role="dialog" aria-labelledby="Thepuerh" aria-hidden="true">
            <div className="modal-dialog modal-lg" role="document">
                <div className="modal-content">
                    <div className="modal-body row">
                        <div className="col-12">
                        </div>
                    </div>
                    <div className="modal-footer">
                        <Button type="button" className="btn btn-secondary" data-dismiss="modal">Fermer</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}