const FacebookButton = () => {
  const fbimg = `https://cdn.iconscout.com/icon/free/png-64/facebook-262-721949.png`;

  return (
    <div className="">
      <button
        type="button"
        className="btn btn-secondary btn-lg m-2 border-0 shadow-sm d-flex justify-content-evenly facebook"
      >
        <div className="d-flex">
          <img src={fbimg} className="fbsvg d-flex align-self-center"></img>
          <div className="fbbuttonfont d-flex align-self-center">
            Sign in with Facebook
          </div>
        </div>
      </button>
    </div>
  );
};

export default FacebookButton;
