
import React from "react";
import Layout from "../components/layout/Layout";
import Card from "../utility/ui/Card";
import Button from "../components/Button";

export default function Home() {
  return (
    <Layout
      navLinks={[
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
      ]}
      footerLinks={[
        { label: "Privacy", href: "/privacy" },
        { label: "Contact", href: "/contact" },
      ]}
    >
      <Card>
        <h2 className="text-xl font-bold mb-4">Welcome!</h2>
        <p>This is a reusable UI component example.</p>

        <div className="mt-4 flex gap-4">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="danger">Delete</Button>
        </div>
      </Card>
    </Layout>
  );
}
