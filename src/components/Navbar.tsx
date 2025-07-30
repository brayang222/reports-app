"use client";
import { DollarSign } from "lucide-react";
import { Button } from "./ui/button";
import { SignOutButton } from "./auth/SignOutButton";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";

export const Navbar = () => {
  const location = usePathname();
  const isActive = (path: string) => location === path;

  const { data: session } = authClient.useSession();

  if (location === "/login") return <></>;

  return (
    <nav className="bg-card border-b border-border shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <Link
              href="/"
              className="flex items-center space-x-2 font-bold text-lg text-foreground"
            >
              <DollarSign className="h-6 w-6 text-primary" />
              <span className="">App reportes</span>
            </Link>

            <div className="hidden md:flex items-center space-x-6">
              <Link
                href="/"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive("/")
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                Ingresos y Egresos
              </Link>

              {session && (
                <>
                  <Link
                    href="/users"
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive("/users")
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                    }`}
                  >
                    Usuarios
                  </Link>

                  <Link
                    href="/reports"
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive("/reports")
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                    }`}
                  >
                    Reportes
                  </Link>
                </>
              )}
            </div>
          </div>

          <div className="flex items-center space-x-4">
            {session ? (
              <>
                <span className="text-sm text-muted-foreground hidden sm:block">
                  Hola, {session.user.name}
                </span>
                <SignOutButton />
              </>
            ) : (
              <Button variant="default" size="lg">
                Iniciar Sesión
              </Button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
