import geralstyle from "./../styles/sites.module.scss";
const edicao = () => {
  return (
    <>
      <div className={geralstyle.geral}>
        <img id="video" src="/images/videos.svg" alt="Edição de Vídeos" />
        <div className={geralstyle.text}>
          <h3>Vídeos! Um impulso forte às vendas!</h3>
          <h3>Tenha edição PROFISSIONAL para seus vídeos.</h3>
        </div>
      </div>
      <div className={geralstyle.complemento}>
        <h1>Edição de Vídeos</h1>
      </div>
    </>
  );
};

export default edicao;
