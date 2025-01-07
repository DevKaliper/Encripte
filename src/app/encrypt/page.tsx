'use client'

import { useState } from 'react'
import { ArrowLeft, Copy, Lock, Shield } from 'lucide-react'
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

type EncryptionMethod = 'base64' | 'caesar' | 'reverse' | 'morse' | 'sha256' | 'aes'

export default function EncryptPage() {
  const [inputText, setInputText] = useState('')
  const [outputText, setOutputText] = useState('')
  const [password, setPassword] = useState('')
  const [method, setMethod] = useState<EncryptionMethod>('base64')
  const [militaryMethod, setMilitaryMethod] = useState<'sha256' | 'aes'>('sha256')
  const { toast } = useToast()

  const encryptText = async (text: string, method: EncryptionMethod, key?: string): Promise<string> => {
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
      case 'sha256': {
        const encoder = new TextEncoder()
        const data = encoder.encode(text)
        const hashBuffer = await crypto.subtle.digest('SHA-256', data)
        const hashArray = Array.from(new Uint8Array(hashBuffer))
        return hashArray.map(b => b.toString(16).padStart(2, '0')).join('')
      }
      case 'aes': {
        if (!key) throw new Error('Password is required for AES encryption')
        const encoder = new TextEncoder()
        const data = encoder.encode(text)
        const passwordBuffer = encoder.encode(key)
        const salt = crypto.getRandomValues(new Uint8Array(16))
        const iv = crypto.getRandomValues(new Uint8Array(12))
        
        const keyMaterial = await crypto.subtle.importKey(
          'raw',
          passwordBuffer,
          { name: 'PBKDF2' },
          false,
          ['deriveBits', 'deriveKey']
        )
        
        const cryptoKey = await crypto.subtle.deriveKey(
          {
            name: 'PBKDF2',
            salt: salt,
            iterations: 100000,
            hash: 'SHA-256'
          },
          keyMaterial,
          { name: 'AES-GCM', length: 256 },
          false,
          ['encrypt']
        )
        
        const encrypted = await crypto.subtle.encrypt(
          { name: 'AES-GCM', iv: iv },
          cryptoKey,
          data
        )
        
        const encryptedArray = new Uint8Array(encrypted)
        const result = new Uint8Array(salt.length + iv.length + encryptedArray.length)
        result.set(salt, 0)
        result.set(iv, salt.length)
        result.set(encryptedArray, salt.length + iv.length)
        
        return btoa(String.fromCharCode.apply(null, Array.from(result)))
      }
      default:
        return text
    }
  }

  const encrypt = async () => {
    try {
      const encrypted = await encryptText(inputText, method === 'sha256' || method === 'aes' ? militaryMethod : method, password)
      setOutputText(encrypted)
      toast({
        title: "Text encrypted successfully!",
        description: "Your text has been securely encrypted.",
      })
    } catch (error) {
      toast({
        title: "Encryption failed",
        description: error instanceof Error ? error.message : "There was an error encrypting your text.",
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
                    <SelectItem value="sha256" className='text-red-500'>Military-grade Encryption</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {method === 'sha256' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Military-grade Method
                  </label>
                  <Select value={militaryMethod} onValueChange={(value) => setMilitaryMethod(value as 'sha256' | 'aes')}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select military-grade method" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sha256">SHA256</SelectItem>
                      <SelectItem value="aes">AES</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              )}

              {(method === 'caesar' || (method === 'sha256' && militaryMethod === 'aes')) && (
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                    {method === 'caesar' ? 'Shift Amount (1-25)' : 'Encryption Key'}
                  </label>
                  <Input
                    id="password"
                    type={method === 'caesar' ? 'number' : 'password'}
                    min={method === 'caesar' ? "1" : undefined}
                    max={method === 'caesar' ? "25" : undefined}
                    placeholder={method === 'caesar' ? "Enter shift amount (default: 3)" : "Enter encryption key"}
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
              disabled={!inputText || (method === 'sha256' && militaryMethod === 'aes' && !password)}
            >
              {method === 'sha256' ? (
                <Shield className="mr-2 h-4 w-4" />
              ) : (
                <Lock className="mr-2 h-4 w-4" />
              )}
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

    
    </div>
  )
}

