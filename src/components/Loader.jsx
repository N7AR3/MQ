import "./Loader.css";

const Loader = () => {
  return (
    <div className="container">
      <div className="box">
        <h1> MQ HOTEL SUITES </h1>
        <h3> Restoran & SPA </h3>
        <p> Hoş Geldiniz </p>
        <div className="animation">
          <div className="lds-roller">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
