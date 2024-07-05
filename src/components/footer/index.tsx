// import Logo from "@/assets/hgym2.png";
//
// const Footer = () => {
//   return (
//     <footer className="bg-slate-dark text-slate-white py-16">
//       <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
//         {/* section1 */}
//         <div className="basis-1/2 md:mt-0">
//           <img alt="logo" src={Logo} />
//           <p className="my-5">
//             Lorem vitae ut augue auctor faucibus eget eget ut libero. Elementum purus et arcu massa dictum condimentum.
//             Augue scelerisque iaculis orci ut habitant laoreet. Iaculis tristique.
//           </p>
//           <p>© Hypergym All Rights Reserved.</p>
//         </div>
//
//         {/* section2 */}
//         <div className="mt-16 basis-1/4 md:mt-0">
//           <h4 className="font-bold">Links</h4>
//           <p className="my-5">Massa orci senectus</p>
//           <p className="my-5">Et gravida id et etiam</p>
//           <p>Ullamcorper vivamus</p>
//         </div>
//
//         {/* section3 */}
//         <div className="mt-16 basis-1/4 md:mt-0">
//           <h4 className="font-bold">Contact Us</h4>
//           <p className="my-5">Tempus metus mattis risus volutpat egestas.</p>
//           <p>(333)425-6825</p>
//         </div>
//       </div>
//     </footer>
//   );
// };
//
// export default Footer;


import Logo from "@/assets/hgym2.png";
import { FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa";
import styles from "./Footer.css"; // Adjust the path as needed


const Footer = () => {
  return (
    <footer className="bg-slate-dark text-slate-white py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        {/* section1 */}
        <div className="basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} />

          <p>© Hypergym All Rights Reserved.</p>
        </div>

        {/* section2 */}
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Massa orci senectus</p>
          <p className="my-5">Et gravida id et etiam</p>
          <p>Ullamcorper vivamus</p>
        </div>

        {/* section3 */}
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">Tempus metus mattis risus volutpat egestas.</p>
          <p>(+234)9011-2378-30</p>
          {/* Social Media Icons */}
          <div className="mt-5 flex items-center gap-4">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={30} className={`text-pink-600 hover:${styles["text-pink-600"]}`} />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={30} className={`text-blue-600 hover:${styles["text-blue-600"]}`} />
            </a>
            <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
              <FaTiktok size={30} className={`text-black hover:${styles["text-black"]}`} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
