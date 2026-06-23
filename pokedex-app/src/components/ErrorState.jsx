export default function ErrorState({ message }) {
  return (
    <div className="state state-error" role="alert">
      <h2>Ops! Algo deu errado</h2>
      <p>{message}</p>
    </div>
  );
}
