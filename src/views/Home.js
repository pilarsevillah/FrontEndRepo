import useAuth from '../shared/hooks/useAuth';

export default function Home() {
  const { signOut } = useAuth();

  return (
    <>
      <h1>HOME</h1>

      {/* hacer función para que sólo se vea cuando estás logado y ¿colocarla dentro de opciones de usuarioLogado? */}
      <button onClick={signOut}>Salir</button>
    </>
  );
}
