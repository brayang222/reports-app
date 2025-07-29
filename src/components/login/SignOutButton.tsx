"use client";
import { Button } from "../ui/button";
import { Github } from "lucide-react";
import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";

export const SignOutButton = () => {
  const handleGithubLogOut = async () => {
    await authClient.signOut();
    redirect("login");
  };
  return (
    <div>
      <Button
        size="lg"
        className="w-full h-14 text-base font-medium hover-scale group relative overflow-hidden cursor-pointer"
        onClick={handleGithubLogOut}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
        <Github className="w-5 h-5 relative z-10" />
        <span className="relative z-10">Cerrar sesión</span>
      </Button>
    </div>
  );
};
