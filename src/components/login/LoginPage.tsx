"use client";
import { Github } from "lucide-react";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { authClient } from "@/lib/auth-client";

export const LoginPage = () => {
  const handleGithubLogin = async () => {
    console.log("GitHub login clicked");
    await authClient.signIn.social({
      callbackURL: "/",
      provider: "github",
    });
  };
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="absolute inset-0 opacity-50 bg-gradient-to-br from-slate-800/20 to-slate-900/40"></div>

      <Card className="w-full max-w-md relative backdrop-blur-sm bg-card/80 border-slate-700">
        <CardHeader className="text-center space-y-4">
          <div className="mx-auto w-16 h-16 bg-gradient-to-br from-slate-700 to-slate-800 rounded-full flex items-center justify-center">
            <Github className="w-8 h-8 text-white" />
          </div>
          <div>
            <CardTitle className="text-2xl font-bold">Bienvenido!</CardTitle>
            <CardDescription className="text-muted-foreground mt-2">
              Inicia sesión con tu cuenta de github
            </CardDescription>
          </div>
        </CardHeader>

        <CardContent className="space-y-6 pb-8">
          <Button
            size="lg"
            className="w-full h-14 text-base font-medium hover-scale group relative overflow-hidden cursor-pointer"
            onClick={handleGithubLogin}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            <Github className="w-5 h-5 relative z-10" />
            <span className="relative z-10">Iniciar sesión</span>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};
