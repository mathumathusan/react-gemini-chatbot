import React from 'react'

const ChatvotIcon = ({
  size = 32,
  color = "currentColor",
}) => {
  return (
     <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Chat bubble */}
      <path
        d="M3 12C3 7.582 6.582 4 11 4H13C17.418 4 21 7.582 21 12C21 16.418 17.418 20 13 20H9L5 22V20.2C3.75 18.7 3 16.45 3 12Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />

      {/* Robot eyes */}
      <circle cx="9" cy="12" r="1" fill={color} />
      <circle cx="15" cy="12" r="1" fill={color} />

      {/* Robot mouth */}
      <path
        d="M10 15H14"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

export default ChatvotIcon