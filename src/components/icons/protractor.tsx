type CircularProtractorProps = React.ComponentProps<"svg"> & {
  width?: number;
  height?: number;
};

export function CircularProtractor({ width = 100, height = 100, ...props }: CircularProtractorProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      width={width}
      height={height}
      role="img"
      aria-labelledby="title desc"
      fill="none"
      stroke="currentColor"
      {...props}
    >
      <title id="title">360 degree protractor icon (scaled with extended ticks)</title>
      <desc id="desc">
        Circular protractor.
      </desc>
      <circle cx={50} cy={50} r={49} strokeWidth={2} />
      <circle
        cx={50}
        cy={50}
        r={25}
        strokeWidth={0.8}
        opacity={0.6}
      />
      <g strokeLinecap="round">
        <line x1={50} y1={1} x2={50} y2={19} strokeWidth={2} />
        <line x1={50} y1={99} x2={50} y2={81} strokeWidth={2} />
        <line x1={1} y1={50} x2={19} y2={50} strokeWidth={2} />
        <line x1={99} y1={50} x2={81} y2={50} strokeWidth={2} />
      </g>
      <g strokeLinecap="round" strokeWidth={1.4}>
        <g transform="rotate(45 50 50)">
          <line x1={50} y1={1} x2={50} y2={15} />
        </g>
        <g transform="rotate(135 50 50)">
          <line x1={50} y1={1} x2={50} y2={15} />
        </g>
        <g transform="rotate(225 50 50)">
          <line x1={50} y1={1} x2={50} y2={15} />
        </g>
        <g transform="rotate(315 50 50)">
          <line x1={50} y1={1} x2={50} y2={15} />
        </g>
      </g>
      <g strokeLinecap="round" strokeWidth={1.2}>
        <g transform="rotate(15 50 50)"><line x1={50} y1={1} x2={50} y2={11} /></g>
        <g transform="rotate(30 50 50)"><line x1={50} y1={1} x2={50} y2={11} /></g>
        <g transform="rotate(60 50 50)"><line x1={50} y1={1} x2={50} y2={11} /></g>
        <g transform="rotate(75 50 50)"><line x1={50} y1={1} x2={50} y2={11} /></g>
        <g transform="rotate(105 50 50)"><line x1={50} y1={1} x2={50} y2={11} /></g>
        <g transform="rotate(120 50 50)"><line x1={50} y1={1} x2={50} y2={11} /></g>
        <g transform="rotate(150 50 50)"><line x1={50} y1={1} x2={50} y2={11} /></g>
        <g transform="rotate(165 50 50)"><line x1={50} y1={1} x2={50} y2={11} /></g>
        <g transform="rotate(195 50 50)"><line x1={50} y1={1} x2={50} y2={11} /></g>
        <g transform="rotate(210 50 50)"><line x1={50} y1={1} x2={50} y2={11} /></g>
        <g transform="rotate(240 50 50)"><line x1={50} y1={1} x2={50} y2={11} /></g>
        <g transform="rotate(255 50 50)"><line x1={50} y1={1} x2={50} y2={11} /></g>
        <g transform="rotate(285 50 50)"><line x1={50} y1={1} x2={50} y2={11} /></g>
        <g transform="rotate(300 50 50)"><line x1={50} y1={1} x2={50} y2={11} /></g>
        <g transform="rotate(330 50 50)"><line x1={50} y1={1} x2={50} y2={11} /></g>
        <g transform="rotate(345 50 50)"><line x1={50} y1={1} x2={50} y2={11} /></g>
      </g>
      <g strokeLinecap="round" strokeWidth={0.8}>
        <g transform="rotate(5 50 50)"><line x1={50} y1={1} x2={50} y2={7} /></g>
        <g transform="rotate(10 50 50)"><line x1={50} y1={1} x2={50} y2={7} /></g>
        <g transform="rotate(20 50 50)"><line x1={50} y1={1} x2={50} y2={7} /></g>
        <g transform="rotate(25 50 50)"><line x1={50} y1={1} x2={50} y2={7} /></g>
        <g transform="rotate(35 50 50)"><line x1={50} y1={1} x2={50} y2={7} /></g>
        <g transform="rotate(40 50 50)"><line x1={50} y1={1} x2={50} y2={7} /></g>
        <g transform="rotate(50 50 50)"><line x1={50} y1={1} x2={50} y2={7} /></g>
        <g transform="rotate(55 50 50)"><line x1={50} y1={1} x2={50} y2={7} /></g>
        <g transform="rotate(65 50 50)"><line x1={50} y1={1} x2={50} y2={7} /></g>
        <g transform="rotate(70 50 50)"><line x1={50} y1={1} x2={50} y2={7} /></g>
        <g transform="rotate(80 50 50)"><line x1={50} y1={1} x2={50} y2={7} /></g>
        <g transform="rotate(85 50 50)"><line x1={50} y1={1} x2={50} y2={7} /></g>
        <g transform="rotate(95 50 50)"><line x1={50} y1={1} x2={50} y2={7} /></g>
        <g transform="rotate(100 50 50)"><line x1={50} y1={1} x2={50} y2={7} /></g>
        <g transform="rotate(110 50 50)"><line x1={50} y1={1} x2={50} y2={7} /></g>
        <g transform="rotate(115 50 50)"><line x1={50} y1={1} x2={50} y2={7} /></g>
        <g transform="rotate(125 50 50)"><line x1={50} y1={1} x2={50} y2={7} /></g>
        <g transform="rotate(130 50 50)"><line x1={50} y1={1} x2={50} y2={7} /></g>
        <g transform="rotate(140 50 50)"><line x1={50} y1={1} x2={50} y2={7} /></g>
        <g transform="rotate(145 50 50)"><line x1={50} y1={1} x2={50} y2={7} /></g>
        <g transform="rotate(155 50 50)"><line x1={50} y1={1} x2={50} y2={7} /></g>
        <g transform="rotate(160 50 50)"><line x1={50} y1={1} x2={50} y2={7} /></g>
        <g transform="rotate(170 50 50)"><line x1={50} y1={1} x2={50} y2={7} /></g>
        <g transform="rotate(175 50 50)"><line x1={50} y1={1} x2={50} y2={7} /></g>
        <g transform="rotate(185 50 50)"><line x1={50} y1={1} x2={50} y2={7} /></g>
        <g transform="rotate(190 50 50)"><line x1={50} y1={1} x2={50} y2={7} /></g>
        <g transform="rotate(200 50 50)"><line x1={50} y1={1} x2={50} y2={7} /></g>
        <g transform="rotate(205 50 50)"><line x1={50} y1={1} x2={50} y2={7} /></g>
        <g transform="rotate(215 50 50)"><line x1={50} y1={1} x2={50} y2={7} /></g>
        <g transform="rotate(220 50 50)"><line x1={50} y1={1} x2={50} y2={7} /></g>
        <g transform="rotate(230 50 50)"><line x1={50} y1={1} x2={50} y2={7} /></g>
        <g transform="rotate(235 50 50)"><line x1={50} y1={1} x2={50} y2={7} /></g>
        <g transform="rotate(245 50 50)"><line x1={50} y1={1} x2={50} y2={7} /></g>
        <g transform="rotate(250 50 50)"><line x1={50} y1={1} x2={50} y2={7} /></g>
        <g transform="rotate(260 50 50)"><line x1={50} y1={1} x2={50} y2={7} /></g>
        <g transform="rotate(265 50 50)"><line x1={50} y1={1} x2={50} y2={7} /></g>
        <g transform="rotate(275 50 50)"><line x1={50} y1={1} x2={50} y2={7} /></g>
        <g transform="rotate(280 50 50)"><line x1={50} y1={1} x2={50} y2={7} /></g>
        <g transform="rotate(290 50 50)"><line x1={50} y1={1} x2={50} y2={7} /></g>
        <g transform="rotate(295 50 50)"><line x1={50} y1={1} x2={50} y2={7} /></g>
        <g transform="rotate(305 50 50)"><line x1={50} y1={1} x2={50} y2={7} /></g>
        <g transform="rotate(310 50 50)"><line x1={50} y1={1} x2={50} y2={7} /></g>
        <g transform="rotate(320 50 50)"><line x1={50} y1={1} x2={50} y2={7} /></g>
        <g transform="rotate(325 50 50)"><line x1={50} y1={1} x2={50} y2={7} /></g>
        <g transform="rotate(335 50 50)"><line x1={50} y1={1} x2={50} y2={7} /></g>
        <g transform="rotate(340 50 50)"><line x1={50} y1={1} x2={50} y2={7} /></g>
        <g transform="rotate(350 50 50)"><line x1={50} y1={1} x2={50} y2={7} /></g>
        <g transform="rotate(355 50 50)"><line x1={50} y1={1} x2={50} y2={7} /></g>
      </g>
    </svg>
  )
}
