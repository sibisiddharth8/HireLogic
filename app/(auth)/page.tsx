"use client";

import Header from "@/components/layout/Header";
import { useUser } from "@clerk/nextjs";
import { ArrowBigUp, AtomIcon, Edit, Share2 } from "lucide-react";
import Link from "next/link";
import React from "react";

const page = () => {
  const user = useUser();

  return (
    <div>
      <Header />
      <section className="flex flex-col items-center justify-center min-h-[90vh]">
        <div className="flex flex-col justify-center items-center py-8 px-6 text-center">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-black md:text-5xl lg:text-6xl">
            Build Your Resume With <span className="text-primary-700 max-sm:block">HireLogic</span>
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-700 lg:text-xl sm:px-16 xl:px-48">
            Effortlessly Craft a Professional Resume with Our AI-Powered Builder
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <Link
              href={`${!user?.isSignedIn ? "/sign-up" : "/dashboard"}`}
              className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary-700 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
            >
              <span className="relative text-base font-semibold text-white">
                Get Started
              </span>
            </Link>
            <Link
              href="#learn-more"
              className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:border before:border-transparent before:bg-slate-200 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
            >
              <span className="relative text-base font-semibold text-primary">
                Learn more
              </span>
            </Link>
          </div>
        </div>
      </section>
      <section className="py-8 px-6 mx-auto max-w-screen-xl text-center lg:py-8 lg:px-12 md:px-10">
        <h2 className="font-bold text-4xl" id="learn-more">
          How it Works?
        </h2>
        <h2 className="text-md text-gray-500">
          Generate resume in just 3 steps
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 md:px-24">
          <div className="cursor-pointer p-8 border border-gray-200 rounded-xl bg-white shadow-lg hover:shadow-2xl hover:scale-[107%] transition-all duration-300 ease-in-out transform">
            <AtomIcon className="h-10 w-10 text-primary-700" />
            <h2 className="mt-4 text-xl font-semibold text-black">
              Create Your Template
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Start by selecting the color scheme for your resume template. Our single, professionally designed template ensures a clean and consistent look for all users.
            </p>
          </div>

          <div className="cursor-pointer p-8 border border-gray-200 rounded-xl bg-white shadow-lg hover:shadow-2xl hover:scale-[107%] transition-all duration-300 ease-in-out transform">
            <Edit className="h-10 w-10 text-primary-700" />
            <h2 className="mt-4 text-xl font-semibold text-black">
              Update Your Information
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Enter your personal details, work experience, education, and skills into the provided form. Our AI assists you in filling out each section accurately and effectively.
            </p>
          </div>

          <div className="cursor-pointer p-8 border border-gray-200 rounded-xl bg-white shadow-lg hover:shadow-2xl hover:scale-[107%] transition-all duration-300 ease-in-out transform">
            <Share2 className="h-10 w-10 text-primary-700" />
            <h2 className="mt-4 text-xl font-semibold text-black">
              Share Your Resume
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              After completing your resume, save it securely and generate a shareable link. Easily update your information anytime and share the link with potential employers or download it in a preferred format.
            </p>
          </div>
        </div>

        <div className="mt-20 text-center">
          <Link
            href="#get-started"
            className="inline-block rounded-full bg-primary-700 px-12 py-3 text-sm font-medium text-white transition hover:bg-primary-800 focus:outline-none focus:ring focus:ring-primary-400"
          >
            <div className="flex items-center justify-center">
              Get Started Today
            </div>
          </Link>
        </div>
      </section>
      <footer className="backdrop-blur-md w-full">
        <div className="w-full m-auto text-center max-w-screen-xl p-4">
          <div className="text-sm text-gray-500 sm:text-center">
            © 2025{" "}
            <a href="https://squadofcreators.github.io/SquadofCreators/" target="_blank" className="hover:text-primary-500 hover:cursor-pointer">
            Squad of Creators
            </a>
            . All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default page;
