import type { NextPage } from "next";
import Page from "../components/Page";
import styles from "../styles/Page.module.css";

const Home: NextPage = () => {
  return (
    <>
      <a href="/api/pdf" download="generated_pdf.pdf" className="downloadBtn">
        Download PDF
      </a>
      <div className={styles.page}> this is sagor my name is sagor </div>
      {/*   <Page>
        <h1>Generated PDF</h1>
        <p>As you can see you can scroll without issues and select text.</p>
      </Page>
      <Page>
        <h1>Page 2</h1>
        <p>As you can see you can scroll without issues and select text.</p>
        <p>sagor sagor sgoer</p>
      </Page> */}
    </>
  );
};

export default Home;
