const bd = require("../conexao");

/*inclusão da mensagens dos usuarios*/
const insert_msg = async (chat) => {
  try {
    const conn = await bd.con();
    const sql = "INSERT INTO chat(mens) VALUES (?);";
    const values = [chat.mensagem];
    await conn.execute(sql, values);
    console.log("cadastramento da mensagem realizado com sucesso");
  } catch (error) {
    console.log("deu erro, por alguma causa", error);
    return "Erro no sistema tente novamente mais tarde";
  }
};
module.exports = { insert_msg };
