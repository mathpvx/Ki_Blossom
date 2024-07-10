"use client";
import React, { useState } from "react";
import Modal from "react-modal";
import servicesData from "../../data/servicesData";


// Modal.setAppElement("#__next");

const Projet = () => {
  const [singleData, setSingleData] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  const handleBServicesData = (id) => {
    const find = servicesData.find((item) => item?.id === id);
    setSingleData(find);
    setIsOpen(true);
  };

  const handleModle = (id) => {
    handleBServicesData(id);
  };

  return (
    <>
      {servicesData.map((item) => (
        <li key={item.id}>
          <div className="list_inner" onClick={() => handleModle(item?.id)}>
            <h3 className="title">{item.title}</h3>
            <div className="tokyo_tm_read_more">
              <div className="read-more">
                <span>Lire</span>
              </div>
            </div>
          </div>
        </li>
      ))}

      {/* START MODAL */}
      <Modal
        ariaHideApp={false}
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div className="tokyo_tm_modalbox_news">
          <button className="close-modal" onClick={() => setIsOpen(false)}>
          </button>
          {/* END CLOSE ICON */}
          <div className="box_inner">
            <div className="description_wrap scrollable">
              <div className="details">
                <div className="extra">
                  <p className="date">
                    <a href="#">{singleData?.poster}</a>
                    <span>{singleData?.date}</span>
                  </p>
                </div>
                <h3 className="title">{singleData?.largeTitle}</h3>
              </div>
              {/* END DETAILS */}
              <div className="main_content ">
                <div className="descriptions">{singleData?.descriptions}</div>
                {/* END DESCRIPTION */}
              </div>
            </div>
          </div>
          {/* END BOX INNER */}
        </div>
        {/* END MODALBOX NEWS */}
      </Modal>
      {/* END MODAL */}
    </>
  );
};

export default Projet;
