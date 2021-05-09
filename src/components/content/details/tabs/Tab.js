import { useState, useEffect } from 'react';

const Tab = ({ activeTab, label, onClick }) => {
  const [className, setClassName] = useState('tab-list-item');

  const onTabClick = () => {
    onClick(label);
  };

  return (
    <>
      <li className={className} onClick={onTabClick}>
        {label}
      </li>
    </>
  );
};

export default Tab;
