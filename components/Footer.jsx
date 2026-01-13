import {
  MapPin,
  Phone,
  Mail,
  Cake,
  Instagram,
  Facebook,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* COLUMN 1 */}
        <div className="footer-col">
        <h3 className="flex items-center gap-3 footer-logo">
  <Cake size={28} className="text-[#FFC107]" />
  <span className="footer-logo-text">1+ Cake Shop</span>
</h3>


          <p className="footer-desc">
            Delight in every bite. Custom cakes,
            snacks, and more created with love and
            passion.
          </p>

          <div className="footer-social">
            <span className="social-icon">
              <Instagram size={20} />
            </span>
            <span className="social-icon">
              <Facebook size={20} />
            </span>
          </div>
        </div>

        {/* COLUMN 2 */}
        <div className="footer-col">
          <h4 className="footer-title">Quick Links</h4>
          <ul className="footer-links">
            <li>Home</li>
            <li>Menu</li>
            <li>Custom Cake</li>
            <li>About Us</li>
          </ul>
        </div>

        {/* COLUMN 3 */}
        <div className="footer-col">
          <h4 className="footer-title">Contact Us</h4>
          <ul className="footer-contact">
            <li>
              <MapPin size={16} /> 123 Baker Street, Cake City
            </li>
            <li>
              <Phone size={16} /> +91 98765 43210
            </li>
            <li>
              <Mail size={16} /> info@1pluscakes.com
            </li>
          </ul>
        </div>

        {/* COLUMN 4 */}
        <div className="footer-col">
          <h4 className="footer-title">Opening Hours</h4>
          <p className="footer-hours">
            Mon - Fri: 9:00 AM - 10:00 PM
          </p>
          <p className="footer-hours">
            Sat - Sun: 10:00 AM - 11:00 PM
          </p>
        </div>

      </div>

      {/* FOOTER BOTTOM */}
      <div className="footer-bottom">
        © 2024 1+ Cake Shop. All rights reserved.
      </div>
    </footer>
  );
}