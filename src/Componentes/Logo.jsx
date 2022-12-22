import * as React from "react"

export const Logo = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={803.544}
    height={95.6}
    preserveAspectRatio="xMidYMid"
    style={{
      background: "0 0",
    }}
    viewBox="-151.772 27.2 803.544 95.6"
    {...props}
  >
    <defs>
      <filter id="a" width="300%" height="300%" x="-100%" y="-100%">
        <feFlood floodColor="#b9743f" result="f1" />
        <feFlood
          floodColor="rgba(36.57440476190475%,20.92597795414462%,8.777857142857142%,0.885)"
          result="f2"
        />
        <feMorphology in="SourceAlpha" operator="dilate" radius={3} />
        <feConvolveMatrix
          divisor={1}
          kernelMatrix="0 1 1 1 0 1 0 0 0 1 1 0 0 0 1 1 0 0 0 1 0 1 1 1 0"
          order="5,5"
          result="cm1"
        />
        <feComposite in="f1" in2="cm1" operator="in" result="c1" />
        <feMorphology operator="dilate" radius={3} />
        <feConvolveMatrix
          divisor={1}
          kernelMatrix="0 1 1 1 0 1 0 0 0 1 1 0 0 0 1 1 0 0 0 1 0 1 1 1 0"
          order="5,5"
          result="cm2"
        />
        <feComposite in="f2" in2="cm2" operator="in" result="c2" />
        <feMerge>
          <feMergeNode in="c2" />
          <feMergeNode in="c1" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    <g filter="url(#a)">
      <path
        fill="#1d0e0b"
        d="M-17.12 80.695v5.22h-3.33l.49.58v3.29q-1.75 0-2.27.63t-.52 2.02v.68q.32 0 .54-.36l1.26.81 2.25 2.7q-.27 2.11-1.53 3.19-1.25 1.08-3.03 1.08-1.78 0-3.49-1.22-1.71 1.22-3.53 1.22-1.82 0-4.17-2.16-2.33-2.16-2.6-4.81l1.25-.81q.18.4.86.4 1.93 0 1.93-3.37h-.54l-2.25-2.7v-3.29q1.85 0 2.62.14v-8.55h-1.27l-2.25-2.7v-6.35h24.17l2.25 2.7v10.98h-5.22l-2.25-2.7v-1.93h-4.81v2.61h3.19l2.25 2.7Zm-13.55 4.59q.45-.27 1.08-1.08h1.17q.59.81 1.08 1.08.45-.63 1.17-.99v-2.34h5.54v-2.71h-5.54v-7.82h9.68v4.63h2.7v-8.46h-21.64v3.83h3.59v12.87q.63.31 1.17.99Zm1.53 9.8h.27q1.62 1.4 3.58 1.4t2.86-2.25q-.32.18-.72.18-3.15 0-3.15-4.63 0-3.78 2.97-3.78v-1.13q-.86 0-1.31.07-.45.07-1.12.56-.68.5-1.21 1.49-1.08-.23-2.03-1.58-.95 1.21-2.03 1.58-.58-.99-1.26-1.49-.67-.49-1.12-.56-.45-.07-1.26-.07v1.13q2.97 0 2.97 3.78 0 3.42-1.44 4.27-.67.36-1.71.36l-.72-.18q.9 2.25 2.86 2.25 1.95 0 3.57-1.4Zm53.37-26.05v6.35h-2.7v8.41h.32l2.25 2.7v3.29q-1.71 0-2.21.63-.49.63-.49 1.98v.58q0 2.34-1.15 4.01-1.15 1.66-3.08 2.52-3.65 1.57-8.28 1.57-6.48 0-10.62-3.08-4.14-3.08-4.14-7.72v-.49h-.45l-2.25-2.7v-3.29q1.84 0 2.61.14v-8.55h-.36l-2.25-2.7v-6.35H5.11l2.25 2.7v6.35h-2.7v8.41h.4l2.25 2.7v3.29q-.76.04-1.21.11-.45.06-.97.47t-.52 1.17q0 .95 1.8.95t2.91-.75q1.1-.74 1.46-1.95h-.32l-2.25-2.7v-3.29q1.94 0 2.7.14v-8.55h-.36l-2.25-2.7v-6.35h13.68l2.25 2.7Zm-22.81 27.4q2.38.59 5.22.59t5.22-.59q2.38-.58 4.16-2.18 1.78-1.59 1.78-4.02v-.45q0-3.74 2.93-3.74v-1.08q-.82 0-1.24.07-.43.07-1.13.54-.7.47-1.28 1.42-.99-.23-1.98-1.54-.81 1.17-2.07 1.54-.54-.95-1.22-1.42-.67-.47-1.12-.54-.45-.07-1.26-.07v1.08q1.48 0 2.11.86.63.85.63 1.71 0 2.43-1.57 3.8-1.58 1.37-3.96 1.37-2.39 0-3.96-1.37-1.58-1.37-1.58-3.8 0-.86.63-1.71.63-.86 2.12-.86v-1.08q-.81 0-1.26.07-.45.07-1.13.54-.67.47-1.21 1.42-1.17-.23-2.07-1.54-.9 1.17-1.98 1.54-.59-.95-1.28-1.42-.7-.47-1.13-.54-.43-.07-1.24-.07v1.08q2.93 0 2.93 3.74v.45q0 2.43 1.78 4.02 1.77 1.6 4.16 2.18Zm12.01-11.15q.45-.27 1.08-1.08h1.13q.59.81 1.12 1.08.5-.59 1.17-.95v-12.91h2.8v-3.83H9.56v3.83h2.7v12.91q.63.36 1.17.95Zm-16.91 0q.53-.32 1.12-1.08h1.12q.59.81 1.08 1.08.5-.63 1.22-.99v-12.87h2.79v-3.83H-7.31v3.83h2.7v12.91q.59.32 1.13.95Zm16.6-27.18-2.7 7.2H5.11l-2.48-2.7 2.93-7.2h5.31l2.25 2.7Zm-6.66-1.58-1.98 4.95h2.75l2.02-4.95H6.46Zm40 18.86h-1.57v8.41h.36l2.25 2.7v3.29q-1.76 0-2.27.63-.52.63-.52 2.02v.68q.31 0 .54-.36l1.26.81 2.25 2.7q-.27 2.11-1.53 3.19t-3.04 1.08q-1.78 0-3.49-1.22-1.71 1.22-3.53 1.22-1.82 0-4.16-2.16t-2.61-4.81l1.26-.81q.18.4.85.4 1.94 0 1.94-3.37h-.54l-2.25-2.7v-3.29q1.84 0 2.61.14v-8.55h-1.31v4.63h-5.22l-2.25-2.7v-10.98h25.92l2.25 2.7v10.98h-4.95l-2.25-2.7v-1.93Zm-9.67 9.9q.45-.27 1.08-1.08h1.17q.58.81 1.08 1.08.45-.63 1.17-.99v-12.87h6.3v4.63h2.56v-8.46h-23.4v8.46h2.7v-4.63h6.17v12.87q.63.31 1.17.99Zm1.53 9.8h.27q1.62 1.4 3.58 1.4 1.95 0 2.85-2.25-.31.18-.72.18-3.15 0-3.15-4.63 0-3.78 2.97-3.78v-1.13q-.85 0-1.3.07-.45.07-1.12.56-.68.5-1.22 1.49-1.08-.23-2.03-1.58-.94 1.21-2.02 1.58-.59-.99-1.26-1.49-.68-.49-1.13-.56-.45-.07-1.26-.07v1.13q2.97 0 2.97 3.78 0 3.42-1.44 4.27-.67.36-1.71.36l-.72-.18q.9 2.25 2.86 2.25t3.58-1.4Zm49.63-8.59v3.29q-1.8 0-2.29.72-.5.72-.5 2.47 0 7.56-12.15 7.56-3.28 0-4.81-.41-1.53-.4-2.84-1.35-1.66 1.76-3.69 1.76-2.65 0-4.65-2.25-2.01-2.25-2.37-4.72l1.22-.81q.27.36.99.36t1.17-.57q.45-.56.54-1.17.09-.6.09-1.59h-.54l-2.25-2.7v-3.29q1.98 0 2.79.14v-8.55h-.5l-2.25-2.7v-6.35H72.2q5.22 0 8.35 2.77t3.13 8.12q0 3.02-1.67 5.31.54.59 1.13 1.35.72-.09 2.56-.09l2.25 2.7ZM61 85.285q.36-.23 1.03-1.08h1.17q.59.81 1.04 1.08.63-.77 1.39-1.08v-2.34h5.36q3.24 0 4.27 2.16 1.22.27 2.03 1.26.45-.36 1.03-1.08h1.22q.49.81 1.03 1.08.32-.45.86-.82-.95-2.34-3.78-4.09 2.52-2.29 2.52-5.81 0-6.97-8.42-6.97H57.17v3.83h2.84v13q.45.23.99.86Zm14.98 3.33q0 4.63-5.24 4.63t-5.24-4.63q0-.82.65-1.69.65-.88 2.14-.88v-1.08q-.81 0-1.26.07-.45.07-1.13.54-.67.47-1.26 1.42-1.08-.23-2.02-1.54-.9 1.17-1.98 1.54-.59-.95-1.26-1.42-.68-.47-1.13-.54-.45-.07-1.26-.07v1.08q2.88 0 2.88 3.74 0 1.44-.15 2.29-.16.85-.86 1.58-.7.72-2.05.72l-.76-.09q1.08 2.34 3.28 2.34 1.04 0 1.83-.5.78-.5 1.77-1.57h.36q1.22 1.07 2.73 1.53 1.5.45 4.74.45 10.89 0 10.89-6.3 0-4.19 2.88-4.19v-1.08q-.81 0-1.23.07-.43.07-1.11.54-.67.47-1.26 1.42-1.03-.23-1.98-1.54-.9 1.17-2.11 1.54-.59-.95-1.24-1.42t-1.08-.54q-.43-.07-1.28-.07v1.08q1.48 0 2.11.86.63.85.63 1.71Zm-6.88-9.09h-3.47v-8.1h3.47q3.01 0 4.07.85 1.06.86 1.06 3.11 0 4.14-5.13 4.14Zm2.97 7.56v-1.31h-.99l.63.72v3.29q-2.66.09-2.66 1.75v.22q.72.19 1.71.19 3.29 0 3.87-2.16h-.31l-2.25-2.7Zm-.72-11.75h-2.21v2.97q2.75 0 3.38-1.08.45-.77.45-1.8-.05-.09-1.62-.09Zm34.56 25.74q-6.48 0-10.62-3.08-4.14-3.08-4.14-7.72v-.49h-.45l-2.25-2.7v-3.29q1.98 0 2.75.14v-9.99q0-2.34 1.14-4.03 1.15-1.69 3.08-2.54 3.56-1.58 8.24-1.58 6.57 0 10.64 2.99 4.07 3 4.07 7.85v7.16h.5l2.25 2.7v3.29q-1.71 0-2.21.63-.49.63-.49 1.98v.58q0 2.34-1.15 4.01-1.15 1.66-3.13 2.52-3.6 1.57-8.23 1.57Zm-12.37-15.79q.53-.32 1.12-1.08h1.13q.58.81 1.07 1.08.81-.95 1.85-1.22v-8.86q0-2.3 1.39-3.58 1.4-1.28 3.6-1.28 2.21 0 3.56 1.26t1.35 3.6v8.86q1.03.27 1.84 1.22.45-.27 1.08-1.08h1.13q.58.81 1.12 1.08.45-.59 1.04-.91v-10.34q0-1.9-.99-3.29-.99-1.39-2.66-2.16-1.66-.77-3.55-1.13-1.89-.35-3.96-.35-2.07 0-3.94.35-1.87.36-3.55 1.13-1.69.77-2.68 2.16-.99 1.39-.99 3.29v10.34q.63.41 1.04.91Zm4.9 11.15q2.38.59 5.22.59 2.83 0 5.22-.59 2.38-.58 4.16-2.18 1.78-1.59 1.78-4.02v-.45q0-3.74 2.92-3.74v-1.08q-.81 0-1.23.07-.43.07-1.13.54-.7.47-1.28 1.42-.99-.23-1.98-1.54-.81 1.17-2.07 1.54-.54-.95-1.22-1.42-.67-.47-1.12-.54-.45-.07-1.26-.07v1.08q1.48 0 2.12.86.63.85.63 1.71 0 2.43-1.58 3.8-1.58 1.37-3.96 1.37-2.39 0-3.96-1.37-1.58-1.37-1.58-3.8 0-.86.64-1.71.62-.86 2.11-.86v-1.08q-.81 0-1.26.07-.45.07-1.13.54-.67.47-1.21 1.42-1.17-.23-2.07-1.54-.9 1.17-1.98 1.54-.59-.95-1.28-1.42-.7-.47-1.13-.54-.43-.07-1.24-.07v1.08q2.93 0 2.93 3.74v.45q0 2.43 1.78 4.02 1.77 1.6 4.16 2.18Zm3.82-18.49v6.08l2.07 2.47v3.29q-.76.04-1.21.11-.45.06-.97.47t-.52 1.17q0 .95 1.8.95t2.91-.75q1.1-.74 1.46-1.95h-.32l-2.25-2.7v-3.29q1.44 0 2.07.05v-8.6q0-.36-.49-.61t-.9-.25q-1.67 0-2.65.93-1 .92-1 2.63Zm37.4-8.91v6.35h-2.7v8.41h.31l2.25 2.7v3.29q-.72.04-1.17.11-.44.06-.94.47-.5.41-.5 1.17v.18q.63.23 1.8.23t2.21-.72q1.03-.72 1.03-2.03 0-.23-.26-1.31v-1.43h5.22l2.25 2.69v8.11q0 1.57.8 2.06l-.8 1.22q-1.18 0-2.46-.59-1.28-.58-2-1.26-.76.68-2.59 1.26-1.82.59-3.44.59-3.29 0-5.35-1.76-1.85 1.76-4.21 1.76-2.37 0-4.37-2.27t-2.32-4.7l1.27-.81q.22.36.89.36 1.8 0 1.8-3.33h-.44l-2.25-2.7v-3.29q1.88 0 2.65.14v-8.55h-.36l-2.25-2.7v-6.35h13.68l2.25 2.7Zm3.51 20.34q0 1.8-1.37 2.83-1.38 1.04-3.35 1.04-1.99 0-3.54-1.15-1.55-1.14-1.55-3.48 0-.82.65-1.69.65-.88 2.09-.88v-1.08q-.81 0-1.23.07-.43.07-1.11.54-.67.47-1.21 1.42-1.08-.23-2.07-1.54-.81 1.17-2.03 1.54-.58-.95-1.25-1.42-.68-.47-1.11-.54-.43-.07-1.24-.07v1.08q1.53 0 2.23 1.06t.7 2.94q0 1.9-.61 3.11-.6 1.22-2.54 1.22l-.63-.09q.81 2.29 2.83 2.29 2.03 0 3.96-2.02h.41l.18.18q2.16 1.8 5.24 1.8t5.83-2.12q.4.41 1.66 1.15 1.27.74 1.99.87-.41-.44-.41-2.33v-6.31h-2.74q.22.77.22 1.58Zm-14.35-4.09q.44-.27 1.07-1.08h1.22q.59.81 1.03 1.08.5-.63 1.22-.99v-12.87h2.79v-3.83h-11.16v3.83h2.7v12.91q.58.32 1.13.95Zm45.13-12.69v-6.26H196l2.25 2.7v6.26h-2.34l1.66 8.55q.41-.05 1.26-.05l2.25 2.7.54 3.24q-2.43 0-2.43 2.16 0 1.31.32 1.31.76 0 .85-.45l1.44.85 2.25 2.7q0 2.16-1.05 3.2-1.06 1.03-2.7 1.03-1.65 0-3.76-1.13-1.67 1.13-3.24 1.13-2.48 0-4.66-2.21-2.18-2.2-2.95-4.72l1.08-.85q.36.45 1.04.45 1.48 0 1.48-1.76l-.13-1.03q-.86-.46-2.09-.46-1.24 0-2.37.73-1.12.72-1.53 2.07l1.08.85 2.25 2.7q-.63 2.11-2.09 3.17t-3.1 1.06q-1.65 0-3.45-1.13-2.02 1.13-3.73 1.13-2.34 0-4.12-2.25-1.78-2.25-1.78-4.68l1.4-.85q.09.45.88.45.78 0 1.53-1.08.74-1.08.92-2.39l-2.39-2.7.54-3.24q1.94 0 2.93.27l1.8-9.18-1.89-2.29Zm16.69 12.73q.41-.31.9-1.12h1.17q.72.85 1.31 1.12.18-.31.72-.77l-2.57-13.27h2.57v-3.69h-19.53v3.69h2.56l-2.61 13.27q.54.41.81.77.54-.31 1.26-1.12h1.17q.36.85.77 1.12 1.71-1.71 5.78-1.71t5.69 1.71Zm3.24 9.76h.27q1.98 1.54 3.81 1.54 1.82 0 2.4-2.34-.22.17-.63.17-1.71 0-2.9-1.68-1.19-1.69-1.19-3.22 0-3.19 2.47-3.55l-.18-1.08q-.85 0-1.28.06-.43.07-1.01.54-.59.48-.99 1.47-1.04-.19-2.34-1.54-.32.59-.74.97-.43.38-.97.57-1.76-2.16-5.67-2.16-3.92 0-5.58 2.16-1.04-.19-1.76-1.54-1.08 1.17-2.25 1.54-.4-.99-1.01-1.47-.61-.47-1.06-.54-.45-.06-1.26-.06l-.18 1.08q1.26.18 1.87 1.05.61.88.61 2.46 0 1.57-1.19 3.26-1.2 1.68-2.86 1.68l-.63-.17q.58 2.34 2.36 2.34 1.78 0 3.8-1.54h.27q1.53 1.54 3.06 1.54 2.03 0 3.51-2.34-.36.17-.81.17-2.52 0-2.52-2.6 0-2.61 1.71-4.12 1.71-1.51 3.96-1.51t3.96 1.51q1.71 1.51 1.71 4.12 0 2.6-2.52 2.6l-.85-.17q1.44 2.34 3.55 2.34 1.58 0 3.06-1.54Zm-4.72-12.55h-8.28l2.43-11.25h3.33l2.52 11.25Zm-1.53-1.17-1.22-5.35-1.17 5.35h2.39Zm55.98-5.98h-1.58v8.41h.36l2.25 2.7v3.29q-1.75 0-2.27.63t-.52 2.02v.68q.32 0 .54-.36l1.26.81 2.25 2.7q-.27 2.11-1.53 3.19t-3.03 1.08q-1.78 0-3.49-1.22-1.71 1.22-3.53 1.22-1.83 0-4.17-2.16t-2.61-4.81l1.26-.81q.18.4.86.4 1.93 0 1.93-3.37h-.54l-2.25-2.7v-3.29q1.85 0 2.61.14v-8.55h-1.3v4.63h-5.22l-2.25-2.7v-10.98h25.92l2.25 2.7v10.98h-4.95l-2.25-2.7v-1.93Zm-9.68 9.9q.45-.27 1.08-1.08h1.17q.59.81 1.08 1.08.45-.63 1.17-.99v-12.87h6.3v4.63h2.57v-8.46h-23.4v8.46h2.7v-4.63h6.16v12.87q.63.31 1.17.99Zm1.53 9.8h.27q1.62 1.4 3.58 1.4t2.86-2.25q-.32.18-.72.18-3.15 0-3.15-4.63 0-3.78 2.97-3.78v-1.13q-.86 0-1.31.07-.45.07-1.12.56-.68.5-1.22 1.49-1.08-.23-2.02-1.58-.95 1.21-2.03 1.58-.58-.99-1.26-1.49-.67-.49-1.12-.56-.45-.07-1.26-.07v1.13q2.97 0 2.97 3.78 0 3.42-1.44 4.27-.68.36-1.71.36l-.72-.18q.9 2.25 2.86 2.25 1.95 0 3.57-1.4Zm49.59-26.05v6.35h-2.7v8.41h.32l2.25 2.7v3.29q-1.71 0-2.21.63-.49.63-.49 1.98v.58q0 2.34-1.15 4.01-1.15 1.66-3.08 2.52-3.65 1.57-8.28 1.57-6.48 0-10.62-3.08-4.14-3.08-4.14-7.72v-.49h-.45l-2.25-2.7v-3.29q1.84 0 2.61.14v-8.55h-.36l-2.25-2.7v-6.35h13.68l2.25 2.7v6.35h-2.7v8.41h.4l2.25 2.7v3.29q-.76.04-1.21.11-.45.06-.97.47t-.52 1.17q0 .95 1.8.95t2.91-.75q1.1-.74 1.46-1.95h-.32l-2.25-2.7v-3.29q1.94 0 2.7.14v-8.55h-.36l-2.25-2.7v-6.35h13.68l2.25 2.7Zm-22.81 27.4q2.38.59 5.22.59 2.83 0 5.22-.59 2.38-.58 4.16-2.18 1.78-1.59 1.78-4.02v-.45q0-3.74 2.92-3.74v-1.08q-.81 0-1.23.07-.43.07-1.13.54-.7.47-1.28 1.42-.99-.23-1.98-1.54-.81 1.17-2.07 1.54-.54-.95-1.22-1.42-.67-.47-1.12-.54-.45-.07-1.26-.07v1.08q1.48 0 2.11.86.63.85.63 1.71 0 2.43-1.57 3.8-1.58 1.37-3.96 1.37-2.39 0-3.96-1.37-1.58-1.37-1.58-3.8 0-.86.63-1.71.63-.86 2.12-.86v-1.08q-.81 0-1.26.07-.45.07-1.13.54-.67.47-1.21 1.42-1.17-.23-2.07-1.54-.9 1.17-1.98 1.54-.59-.95-1.28-1.42-.7-.47-1.13-.54-.43-.07-1.24-.07v1.08q2.93 0 2.93 3.74v.45q0 2.43 1.78 4.02 1.77 1.6 4.16 2.18Zm12.01-11.15q.45-.27 1.08-1.08h1.13q.58.81 1.12 1.08.5-.59 1.17-.95v-12.91h2.79v-3.83h-11.16v3.83h2.7v12.91q.63.36 1.17.95Zm-16.92 0q.54-.32 1.13-1.08h1.12q.59.81 1.08 1.08.5-.63 1.22-.99v-12.87h2.79v-3.83h-11.16v3.83h2.7v12.91q.58.32 1.12.95Zm52.7-12.69v-6.26h22.05l2.25 2.7v6.26h-2.34l1.66 8.55q.41-.05 1.26-.05l2.25 2.7.54 3.24q-2.43 0-2.43 2.16 0 1.31.32 1.31.76 0 .85-.45l1.44.85 2.25 2.7q0 2.16-1.05 3.2-1.06 1.03-2.7 1.03-1.65 0-3.76-1.13-1.67 1.13-3.24 1.13-2.48 0-4.66-2.21-2.18-2.2-2.95-4.72l1.08-.85q.36.45 1.04.45 1.48 0 1.48-1.76l-.13-1.03q-.86-.46-2.09-.46-1.24 0-2.37.73-1.12.72-1.53 2.07l1.08.85 2.25 2.7q-.63 2.11-2.09 3.17t-3.1 1.06q-1.65 0-3.45-1.13-2.02 1.13-3.73 1.13-2.34 0-4.12-2.25-1.78-2.25-1.78-4.68l1.4-.85q.09.45.88.45.78 0 1.53-1.08.74-1.08.92-2.39l-2.39-2.7.54-3.24q1.94 0 2.93.27l1.8-9.18-1.89-2.29Zm16.69 12.73q.41-.31.9-1.12h1.17q.72.85 1.31 1.12.18-.31.72-.77l-2.57-13.27h2.57v-3.69h-19.53v3.69h2.56l-2.61 13.27q.54.41.81.77.54-.31 1.26-1.12h1.17q.36.85.77 1.12 1.71-1.71 5.78-1.71t5.69 1.71Zm3.24 9.76h.27q1.98 1.54 3.81 1.54 1.82 0 2.4-2.34-.22.17-.63.17-1.71 0-2.9-1.68-1.19-1.69-1.19-3.22 0-3.19 2.47-3.55l-.18-1.08q-.85 0-1.28.06-.43.07-1.01.54-.59.48-.99 1.47-1.04-.19-2.34-1.54-.32.59-.74.97-.43.38-.97.57-1.76-2.16-5.67-2.16-3.92 0-5.58 2.16-1.04-.19-1.76-1.54-1.08 1.17-2.25 1.54-.4-.99-1.01-1.47-.61-.47-1.06-.54-.45-.06-1.26-.06l-.18 1.08q1.26.18 1.87 1.05.61.88.61 2.46 0 1.57-1.19 3.26-1.2 1.68-2.86 1.68l-.63-.17q.58 2.34 2.36 2.34 1.78 0 3.8-1.54h.27q1.53 1.54 3.06 1.54 2.03 0 3.51-2.34-.36.17-.81.17-2.52 0-2.52-2.6 0-2.61 1.71-4.12 1.71-1.51 3.96-1.51t3.96 1.51q1.71 1.51 1.71 4.12 0 2.6-2.52 2.6l-.85-.17q1.44 2.34 3.55 2.34 1.58 0 3.06-1.54Zm-4.72-12.55h-8.28l2.43-11.25h3.33l2.52 11.25Zm-1.53-1.17-1.22-5.35-1.17 5.35h2.39Zm34.78-12.33v6.35h-2.7v8.41h.32l2.25 2.7v3.29q-.72.04-1.17.11-.45.06-.95.47-.49.41-.49 1.17v.18q.63.23 1.8.23t2.2-.72q1.04-.72 1.04-2.03 0-.23-.27-1.31v-1.43h5.22l2.25 2.69v8.11q0 1.57.81 2.06l-.81 1.22q-1.17 0-2.45-.59-1.29-.58-2.01-1.26-.76.68-2.58 1.26-1.83.59-3.45.59-3.28 0-5.35-1.76-1.85 1.76-4.21 1.76t-4.36-2.27q-2.01-2.27-2.32-4.7l1.26-.81q.22.36.9.36 1.8 0 1.8-3.33h-.45l-2.25-2.7v-3.29q1.89 0 2.65.14v-8.55h-.36l-2.25-2.7v-6.35h13.68l2.25 2.7Zm3.51 20.34q0 1.8-1.37 2.83-1.37 1.04-3.35 1.04t-3.53-1.15q-1.56-1.14-1.56-3.48 0-.82.66-1.69.65-.88 2.09-.88v-1.08q-.81 0-1.24.07-.43.07-1.1.54-.68.47-1.22 1.42-1.08-.23-2.07-1.54-.81 1.17-2.02 1.54-.59-.95-1.26-1.42-.68-.47-1.1-.54-.43-.07-1.24-.07v1.08q1.53 0 2.23 1.06.69 1.06.69 2.94 0 1.9-.6 3.11-.61 1.22-2.55 1.22l-.63-.09q.81 2.29 2.84 2.29 2.02 0 3.96-2.02h.4l.18.18q2.16 1.8 5.25 1.8 3.08 0 5.82-2.12.41.41 1.67 1.15t1.98.87q-.41-.44-.41-2.33v-6.31h-2.74q.22.77.22 1.58Zm-14.35-4.09q.45-.27 1.08-1.08h1.21q.59.81 1.04 1.08.49-.63 1.21-.99v-12.87h2.79v-3.83h-11.16v3.83h2.7v12.91q.59.32 1.13.95Zm42.97.04q.5-.31 1.08-1.12h1.17q.59.85 1.08 1.12.81-1.03 1.87-1.28t3.26-.25l2.25 2.7v3.24q-1.75 0-2.25.68-.49.67-.49 2.11v.45q0 2.34-1.1 4.01-1.11 1.66-3 2.52-3.46 1.57-8.05 1.57-5.63 0-9.72-2.43-2.12-1.21-3.4-3.37-1.28-2.16-1.28-5v-.54h-.5l-2.25-2.7v-3.24q1.94 0 2.75.14v-9.99q0-5.27 5.49-7.16 2.79-.99 6.12-.99t5.8.61q2.48.61 4.57 1.84 2.09 1.24 3.31 3.4 1.21 2.16 1.21 4.99v4.55h-8.73l-2.25-2.7v-3.24l-.04-.72q-.41-.14-1.17-.14-3.33 0-3.33 3.56v6.03l2.11 2.52v3.24q-2.65.09-2.65 1.8v.36q.72.23 1.71.23 3.33 0 3.87-2.39h-.32l-2.25-2.7v-3.24q1.53 0 2.25.05 1.76.13 2.88 1.48Zm-16.2 0q.45-.36 1.08-1.12h1.17q.54.85 1.08 1.12.68-.86 1.76-1.21v-8.91q0-2.34 1.21-3.6 1.22-1.26 3.42-1.26 2.21 0 3.47 1.23 1.26 1.24 1.26 3.63v2.02h6.16v-3.19q0-2.48-1.68-4.1-1.69-1.62-4.03-2.23-2.34-.6-4.82-.6-2.47 0-4.29.35-1.83.36-3.42 1.13-1.6.77-2.55 2.16-.94 1.39-.94 3.29v10.34q.58.32 1.12.95Zm20.61 4.91v-.41q0-3.82 2.93-3.82v-1.08q-1.85 0-2.75.9-.45.45-.9 1.17-.94-.19-1.98-1.54-.81 1.17-2.02 1.54-.59-.95-1.28-1.45-.7-.49-1.13-.56-.43-.06-1.19-.06v1.08q1.39 0 2.02.9.63.89.63 1.71 0 4.76-5.17 4.76-5.18 0-5.18-4.76 0-.86.63-1.74.63-.87 2.03-.87v-1.08q-.81 0-1.24.06-.43.07-1.1.54-.68.48-1.26 1.47-1.08-.19-2.03-1.54-.9 1.17-1.98 1.54-.58-.95-1.26-1.45-.67-.49-1.12-.56-.45-.06-1.26-.06v1.08q2.92 0 2.92 3.82v.41q0 2.47 1.71 4.09 1.71 1.62 4.03 2.23 2.32.61 5.11.61 2.79 0 5.11-.61 2.31-.61 4.02-2.23 1.71-1.62 1.71-4.09Zm12.69-17.64v-6.26h22.05l2.25 2.7v6.26h-2.34l1.67 8.55q.4-.05 1.26-.05l2.25 2.7.54 3.24q-2.43 0-2.43 2.16 0 1.31.31 1.31.77 0 .86-.45l1.44.85 2.25 2.7q0 2.16-1.06 3.2-1.06 1.03-2.7 1.03-1.64 0-3.76-1.13-1.66 1.13-3.24 1.13-2.47 0-4.65-2.21-2.19-2.2-2.95-4.72l1.08-.85q.36.45 1.03.45 1.49 0 1.49-1.76l-.14-1.03q-.85-.46-2.09-.46-1.24 0-2.36.73-1.13.72-1.53 2.07l1.08.85 2.25 2.7q-.63 2.11-2.09 3.17-1.47 1.06-3.11 1.06t-3.44-1.13q-2.03 1.13-3.74 1.13-2.34 0-4.11-2.25-1.78-2.25-1.78-4.68l1.39-.85q.09.45.88.45t1.53-1.08q.74-1.08.92-2.39l-2.38-2.7.54-3.24q1.93 0 2.92.27l1.8-9.18-1.89-2.29Zm16.7 12.73q.4-.31.9-1.12h1.17q.72.85 1.3 1.12.18-.31.72-.77l-2.56-13.27h2.56v-3.69h-19.53v3.69h2.57l-2.61 13.27q.54.41.81.77.54-.31 1.26-1.12h1.17q.36.85.76 1.12 1.71-1.71 5.79-1.71 4.07 0 5.69 1.71Zm3.24 9.76h.27q1.98 1.54 3.8 1.54 1.82 0 2.41-2.34-.23.17-.63.17-1.71 0-2.9-1.68-1.2-1.69-1.2-3.22 0-3.19 2.48-3.55l-.18-1.08q-.86 0-1.28.06-.43.07-1.02.54-.58.48-.99 1.47-1.03-.19-2.34-1.54-.31.59-.74.97t-.97.57q-1.75-2.16-5.67-2.16-3.91 0-5.58 2.16-1.03-.19-1.75-1.54-1.08 1.17-2.25 1.54-.41-.99-1.01-1.47-.61-.47-1.06-.54-.45-.06-1.26-.06l-.18 1.08q1.26.18 1.87 1.05.6.88.6 2.46 0 1.57-1.19 3.26-1.19 1.68-2.86 1.68l-.63-.17q.59 2.34 2.37 2.34 1.77 0 3.8-1.54h.27q1.53 1.54 3.06 1.54 2.02 0 3.51-2.34-.36.17-.81.17-2.52 0-2.52-2.6 0-2.61 1.71-4.12 1.71-1.51 3.96-1.51t3.96 1.51q1.71 1.51 1.71 4.12 0 2.6-2.52 2.6l-.86-.17q1.44 2.34 3.56 2.34 1.57 0 3.06-1.54Zm-4.73-12.55h-8.28l2.43-11.25h3.33l2.52 11.25Zm-1.53-1.17-1.21-5.35-1.17 5.35h2.38Zm44.69 17.82q-.59.27-.77 1.35-2.07 0-4.59-2.16-1.21-1.03-2.04-2.95-.84-1.91-.84-4.25v-1.39h-.54l-1.53-1.85v1.85q-1.75 0-2.27.63t-.52 2.02v.68q.32 0 .54-.36l1.26.81 2.25 2.7q-.27 2.11-1.53 3.19t-3.03 1.08q-1.78 0-3.49-1.22-1.71 1.22-3.53 1.22-1.83 0-4.17-2.16t-2.61-4.81l1.26-.81q.18.4.86.4 1.93 0 1.93-3.37h-.54l-2.25-2.7v-3.29q1.8 0 2.52.09v-8.5h-.36l-2.25-2.7v-6.35h10.53l10.08 12.02v-2.97h-.49l-2.25-2.7v-6.35h13.68l2.25 2.7v6.35h-2.7v8.41h.4l2.25 2.7v3.29q-1.75 0-2.25.63-.49.63-.49 2.02v.68q.31-.09.49-.36l3.51 3.51q-.27 2.11-1.55 3.19t-2.63 1.08q-1.35 0-2.61-.38-1.26-.39-1.98-.97Zm-21.02-13.9q.45-.27 1.08-1.08h1.17q.59.81 1.08 1.08.5-.63 1.22-.99v-8.6h1.26l6.57 8.19q1.84.23 2.79 1.4.45-.27 1.08-1.08h3.73q.59.81 1.13 1.08.58-.63 1.17-.95v-12.91h2.79v-3.83h-11.16v3.83h2.7v9.45h-1.53l-11.16-13.28h-7.88v3.83h2.7v12.82q.72.36 1.26 1.04Zm22.95 11.2q2.21 0 3.06-2.25-.27.18-.67.18-1.35 0-2.09-.74-.75-.75-.9-1.62-.16-.88-.16-2.27 0-3.78 2.92-3.78v-1.13q-.81 0-1.23.07-.43.07-1.13.56-.7.5-1.28 1.49-1.08-.23-2.03-1.58h-2.65q-.95 1.26-2.03 1.58-.58-.99-1.26-1.49-.67-.49-1.1-.56-.43-.07-1.24-.07v1.13q2.88 0 2.88 3.78v1.17q0 3.5 2.3 4.99.45.27.81.36.36-1.26 1.48-1.26.77.63 2.12 1.04 1.35.4 2.2.4Zm-21.42-1.4h.27q1.62 1.4 3.58 1.4t2.86-2.25q-.32.18-.72.18-3.15 0-3.15-4.63 0-3.78 2.97-3.78v-1.13q-.86 0-1.31.07-.45.07-1.12.56-.68.5-1.22 1.49-1.08-.23-2.02-1.58-.95 1.21-2.03 1.58-.58-.99-1.26-1.49-.67-.49-1.12-.56-.45-.07-1.26-.07v1.13q2.97 0 2.97 3.78 0 3.42-1.44 4.27-.68.36-1.71.36l-.72-.18q.9 2.25 2.86 2.25 1.95 0 3.57-1.4Zm6.48-14.57v3.28h.45l1.53 1.84v-1.84h.63l-2.61-3.28Zm44.24 4.81q.49-.31 1.08-1.12h1.17q.58.85 1.08 1.12.81-1.03 1.87-1.28 1.05-.25 3.26-.25l2.25 2.7v3.24q-1.76 0-2.25.68-.5.67-.5 2.11v.45q0 2.34-1.1 4.01-1.1 1.66-2.99 2.52-3.47 1.57-8.06 1.57-5.62 0-9.72-2.43-2.11-1.21-3.39-3.37-1.29-2.16-1.29-5v-.54h-.49l-2.25-2.7v-3.24q1.93 0 2.74.14v-9.99q0-5.27 5.49-7.16 2.79-.99 6.12-.99t5.81.61q2.47.61 4.57 1.84 2.09 1.24 3.3 3.4 1.22 2.16 1.22 4.99v4.55h-8.73l-2.25-2.7v-3.24l-.05-.72q-.4-.14-1.17-.14-3.33 0-3.33 3.56v6.03l2.12 2.52v3.24q-2.66.09-2.66 1.8v.36q.72.23 1.71.23 3.33 0 3.87-2.39h-.31l-2.25-2.7v-3.24q1.53 0 2.25.05 1.75.13 2.88 1.48Zm-16.2 0q.45-.36 1.08-1.12h1.17q.54.85 1.08 1.12.67-.86 1.75-1.21v-8.91q0-2.34 1.22-3.6 1.21-1.26 3.42-1.26 2.2 0 3.46 1.23 1.26 1.24 1.26 3.63v2.02h6.17v-3.19q0-2.48-1.69-4.1-1.69-1.62-4.03-2.23-2.34-.6-4.81-.6-2.48 0-4.3.35-1.82.36-3.42 1.13-1.6.77-2.54 2.16-.95 1.39-.95 3.29v10.34q.59.32 1.13.95Zm20.61 4.91v-.41q0-3.82 2.92-3.82v-1.08q-1.84 0-2.74.9-.45.45-.9 1.17-.95-.19-1.98-1.54-.81 1.17-2.03 1.54-.58-.95-1.28-1.45-.7-.49-1.12-.56-.43-.06-1.2-.06v1.08q1.4 0 2.03.9.63.89.63 1.71 0 4.76-5.18 4.76-5.17 0-5.17-4.76 0-.86.63-1.74.63-.87 2.02-.87v-1.08q-.81 0-1.23.06-.43.07-1.11.54-.67.48-1.26 1.47-1.08-.19-2.02-1.54-.9 1.17-1.98 1.54-.59-.95-1.26-1.45-.68-.49-1.13-.56-.45-.06-1.26-.06v1.08q2.93 0 2.93 3.82v.41q0 2.47 1.71 4.09 1.71 1.62 4.03 2.23 2.31.61 5.1.61 2.79 0 5.11-.61 2.32-.61 4.03-2.23 1.71-1.62 1.71-4.09Zm34.51-1.09v8.11q0 1.57.81 2.06l-.81 1.22q-1.17 0-2.45-.59-1.28-.58-2-1.26-.77.68-2.59 1.26-1.82.59-3.44.59-3.29 0-5.36-1.76-1.84 1.76-4.2 1.76-2.37 0-4.37-2.27t-2.32-4.7l1.26-.81q.23.36.9.36 1.8 0 1.8-3.33h-.45l-2.25-2.7v-3.29q1.89 0 2.66.14v-8.55h-1.26l-2.25-2.7v-6.35h24.16l2.25 2.7v10.98h-5.22l-2.25-2.7v-1.93h-4.81v2.61h3.19l2.25 2.7v5.22h-3.37l.49.58v3.29q-.72.04-1.17.11-.45.06-.94.47-.5.41-.5 1.17v.18q.63.23 1.8.23t2.21-.72q1.03-.72 1.03-2.03 0-.23-.27-1.31v-1.43h5.22l2.25 2.69Zm-20.34-3.86q.45-.27 1.08-1.08h1.22q.58.81 1.03 1.08.5-.63 1.22-.99v-2.34h5.53v-2.71h-5.53v-7.82h9.67v4.63h2.7v-8.46h-21.64v3.83h3.6v12.91q.58.32 1.12.95Zm14.36 4.09q0 1.8-1.37 2.83-1.38 1.04-3.36 1.04t-3.53-1.15q-1.55-1.14-1.55-3.48 0-.82.65-1.69.65-.88 2.09-.88v-1.08q-.81 0-1.23.07-.43.07-1.11.54-.67.47-1.21 1.42-1.08-.23-2.07-1.54-.81 1.17-2.03 1.54-.58-.95-1.26-1.42-.67-.47-1.1-.54-.43-.07-1.24-.07v1.08q1.53 0 2.23 1.06t.7 2.94q0 1.9-.61 3.11-.61 1.22-2.54 1.22l-.63-.09q.81 2.29 2.83 2.29 2.03 0 3.96-2.02h.41l.18.18q2.16 1.8 5.24 1.8t5.83-2.12q.4.41 1.66 1.15 1.26.74 1.98.87-.4-.44-.4-2.33v-6.31h-2.75q.23.77.23 1.58Z"
      />
    </g>
  </svg>
);
  
export default Logo