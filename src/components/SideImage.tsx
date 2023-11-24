import rocket from "../assets/rocket.svg";

export function SideImage() {
  return (
    <div className="max-w-[400px] md:hidden">
      <img src={rocket} alt="Imagem de plano de fundo de um foguete" />
    </div>
  );
}
