"use client";

import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import {
  FileText,
  GraduationCap,
  LayoutDashboard,
  PenBox,
  StarsIcon,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

function Header() {
  return (
    <header className="fixed top-0 w-full border-b bg-background/80 backdrop-blur-md z-50 supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* LOGO */}
        <Link href="/">
          <Image
            src="/logo.png"
            width={200}
            height={60}
            alt="Logo"
            className="h-12 py-1 w-auto object-contain"
          />
        </Link>

        {/* RIGHT SECTION */}
        <div className="flex items-center gap-4">
          {/* DASHBOARD - Only logged in */}
          <SignedIn>
            <Link href="/dashboard">
              <Button variant="outline">
                <LayoutDashboard className="h-4 w-4" />
                <span className="hidden md:block ml-2">Industry Insights</span>
              </Button>
            </Link>
          </SignedIn>

          {/* GROWTH TOOLS - Always visible / items depend on auth */}
          <SignedIn>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button>
                  <StarsIcon className="h-4 w-4" />
                  <span className="hidden md:block ml-2">Growth Tools</span>
                </Button>
              </DropdownMenuTrigger>

              <DropdownMenuContent>
                <SignedIn>
                  <DropdownMenuItem asChild>
                    <Link href="/resume" className="flex items-center gap-2">
                      <FileText className="h-4 w-4" /> Build Resume
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link
                      href="/ai-cover-letter"
                      className="flex items-center gap-2"
                    >
                      <PenBox className="h-4 w-4" /> Cover Letter
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/interview" className="flex items-center gap-2">
                      <GraduationCap className="h-4 w-4" /> Interview Prep
                    </Link>
                  </DropdownMenuItem>
                </SignedIn>

                <SignedOut>
                  <DropdownMenuItem disabled>
                    Sign in to access tools
                  </DropdownMenuItem>
                </SignedOut>
              </DropdownMenuContent>
            </DropdownMenu>
          </SignedIn>

          {/* AUTH BUTTONS */}
          <SignedOut>
            <SignInButton>
              <Button className="bg-[#6c47ff] text-white rounded-full font-medium text-sm h-10 px-4 cursor-pointer" variant="outline">Sign In</Button>
            </SignInButton>
            <SignUpButton>
              <Button className="bg-[#6c47ff] text-white rounded-full font-medium text-sm h-10 px-4 cursor-pointer">
                Sign Up
              </Button>
            </SignUpButton>
          </SignedOut>

          {/* PROFILE BUTTON */}
          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "w-10 h-10",
                  userButtonPopoverCard: "shadow-xl",
                  userPreviewMainIdentifierL: "font-semibold",
                },
              }}
              afterSignOutUrl="/"
            />
          </SignedIn>
        </div>
      </nav>
    </header>
  );
}

export default Header;
