'use client';

import { useState } from 'react'
import { Copy, Lock, Trash2 } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import Link from "next/link"

export default function DecryptPage() {
  const [inputText, setInputText] = useState('')
  const [outputText, setOutputText] = useState('')
  const { toast } = useToast()

  const decrypt = () => {
    try {
      // This is a placeholder decryption - replace with actual decryption logic
      const decryptedText = atob(inputText)
      setOutputText(decryptedText)
      toast({
        title: "Success!",
        description: "Text decrypted successfully.",
      })
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      toast({
        title: "Error",
        description: "Invalid encrypted text format.",
        variant: "destructive",
      })
    }
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(outputText)
    toast({
      title: "Copied!",
      description: "Text copied to clipboard.",
    })
  }

  const clearText = () => {
    setInputText('')
    setOutputText('')
    toast({
      title: "Cleared",
      description: "All text has been cleared.",
    })
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-red-600">Encripte</Link>
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

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Decryption</h1>
            <p className="text-gray-600 mt-2">Decrypt your secure messages</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Input Section */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Encrypted Text
              </label>
              <Textarea
                placeholder="Paste the encrypted text here..."
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                className="h-[200px] resize-none border-gray-300 focus:border-red-500 focus:ring-red-500"
              />
            </div>

            {/* Output Section */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Decrypted Result
              </label>
              <Textarea
                placeholder="Decrypted text will appear here..."
                value={outputText}
                readOnly
                className="h-[200px] resize-none bg-gray-50 border-gray-300"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex justify-center gap-4 mt-8">
            <Button
              onClick={decrypt}
              className="bg-red-600 hover:bg-red-700 text-white min-w-[120px]"
              disabled={!inputText}
            >
              <Lock className="mr-2 h-4 w-4" />
              Decrypt
            </Button>

            <Button
              onClick={copyToClipboard}
              variant="outline"
              className="border-red-600 text-red-600 hover:bg-red-50"
              disabled={!outputText}
            >
              <Copy className="mr-2 h-4 w-4" />
              Copy
            </Button>

            <Button
              onClick={clearText}
              variant="outline"
              className="border-gray-300 text-gray-700 hover:bg-gray-50"
              disabled={!inputText && !outputText}
            >
              <Trash2 className="mr-2 h-4 w-4" />
              Clear
            </Button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t mt-12">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-gray-600">
            <p>&copy; 2024 Encripte. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

