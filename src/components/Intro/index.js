import "./intro.css";

const Intro = () => {
  return (
    <div className="intro">
      <div className="intro-left-wrapper">
        <div className="intro-left">
          <h2 className="intro-name">Nicholas Haretakis</h2>
          <div className="intro-title">
            <div className="intro-title-wrapper" c>
              <div className="intro-title-item">Web Developer</div>
              <div className="intro-title-item">Anthropologist</div>
            </div>
          </div>
          <div className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </div>
      </div>
      <div className="intro-right-wrapper">
        <div className="intro-right">
            <img src="" alt="" className="intro-img"></img>
        </div>
      </div>
    </div>
  );
};

export default Intro;
