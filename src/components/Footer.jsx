import React from 'react'
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function Footer() {
    return (
        <footer className="w-full px-8 py-8 md:px-12 bg-black">
            <div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-xs font-sans text-neutral-500 tracking-widest uppercase">
                    © 2026 KAUSHAL. All rights reserved.
                </div>
                <div className="flex gap-6 text-neutral-400">
                    <a href="https://github.com/kaushal16s" className="hover:text-green-500 transition-colors "><GitHubIcon sx={{ fontSize: 30 }} /></a>
                    <a href="https://www.linkedin.com/in/kaushal-s/" className="hover:text-blue-500 transition-colors "><LinkedInIcon sx={{ fontSize: 30 }} /></a>
                    <a href="https://x.com/kaushal_s16?s=11" className="hover:text-gray-500 transition-colors "><XIcon sx={{ fontSize: 30 }} /></a>
                    {/* <a href="#" className="hover:text-pink-600 transition-colors "><InstagramIcon sx={{ fontSize: 30 }} /></a> */}
                </div>
            </div>
        </footer>
    )
}

export default Footer