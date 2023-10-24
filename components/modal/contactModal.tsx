"use client";

import { BsFillCheckCircleFill } from "react-icons/bs";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { close } from "@/redux/features/contactModalSlice";
import { useEffect } from "react";

const Modal = () => {
  const isOpen = useAppSelector((state) => state.contactModalSlice.isOpen);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isOpen === true) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [isOpen]);

  return (
    <div className={`modal ${isOpen ? "active-c" : "inactive-c"}`}>
      <div className="contact-modal">
        <div className="head">
          <p>
            Thank you for your enquiry, we'll get back to you as soon as
            possible
          </p>
        </div>
        <div className="body">
          <BsFillCheckCircleFill />
        </div>
        <div className="btn">
          <button className="btn-main" onClick={() => dispatch(close())}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
