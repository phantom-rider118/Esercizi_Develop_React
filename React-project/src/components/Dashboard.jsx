import { useContext } from "react";
import { UserContext } from "./UserContext";
import { FakeUser } from "./FakeUser";

export function Dashboard() {
  const { logout, userLogged } = useContext(UserContext);

  //userLogged contiene tutti i dati, quindi nome, cognome, email e password
  return (
    <>
      {userLogged ? (
        <>
          <div>
            <h2>
              Ciao, {userLogged.nome} {userLogged.cognome}
            </h2>
            <div>
              <div>
                <span>Nome: </span>
                <span style={{ color: "red" }}>{userLogged.nome}</span>
              </div>
              <div>
                <span>Cognome: </span>
                <span style={{ color: "red" }}>{userLogged.cognome}</span>
              </div>
              <div>
                <span>Email: </span>
                <span style={{ color: "red" }}>{userLogged.email}</span>
              </div>
            </div>
            <button onClick={logout}>Logout</button>
          </div>
          <h2>Lista utenti registrati: </h2>
          <FakeUser />
        </>
      ) : (
        <p>Nessun utente effettua il login</p>
      )}
    </>
  );
}
