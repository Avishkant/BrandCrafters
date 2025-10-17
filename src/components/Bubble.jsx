import React from 'react'

export default function Bubble(props){
  return (
    <svg width={props.width || 835} height={props.height || 835} viewBox="0 0 835 835" fill="none" className={props.className} xmlns="http://www.w3.org/2000/svg">
      <circle cx="417.5" cy="417.5" r="417.5" fill="url(#with-opa_svg__7324o5srka)" fillOpacity="0.1"></circle>
      <circle cx="417.5" cy="417.5" r="417.5" fill="url(#with-opa_svg__nq10m4fjfb)" fillOpacity="0.06"></circle>
      <defs>
        <radialGradient id="with-opa_svg__7324o5srka" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="rotate(25.977 -1557.54 537.334) scale(544.511)">
          <stop stopColor="#E96224"></stop>
          <stop offset="1" stopColor="#E96224" stopOpacity="0"></stop>
        </radialGradient>
        <radialGradient id="with-opa_svg__nq10m4fjfb" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="rotate(-174.094 306.287 402.811) scale(422.744 318.74)">
          <stop stopColor="#C26161"></stop>
          <stop offset="1" stopColor="#AA3636" stopOpacity="0"></stop>
        </radialGradient>
      </defs>
    </svg>
  )
}
