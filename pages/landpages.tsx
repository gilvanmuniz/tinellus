import geralstyle from "./../styles/sites.module.scss";
const land = () => {
  return (
    <>
      <div className={geralstyle.geral}>
        <img src="/images/Landing_page.svg" alt="" />
        <div className={geralstyle.text}>
          <p>
            <h3>Você sabe para que serve uma Landing Page?</h3>
            <h4>Conhece seu poder para vendas?</h4>
          </p>
        </div>
      </div>
      <div className={geralstyle.complemento}>
        <h1>Landing Pages</h1>
        <h6>Site em construção</h6>
      </div>
    </>
  );
};

export default land;
