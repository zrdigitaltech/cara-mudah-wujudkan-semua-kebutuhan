const Index = (props) => {
  const {
    classModal,
    idModal,
    modalHeader,
    modalBg,
    modalHeading,
    modalBody,
    btnClose,
    onClose,
    style
  } = props;

  return (
    <div
      className={`modal fade ${classModal}`}
      id={idModal}
      tabIndex="-1"
      role="dialog"
      aria-labelledby={idModal}
      aria-hidden="true"
      style={style}
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          {modalHeader && (
            <div className="modal-header">
              {modalHeader}

              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={onClose}
              >
                <i className="ml-symtwo-24-multiply-cross-math"></i>
              </button>
              {/* <!-- End of .close --> */}
            </div>
          )}
          {/* <!-- End of .modal-header --> */}

          {modalBg}
          {/* <!-- End of .modal-bg --> */}

          {btnClose && (
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <i className="ml-symtwo-24-multiply-cross-math"></i>
            </button>
          )}
          {/* <!-- End of .close --> */}

          {modalHeading}
          {/* <!-- End of .modal-heading --> */}

          <div className="modal-body">{modalBody}</div>
          {/* <!-- End of .modal-body --> */}
        </div>
        {/* <!-- End of .modal-content --> */}
      </div>
      {/* <!-- End of .modal-dialog --> */}
    </div>
  );
};

export default Index;
