const iconBase = {
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export function PhoneIcon(props) {
  return (
    <svg {...iconBase} {...props}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 4.1 2h3A2 2 0 0 1 9 4.07a11.36 11.36 0 0 0 .7 3 2 2 0 0 1-.45 2L8.09 11a16 16 0 0 0 6 6l1.9-1.16a2 2 0 0 1 2 .45 11.36 11.36 0 0 0 3 .7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}

export function FacebookIcon(props) {
  return (
    <svg {...iconBase} {...props}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3.37l.63-4H14V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

export function InstagramIcon(props) {
  return (
    <svg {...iconBase} {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="3.5" />
      <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function YoutubeIcon(props) {
  return (
    <svg {...iconBase} {...props}>
      <rect x="3" y="6" width="18" height="12" rx="3" />
      <polygon points="10 9 16 12 10 15 10 9" fill="currentColor" stroke="none" />
    </svg>
  )
}
