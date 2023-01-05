import React from 'react'
import { SocialIcon } from 'react-social-icons'
type Props = {}

export default function Header({}: Props) {
  return (
    <header>
        <div>
            {/* Social ICONS */}
            <SocialIcon url="https://linkedin.com/lőrincz-maria" />
        </div>
    </header>
  )
}