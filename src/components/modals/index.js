import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';

const Index = (props) => {
  const { show, onClose, modalBody, modalFooter } = props;

  useEffect(() => {
    if (show) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [show]);

  if (!show) return null;

  return (
    <Fragment>
      <div className={'modal fade show'} id={'myModal'} tabIndex="-1" role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content mt13">
            <div className="modal-header center">
              <h5 className="modal-title">Form Pengajuan SolusiDana</h5>
              <button onClick={onClose} className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">{modalBody}</div>
            <center>
              <div className="modal-footer center">{modalFooter}</div>
            </center>
          </div>
        </div>
      </div>
      <div className="modal-backdrop fade show"></div>
    </Fragment>
  );
};

Index.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  modalBody: PropTypes.node.isRequired,
  modalFooter: PropTypes.node.isRequired
};

export default Index;
