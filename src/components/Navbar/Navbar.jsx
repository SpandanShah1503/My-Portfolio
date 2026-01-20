import { NavLink } from "react-router-dom";
import {
  Home,
  User,
  Grid,
  BookOpen,
  Image as ImageIcon,
} from "lucide-react";

export default function Navbar() {
  return (
    
      <div className="relative flex justify-center  z-50">
      <div className="flex items-center gap-2 px-3 py-2 rounded-full
        backdrop-blur-xl bg-black/40
        border border-white/15 ">

        {/* HOME */}
        <NavItem to="/" icon={<Home size={20} />} />

        <Divider />

        {/* ABOUT */}
        <NavItem to="/about" icon={<User size={20} />} label="About" />

        {/* WORK */}
        <NavItem to="/work" icon={<Grid size={20} />} label="Work" />

        {/* GALLERY */}
        <NavItem to="/gallery" icon={<ImageIcon size={20} />} label="Gallery" />

        {/* Contact */}
        <NavItem to="/contact" icon={<BookOpen size={20} />} label="Contact" />
      </div>
    </div>
  );
}

/* ---------------- SUB COMPONENTS ---------------- */

function NavItem({ to, icon, label }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center gap-2 px-4 py-2 rounded-full
         text-sm font-medium transition
         ${
           isActive
             ? "bg-white/20 text-white"
             : "text-white/70 hover:text-white hover:bg-white/10"
         }`
      }
    >
      {icon}
      {label && <span className="hidden sm:block">{label}</span>}
    </NavLink>
  );
}

function Divider() {
  return <div className="h-6 w-px bg-white/20 mx-1" />;
}
