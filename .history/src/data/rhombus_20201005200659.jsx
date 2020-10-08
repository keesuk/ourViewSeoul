import * as React from "react"

function SvgComponent(props) {
  return (
    <svg{...props}>
      <g
        style={{
          isolation: "isolate",
        }}
      >
        <path
          style={{
            mixBlendMode: "multiply",
          }}
          d="M106.68 137.66L83.11 169.4l-23.58-31.74 23.58-31.74 23.57 31.74z"
          data-name="Layer 3"
        />
      </g>
    </svg>
  )
}

export default SvgComponent
