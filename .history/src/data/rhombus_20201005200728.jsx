import * as React from "react"

function SvgComponent(props) {
  return (
    <svg>
      <g
        style={{
          isolation: "isolate",
        }}
      >
        <path
          d="M106.68 137.66L83.11 169.4l-23.58-31.74 23.58-31.74 23.57 31.74z"
        />
      </g>
    </svg>
  )
}

export default SvgComponent
