"use client";
import styles from "./page.module.css";
// add bootstrap css
import "bootstrap/dist/css/bootstrap.css";
export default function Home() {
  return (
    // <main className={styles.main}>
    //   <div className={styles.description}>
    <div className="container">
      <div className="row">
        {/* <div className="col-md-6">
          Let me know your dreams meet the destination
        </div> */}
        <div className="col-md-12">
          <center>
            <img src="./images/confused.png" />
          </center>
        </div>
      </div>
    </div>
    //   </div>
    // </main>
  );
}
