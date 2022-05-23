import "../styles/TermsCondi.module.css";
const TermsConditions = () => {
  return (
    <div className="d-flex flex-wrap my-3">
      <p className="term_condi_para">
        By clicking Sign In, you agree to our
        <a href="#" className="text-decoration-none term_condi_link">
          <span className="fw-bold mx-1">Terms of Use</span>
        </a>
        and our
        <a href="#" className="text-decoration-none term_condi_link">
          <span className="fw-bold mx-1">Privacy Policy</span>
        </a>
        .
      </p>
    </div>
  );
};

export default TermsConditions;
