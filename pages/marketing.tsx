import geralstyle from "./../styles/sites.module.scss";
const marketing = () => {
  return (
    <>
      <div className={geralstyle.geral}>
        <div className={geralstyle.text}>
          <p>
            <h3>A força das Redes sociais!!!</h3>
            <h4>Revolução de Marketing!!</h4>
          </p>
        </div>
        <img src="/images/siteWoman.jpg" alt="Sites e Apps" />
      </div>
      <div className={geralstyle.complemento}>
        <h1>Marketing Digital</h1>
        <h6>Site em construção</h6>
      </div>
    </>
  );
};

export default marketing;
