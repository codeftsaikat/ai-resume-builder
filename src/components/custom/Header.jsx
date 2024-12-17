import { Button } from "../ui/button";

const Header = () => {
  return (
    <div className="p-3 px-5 flex justify-between shadow-md">
      <img src="/logo.svg" alt="Logo" width={100} height={100} />
      <Button>Get Started</Button>
    </div>
  );
};

export default Header;
