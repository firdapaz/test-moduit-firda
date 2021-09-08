import React, { useContext, useState } from 'react';
import QuestionOne from './QuestionOne';
import QuestionTwo from './QuestionTwo';
import LOGO from '../assets/logo/logo.svg';
import ICONQ1 from '../assets/icon/Q1.svg';
import ICONQ2 from '../assets/icon/Q2.svg';
import Text from '../components/Text';
import { styMainContainer } from './style';
import { QuestionContext } from '../context/questionContext';

const Content = () => {
  const { active, handleData } = useContext(QuestionContext);
  return (
    <div className={styMainContainer}>
      <div className="sidebar">
        <img className="logo" src={LOGO} alt="" />
        <div className="menu-container">
          <div className={`menu ${active === 'q1' && 'active'}`} onClick={() => handleData('q1')}>
            <img src={ICONQ1} alt="" />
            <Text bold>Question 1</Text>
          </div>
          <div className={`menu ${active === 'q2' && 'active'}`} onClick={() => handleData('q2')}>
            <img src={ICONQ2} alt="" />
            <Text>Question 2</Text>
          </div>
        </div>
      </div>
      <div className="main-content">{active === 'q1' ? <QuestionOne /> : <QuestionTwo />}</div>
    </div>
  );
};

export default Content;
