import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
} from "@heroui/react";

export default function PortfolioNavbar() {
  const menuItems = ["Home", "About", "Projects", "Skills", "Contact"];

  return (
    <Navbar
      position="sticky"
      isBordered={false}
      isBlurred={false}
      height="96px"
      classNames={{
    base: "z-50 backdrop-blur-lg bg-black/40 border-b border-white/10",
    wrapper: "min-h-[64px] px-6",   
  }}
    >
      {/* LEFT: Brand */}
      <NavbarBrand className="flex items-center">
      <p className=" text-xl text-white">Spandan Shah</p>
      </NavbarBrand>  


      {/* CENTER: Desktop Menu */}
        <NavbarContent
  className="hidden sm:flex gap-8 items-center ml-auto"
  justify="end"
>

        <NavbarItem isActive>
          <Link href="#home" className="text-white">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#about" className="text-white">
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#projects" className="text-white">
            Projects
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#contact" className="text-white">
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>

      {/* RIGHT: Mobile Menu Toggle */}
      <NavbarContent justify="end">
        <NavbarMenuToggle className="sm:hidden text-white" />
      </NavbarContent>

      {/* MOBILE MENU */}
      <NavbarMenu className="bg-transparent text-white">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={index}>
            <Link
              href={`#${item.toLowerCase()}`}
              className="w-full text-lg text-white"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
