import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children, navLinks = [], footerLinks = [] }) {
  return (
    <>
      <Navbar links={navLinks} />
      <main className="max-w-7xl mx-auto px-6 py-10">{children}</main>
      <Footer links={footerLinks} />
    </>
  );
}
