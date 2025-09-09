"use client";

export default function Navbar() {
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "My Exams", href: "/exams" },
    { label: "Courses", href: "/courses" },
    { label: "Certificates", href: "/certificates" },
  ];

  return (
    <header className="text-white px-6 py-4" style={{ backgroundColor: "#154D71" }}>
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-lg">Achridge College</span>
        </div>

        <nav className="hidden md:flex flex-1 justify-center gap-12 text-lg font-semibold">
          {navLinks.map((link, i) => (
            <a key={i} href={link.href} className="hover:underline hover:text-blue-200">
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
