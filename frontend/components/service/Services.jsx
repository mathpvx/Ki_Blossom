"use client";
import React, { useState } from "react";
import Modal from "react-modal";
import servicesData from "../../data/servicesData";
import ShareSocial from "../social-share/ShareSocial";

// Modal.setAppElement("#__next");

const Services = () => {
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
            <span className="number">{item.no}</span>
            <h3 className="title">{item.title}</h3>
            <p className="text">{item.text}</p>
            <div className="tokyo_tm_read_more">
              <div className="read-more">
                <span>Read More</span>
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
            <img src="/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* END CLOSE ICON */}
          <div className="box_inner">
            <div className="description_wrap scrollable">
              <div className="image">
                <div
                  className="main"
                  style={{
                    backgroundImage: `url(${singleData?.largeImg})`,
                  }}
                ></div>
              </div>
              {/* END IMAGE */}
              <div className="details">
                <div className="extra">
                  <p className="date">
                    By <a href="#">{singleData?.poster}</a>
                    <span>{singleData?.date}</span>
                  </p>
                </div>
                <h3 className="title">{singleData?.largeTitle}</h3>
              </div>
              {/* END DETAILS */}
              <div className="main_content ">
                <div className="descriptions">{singleData?.descriptions}</div>
                {/* END DESCRIPTION */}
                <div className="news_share">
                  <span>Share:</span>
                  <ShareSocial />
                  {/* END SOCIAL SHARE */}
                </div>
                {/* END NEWS SHARE */}
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

export default Services;
