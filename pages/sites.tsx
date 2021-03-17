import geralstyle from "./../styles/sites.module.scss";
const sites = () => {
  return (
    <>
      <div className={geralstyle.geral}>
        <div className={geralstyle.text}>
          <h3>Porque ter um bom website?</h3>
          <p>
            A criação de sites institucionais se tornou praticamente uma
            obrigação para as empresas, para as empresas modernas e bem
            conectadas com a realidade atual se tornou uma porta aberta a grades
            realizações.
          </p>
          <p>
            Mas além de se preucupar em ter um site, é excencial que esse site
            ou plataforma de sua empresa, tenha funcionalidades modernas, bem
            responsivas, e com grande poder de interatividade com seus clientes,
            parceiros, fornecedores, e colaboradores.
          </p>
          <p>
            Para que isso ocorra de uma forma bém dinâmica é indispensável que
            seu site tenha uma programação inteligente, um design moderno porem
            simples de ser assimilado e entendido por todos
          </p>
        </div>
        <img src="/images/sites.svg" alt="Sites e Apps" />
      </div>
      <div className={ geralstyle.complemento}>
        <h1>Sites Corporativos</h1>
        <h6>Site em construção</h6>
      </div>
    </>
  );
};

export default sites;
