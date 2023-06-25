import React, { useState } from 'react';

const useModal = () => {
  const [isShow, setIsShow] = useState(false);

  const changeState = () => {
    document.body.classList.toggle('hidden');
    setIsShow((prev) => !prev);
  };

  return { isShow, changeState };
};

export default useModal;
