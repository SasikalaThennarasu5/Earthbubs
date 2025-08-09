import {
  FaInstagram,
  FaFacebookF,
  FaTwitter
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-lightblue text-black font-poppins text-md">
      <div className="max-w-7xl mx-auto px-4 py-10 grid gap-8 md:grid-cols-4 grid-cols-1">
        {/* KNOW Section */}
        <div>
          <h3 className="font-semibold mb-2 border-b-2 border-black w-fit pb-1">KNOW</h3>
          <ul className="space-y-2 mt-2">
            <li>About Us</li>
            <li>About Earthbubs Store</li>
            <li>Bulk Purchase & Corporate Gifts</li>
          </ul>
        </div>

        {/* TERMS & CONDITIONS */}
        <div>
          <h3 className="font-semibold mb-2 border-b-2 border-black w-fit pb-1">TERMS & CONDITIONS</h3>
          <ul className="space-y-2 mt-2">
            <li>Shipping & Return Policies</li>
            <li>Privacy Policy</li>
            <li>FAQ’s</li>
          </ul>
        </div>

        {/* CONTACT US */}
        <div>
          <h3 className="font-semibold mb-2 border-b-2 border-black w-fit pb-1">CONTACT US</h3>
          <div className="mt-2 space-y-2">
            <p><strong>For Sale:</strong> Earthbubs@co.in</p>
            <p><strong>Call:</strong> +91 1234567890</p>
            <p><strong>For Complaints:</strong> 1800 202 2222</p>
            <p>Chat Time: Our Team is Available<br />From Monday to Saturday from 9.00AM to 8.00PM</p>
            <p><strong>For Complaints:</strong> Ebcustomercare.com</p>
          </div>
        </div>

        {/* FOLLOW US */}
        <div>
          <h3 className="font-semibold mb-2 border-b-2 border-black w-fit pb-1">FOLLOW US</h3>
          <div className="flex items-center gap-4 mt-4 text-2xl text-black">
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
          </div>
        </div>
      </div>

      {/* Bottom border line */}
      <div className="border-t border-black my-2 mx-4"></div>

      {/* Footer Bottom Text */}
      <p className="text-center py-4 text-sm text-black">
        Copyright © 2025 All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
