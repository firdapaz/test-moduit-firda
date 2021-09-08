import { css } from '@emotion/css';

export const styText = bold => css`
  text-width: ${bold ? 'bold' : 'normal'};
`;

export const styTableContainer = css`
  padding: 24px;
  margin-top: 24px;
  box-shadow: 0px 0 8px 0 rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  overflow: hidden;
  background-color: #fff;
`;

export const styTableHeaderRow = css`
  display: flex;
  width: 100%;
  border-bottom: solid 1px #f5f5f5;
`;

export const styTableHeaderCol = ({ align }) => css`
  color: #777;
  font-size: 12px;
  border: none;
  font-weight: normal;
  padding: 4px 16px;
  height: 32px;
  vertical-align: middle;
  align-items: center;
  display: flex;
  font-weight: bold;
  ${align === 'right' && 'justify-content: flex-end; text-align: right;'}
  ${align === 'left' && 'text-align: left;'} ${align === 'center' && 'justify-content: center'};
`;

export const styTableContentCol = ({ align, color }) => css`
  padding: 0px 16px;
  height: 100px;
  display: flex;
  align-items: center;
  border-bottom: solid 1px #f5f5f5;
  display: flex !important;
  color: ${color} !important;
  margin-top: 0px !important;
  ${align === 'right' && 'justify-content: flex-end; text-align: right;'}
  ${align === 'left' && 'text-align: left;'}
  ${align === 'center' && 'justify-content: center'}
`;

export const styTableContentRow = css`
  padding: 16px 0;
  width: 100%;
`;

export const styFooterTable = css`
  display: flex;
  padding: 32px 32px 0px;
  justify-content: space-between;

  label {
    margin-right: 8px;
  }

  select {
    padding: 4px;
    border-radius: 50px;
  }
`;

export const styPagination = css`
  list-style: none;
  display: flex;
  border: solid 1px #777;
  border-radius: 30px;
  padding: 0px 8px;
  align-items: center;

  .page-item {
    padding: 8px 16px;
  }

  .page-link {
    text-decoration: none;
  }
`;

export const styAlpha = css`
  display: flex;
  align-items: center;

  div {
    width: 32px;
    height: 32px;
    border-radius: 100px;
    background-color: blue;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    margin-right: 8px;
    font-weight: bold;
  }
`;
