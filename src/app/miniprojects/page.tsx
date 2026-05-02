import type { Metadata } from "next";

import Navbar from "@/components/Navbar";
import MiniProjects from "@/components/MiniProjects";

export const metadata: Metadata = {
  title: "Mini Projects — unboundedraj",
  description: "A modular collection of mini projects, experiments, and small builds with links and details.",
};

export default function MiniProjectsPage() {
  return (
    <div className="min-h-screen bg-[#101010]">
      <Navbar />
      <MiniProjects />
    </div>
  );
}