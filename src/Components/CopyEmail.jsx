import { useState } from 'react'
import { Check } from 'lucide-react'

const CopyEmail = () => {
    const [copied, setCopied] = useState(false);
    const email = "indrapalkhalsa3@gmail.com"

    const CopyTOClipboard = () => {
        navigator.clipboard.writeText(email);
        
        setCopied(true);

        setTimeout(() => {
            setCopied(false);
        }, 2000);
    }

    return (
        <button 
            onClick={CopyTOClipboard} 
            className={`relative px-1 py-4 text-sm text-center rounded-full font-extralight w-[12rem] cursor-pointer overflow-hidden transition-all duration-300 ${
                copied 
                    ? 'bg-green-500 scale-105 shadow-lg shadow-green-200' 
                    : 'bg-primary scale-100'
            }`}
        >
            <p className="flex items-center justify-center gap-2">
                {copied ? (
                    <>
                        <Check className="w-5 h-5" />
                        Copied!
                    </>
                ) : (
                    <>
                        <img src="assets/Copy-64.png" alt="email" className="w-5 h-5"/>
                        Copy Email Address
                    </>
                )}
            </p>
        </button>
    )
}

export default CopyEmail