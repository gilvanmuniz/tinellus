import geralstyle from "./../styles/geral.module.scss";
const sites = () => {
  return (
    <>
      <div className={ geralstyle.geral}>
        <img src="/images/sites.svg" alt="Sites e Apps"/>
        <h1>Sites Corporativos</h1>
      </div>
    </>
  );
};

export default sites;