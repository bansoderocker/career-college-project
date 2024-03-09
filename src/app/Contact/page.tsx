import styles from "../page.module.css";

export default function Contact() {
  return (
    <center>
      <div className="container">
        <div className="row">
          <div className="col-md-12"></div>
          <div className="col-md-12">
            <label className="mt-3">
              Do you have any question? Please do not hesitate to contact us
              directly. Our Team will come back to you within a matter of hours
              to help you.
            </label>
          </div>
          <div className="col-md-8"></div>
          <div className="col-md-4">
            <div className="row">
              <div className="col-md-12">
                <img src="./images/microsoft.svg" />
              </div>
              <div className="col-md-12">
                <label className="mb-3">Kalamboli, MH 410218</label>
              </div>
              <div className="col-md-12">
                <label className="mb-3">+91 99999 88888</label>
              </div>
              <div className="col-md-12">
                <label className="mb-3">career_goal@gmail.com</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </center>
  );
}
