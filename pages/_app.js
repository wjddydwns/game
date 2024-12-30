import { Global, css } from "@emotion/react";
import Layout from "../src/layout/index";
const globalStyles = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    width: 100%; /* 화면 너비 전체 사용 */
    height: 100vh; /* 뷰포트 전체 높이 */
    font-family: Arial, sans-serif;
    background: linear-gradient(rgb(8, 8, 8),rgb(45, 45, 53));
    color: #333;
    overflow-x: hidden; /* 가로 스크롤 방지 */
  }
`;

export default function MyApp({ Component, pageProps }) {
  return (
    <>
    
      <Global styles={globalStyles} />
      <Layout>
      <Component {...pageProps} />
      </Layout>
      
    </>
  );
}
