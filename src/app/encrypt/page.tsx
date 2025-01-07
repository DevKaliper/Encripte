'use client'

import { useState } from 'react'
import { ArrowLeft, Copy, Lock } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import Link from "next/link"

type EncryptionMethod = 'base64' | 'caesar' | 'reverse' | 'morse'

export default function EncryptPage() {
  const [inputText, setInputText] = useState('')
  const [outputText, setOutputText] = useState('')
  const [password, setPassword] = useState('')
  const [method, setMethod] = useState<EncryptionMethod>('base64')
  const { toast } = useToast()

  const encryptText = (text: string, method: EncryptionMethod, key?: string): string => {
    switch (method) {
      case 'base64':
        return btoa(text)
      case 'caesar': {
        const shift = parseInt(key || '3')
        return text
          .split('')
          .map(char => {
            if (char.match(/[a-z]/i)) {
              const code = char.charCodeAt(0)
              const isUpperCase = code >= 65 && code <= 90
              const base = isUpperCase ? 65 : 97
              return String.fromCharCode(((code - base + shift) % 26) + base)
            }
            return char
          })
          .join('')
      }
      case 'reverse':
        return text.split('').reverse().join('')
      case 'morse': {
        const morseCode: { [key: string]: string } = {
          'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.',
          'G': '--.', 'H': '....', 'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..',
          'M': '--', 'N': '-.', 'O': '---', 'P': '.--.', 'Q': '--.-', 'R': '.-.',
          'S': '...', 'T': '-', 'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-',
          'Y': '-.--', 'Z': '--..', '0': '-----', '1': '.----', '2': '..---',
          '3': '...--', '4': '....-', '5': '.....', '6': '-....', '7': '--...',
          '8': '---..', '9': '----.', ' ': '/'
        }
        return text
          .toUpperCase()
          .split('')
          .map(char => morseCode[char] || char)
          .join(' ')
      }
      default:
        return text
    }
  }

  const encrypt = () => {
    try {
      const encrypted = encryptText(inputText, method, password)
      setOutputText(encrypted)
      toast({
        title: "Text encrypted successfully!",
        description: "Your text has been securely encrypted.",
      })
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      toast({
        title: "Encryption failed",
        description: "There was an error encrypting your text.",
        variant: "destructive",
      })
    }
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(outputText)
    toast({
      title: "Copied to clipboard",
      description: "The encrypted text has been copied to your clipboard.",
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
        <div className="max-w-3xl mx-auto">
          <Link href="/" className="inline-flex items-center text-red-600 hover:text-red-700 mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
          
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Encrypt Your Text</h1>
          
          <div className="space-y-6">
            <div>
              <label htmlFor="input-text" className="block text-sm font-medium text-gray-700 mb-1">
                Text to Encrypt
              </label>
              <Textarea
                id="input-text"
                placeholder="Enter the text you want to encrypt..."
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                className="w-full h-32 border-gray-300 focus:border-red-500 focus:ring-red-500"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Encryption Method
                </label>
                <Select value={method} onValueChange={(value) => setMethod(value as EncryptionMethod)}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select encryption method" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="base64">Base64</SelectItem>
                    <SelectItem value="caesar">Caesar Cipher</SelectItem>
                    <SelectItem value="reverse">Reverse Text</SelectItem>
                    <SelectItem value="morse">Morse Code</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {method === 'caesar' && (
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                    Shift Amount (1-25)
                  </label>
                  <Input
                    id="password"
                    type="number"
                    min="1"
                    max="25"
                    placeholder="Enter shift amount (default: 3)"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full border-gray-300 focus:border-red-500 focus:ring-red-500"
                  />
                </div>
              )}
            </div>

            <Button 
              onClick={encrypt}
              className="w-full bg-red-600 hover:bg-red-700 text-white"
              disabled={!inputText}
            >
              <Lock className="mr-2 h-4 w-4" />
              Encrypt Text
            </Button>

            {outputText && (
              <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Encrypted Text
                </label>
                <Textarea
                  value={outputText}
                  readOnly
                  className="w-full h-32 bg-white border-gray-300"
                />
                <Button 
                  onClick={copyToClipboard}
                  variant="outline"
                  className="mt-2 text-red-600 border-red-600 hover:bg-red-50"
                >
                  <Copy className="mr-2 h-4 w-4" />
                  Copy to Clipboard
                </Button>
              </div>
            )}
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

