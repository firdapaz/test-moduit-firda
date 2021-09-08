import React, { useState, useMemo, useEffect, useContext } from 'react';
import { headerContents } from '../../context/helpers';
import TableContent from '../../components/TableContent';
import axios from 'axios';
import { QuestionContext } from '../../context/questionContext';

const QuestionOne = () => {
  const {
    currentData,
    loading,
    paginate,
    pageSize,
    data,
    currentPage,
    handlePageSize,
  } = useContext(QuestionContext);

  return (
    <div>
      <h2 style={{ marginBottom: 40 }}>Question 1</h2>
      <TableContent
        data={currentData}
        loading={loading}
        headerContents={headerContents}
        paginate={paginate}
        pageSize={pageSize}
        totalData={data.length}
        currentPage={currentPage}
        handlePageSize={handlePageSize}
      />
    </div>
  );
};

export default QuestionOne;
