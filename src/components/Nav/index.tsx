import Logo from "../../assets/Logo.png";
export default function Nav() {
  return (
    <div className="nav-container flex items-center justify-evenly p-8 ">
      <div className="text-lg">
        <img src={Logo} alt="Logo" />
      </div>
      <div className=" flex items-center gap-4 font-normal text-md">
        <a href="">About</a>
        <a href="">Features</a>
        <a href="">Pricing</a>
        <a href="">Testimonials</a>
        <a href="">Help</a>
      </div>
      <div className="flex gap-4 font-medium">
        <button>Sign In</button>
        <button>Sign Up</button>
      </div>
    </div>
  );
}
