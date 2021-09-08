import React, { useMemo, useState, useEffect, useCallback } from 'react';
import { node } from 'prop-types';
import { mockDataQ1, getQuestionContent, mockDataQ2 } from './helpers';

export const QuestionContext = React.createContext();

const QuestionProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const [active, setActive] = useState('q1');

  const indexOfLastData = currentPage + pageSize;
  const indexOfFirstData = indexOfLastData - pageSize;
  const tableContentsOne = useMemo(() => getQuestionContent(mockDataQ1), [mockDataQ1]);
  const tableContentsTwo = useMemo(() => getQuestionContent(mockDataQ2), [mockDataQ2]);

  const [data, setData] = useState(tableContentsOne);

  const currentData = data.slice(indexOfFirstData, indexOfLastData);
  const paginate = number => setCurrentPage(number);
  const handlePageSize = number => setPageSize(number);
  const handleData = active => {
    active === 'q1' ? setData(tableContentsOne) : setData(tableContentsTwo);
    setActive(active);
  };

  //CORS Error, same-origin-strict
  // useEffect(() => {

  //   const fetchData = async () => {
  //     setLoading(true);
  //     const res = await axios.get('https://screening.moduit.id/frontend/web/question/one');
  //     setData(res.data);
  //     setLoading(false);
  //   };
  //   fetchData();
  // }, []);

  const valueProps = {
    currentData,
    loading,
    paginate,
    pageSize,
    currentPage,
    handlePageSize,
    handleData,
    active,
    data,
  };

  return <QuestionContext.Provider value={valueProps}>{children}</QuestionContext.Provider>;
};

QuestionProvider.propTypes = {
  children: node.isRequired,
};

export default QuestionProvider;
