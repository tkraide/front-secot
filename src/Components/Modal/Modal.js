import React, { useState } from "react";
import "./Modal.css";
import dataImg from "../../img/date-icon.png";

export default function Modal({
    titulo,
    palestrante,
    data,
    horario,
    descricao,
    estado,
    visiBotao,
    diaSemana
  }) {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        {estado}
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <div className="modal-header">
              <h3>{titulo}</h3>
              <li className="palestrante">Por {palestrante}</li>
              <span className="data"><img src={dataImg}></img>{diaSemana}, {data} às {horario}</span>
            </div>
            <p className="descricao">
              {descricao}
            </p>
            {visiBotao && <button>Botão Visível</button>}
            <button className="close-modal" onClick={toggleModal}>
              <svg viewPort="0 0 12 12" version="1.1"xmlns="http://www.w3.org/2000/svg"><line x1="1" y1="15" x2="15" y2="1" stroke="white" stroke-width="2"/><line x1="1" y1="1" x2="15" y2="15" stroke="white" stroke-width="2"/>
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}