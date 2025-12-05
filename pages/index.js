function home() {
  return (
    <div
      style={{
        border: "2px solid blue",
        padding: "20px",
        width: "800px",
        margin: "auto",
        borderRadius: "8px",
      }}
    >
      <h1
        style={{
          border: "2px solid black",
          padding: "16px",
          borderRadius: "8px",
        }}
      >
        <strong>TechNews em Construção</strong>
      </h1>
      <h2>
        <em>Em Desenvolvimento</em>
      </h2>
      <img
        style={{
          width: "800px",
          height: "400px",
        }}
        src="https://www.hostmidia.com.br/img/blog/upload/xg-site-em-construcao.jpg"
        alt="Imagem em Construção"
      />
    </div>
  );
}

export default home;
