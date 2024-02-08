import React, { useState } from "react";
import { Modal } from "antd";
interface modaltype {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const Simplemodal: React.FC<modaltype> = ({ isModalOpen, setIsModalOpen }) => {
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      <Modal title="" open={isModalOpen} onCancel={handleCancel}>
        <div className="w-full h-[400px]">
          <img
            src="/../assets/welcome.jpg"
            alt="image of welocme"
            className="w-full h-full object-cover"
          />
        </div>
      </Modal>
    </div>
  );
};

export default Simplemodal;
