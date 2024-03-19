import Logo from '../../assets/Logo.png';

function Header() {
  return (
    <header
      className="w-screen h-14 flex items-center
    justify-center border-b shadow-md mb-5 py-1"
    >
      <img className="h-full" src={ Logo } alt="Logo" />
    </header>
  );
}

export default Header;
