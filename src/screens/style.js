import { css } from '@emotion/css';

export const styMainContainer = css`
  display: flex;
  height: 100%;
  font-size: 12px;

  .sidebar {
    width: 20%;
    box-shadow: 0px 8px 16px rgba(51, 51, 51, 0.08);
    border-radius: 20px;

    .logo {
      margin-bottom: 80px;
      padding: 32px;
    }

    .menu {
      margin-bottom: 16px;
      display: flex;
      align-items: center;
      height: 40px;
      padding-left: 32px;
      cursor: pointer;
      color: grey;

      img {
        margin-right: 16px;
      }
    }

    .active {
      font-weight: bold;
      border-right: solid 3px blue;
      color: blue;
    }
  }
  .main-content {
    width: 80%;
    padding: 32px;
    background-color: #f6f8fb;
  }
`;
