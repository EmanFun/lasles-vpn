import { BiLogoFacebook } from "react-icons/bi";
import { BiLogoTwitter } from "react-icons/bi";
import { BiLogoInstagram } from "react-icons/bi";
import NetWork from "../atoms/NetWork";
function Networks() {
  return (
    <div className="flex items-center gap-5">
      <NetWork icon={<BiLogoFacebook size={25} color="#F53838" />} />
      <NetWork icon={<BiLogoTwitter size={25} color="#F53838" />} />
      <NetWork icon={<BiLogoInstagram size={25} color="#F53838" />} />
    </div>
  );
}

export default Networks;
