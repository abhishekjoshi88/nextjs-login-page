const GoogleButton = () => {
  const googleimg = `https://raw.githubusercontent.com/gist/twolfson/8f578c0720df7fc87f29e4d8395cf76b/raw/cee86d79725205756e742469b5f02dacf30a09a7/logo-from-builder.optimized.svg`;

  return (
    <div className="">
      <button
        type="button"
        className="btn btn-primary btn-lg m-2 border-0 shadow-sm d-flex justify-content-evenly google "
      >
        <div>
          <img
            src={googleimg}
            className="googlesvg d-flex align-self-center"
          ></img>
        </div>
        <div className="googlebtnfont d-flex align-item-center">
          Sign in with Google
        </div>
      </button>
    </div>
  );
};

export default GoogleButton;
