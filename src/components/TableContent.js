import React from 'react';
import {
  styTableContentCol,
  styFooterTable,
  styTableContainer,
  styTableHeaderRow,
  styTableHeaderCol,
} from './style';
import Pagination from './Pagination';

const TableContent = ({
  data,
  loading,
  headerContents,
  pageSize,
  paginate,
  totalData,
  currentPage,
  handlePageSize,
}) => {
  return (
    <div className={styTableContainer}>
      <div className={styTableHeaderRow}>
        {headerContents.map((content, idx) => (
          <div
            style={{ width: content.width }}
            className={`${styTableHeaderCol({ align: content.align })} ${content.className}`}
            key={content.text}
          >
            {content.text}
          </div>
        ))}
      </div>
      <div>
        {data.map((content, i) => (
          <div key={`content-${i}`}>
            <div style={{ display: 'flex' }}>
              {content?.result.map((col, colIdx) => (
                <div
                  className={styTableContentCol({
                    align: col.align,
                    bold: col.bold,
                  })}
                  style={{
                    width: headerContents[colIdx].width,
                    ...col.style,
                  }}
                >
                  {col.text}
                </div>
              ))}
            </div>
          </div>
        ))}
        {loading && <div>Loading...</div>}
        <div className={styFooterTable}>
          <div className="pagination">
            <Pagination
              pageSize={pageSize}
              totalData={totalData}
              paginate={paginate}
              currentPage={currentPage}
            />
          </div>
          <div className="show-list">
            <label for="pageSize">Show</label>
            <select
              name="pageSize"
              id="pagesize"
              onClick={e => handlePageSize(parseInt(e.target.value, 10))}
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
              <option value="20">20</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableContent;
