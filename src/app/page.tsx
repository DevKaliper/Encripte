"use client";

import { ArrowRight, Lock, Unlock } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useRouter } from 'next/navigation'

export default function HomePage() {
  const router = useRouter();

  const goTo = (page: string) => {
    router.push(page);
  }


  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-red-600">Encripte</h1>
            <nav>
              <Button variant="ghost" className="text-gray-600 hover:text-red-600">
                About
              </Button>
              <Button variant="ghost" className="text-gray-600 hover:text-red-600">
                Contact
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              Secure Your Text with{" "}
              <span className="text-red-600">Military-Grade Encryption</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Choose whether you want to encrypt your sensitive information or decrypt an existing message
            </p>
          </div>

          {/* Main Actions */}
          <div className="mt-16 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Encrypt Card */}
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600 to-red-500 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000"></div>
              <Link 
                href="/encrypt"
                className="relative flex flex-col items-center p-8 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mb-4">
                  <Lock className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">Encrypt</h3>
                <p className="text-gray-600 text-center mb-6">
                  Transform your text into a secure, encrypted format
                </p>
                <Button className="bg-red-600 hover:bg-red-700" onClick={() => {goTo('/encrypt')} }>
                  Start Encrypting
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>

            {/* Decrypt Card */}
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600 to-red-500 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000"></div>
              <Link 
                href="/decrypt"
                className="relative flex flex-col items-center p-8 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mb-4">
                  <Unlock className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">Decrypt</h3>
                <p className="text-gray-600 text-center mb-6">
                  Convert encrypted text back to its original form
                </p>
                <Button className="bg-red-600 hover:bg-red-700"  onClick={() => {goTo('/decrypt')}}>
                  Start Decrypting
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center mb-4">
                <Lock className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Secure Encryption
              </h3>
              <p className="text-gray-600">
                Industry-standard encryption algorithms to keep your data safe
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-red-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Lightning Fast
              </h3>
              <p className="text-gray-600">
                Quick encryption and decryption process with no delays
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-red-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Privacy First
              </h3>
              <p className="text-gray-600">
                Your data never leaves your browser for maximum privacy
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-gray-600">
            <p>&copy; 2024 Encripte. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

