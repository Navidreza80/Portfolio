import Link from "next/link";

const navLinks = ["Testimonial", "Experiences", "Projects", "Contact"];

const Header = () => {
  return (
    <header className="flex justify-between px-20 pt-[50px] pb-4 w-full">
      <span className="font-black text-2xl text-primary">NAVID</span>
      <div className="flex gap-[34px]">
        {navLinks.map((item) => (
          <Link href={`#${item}`} key={item} className="font-light text-primary">{item}</Link>
        ))}
      </div>
    </header>
  );
};
export default Header;
