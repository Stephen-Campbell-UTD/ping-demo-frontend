import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import "../assets/PingJobsButton.css";
import { PingJobMonitor } from "./PingJobMonitor";
import { useContext } from "react/cjs/react.development";
import { ColorScheme, THEME, ThemeContext } from "../ColorScheme";

export function PingJobsButton(props) {
  const [shown, setShown] = useState(false);
  const theme = useContext(ThemeContext);
  const active_class = shown ? "active" : "";
  const bg_color =
    theme === THEME.TI
      ? ColorScheme.get_color("red_dark", theme)
      : ColorScheme.get_color("bg1", theme);
  return (
    <div
      className={["ping_jobs_icon_container", theme, active_class].join(" ")}
    >
      <svg
        style={{
          overflow: "visible",
        }}
        onClick={() => setShown(!shown)}
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {shown && (
          <g style={{ transformOrigin: "center" }} transform="scale(1.5)">
            <rect
              x="0"
              y="0"
              width="24"
              height="24"
              rx={2}
              fill={bg_color}
            ></rect>
          </g>
        )}
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2 21V7C2 5.11438 2 4.17157 2.58579 3.58579C3.17157 3 4.11438 3 6 3H16C16.8317 3 17.4778 3 18.0037 3.02706C15.7519 3.2741 14 5.18245 14 7.5V11.0002L13.9012 20.9671L11 20L8 21L5 20L2 21ZM21 11L16 11V7.5C16 6.11929 17.1193 5 18.5 5C19.8807 5 21 6.11929 21 7.5V11ZM4 7C4 6.44772 4.44772 6 5 6H11C11.5523 6 12 6.44772 12 7C12 7.55228 11.5523 8 11 8H5C4.44772 8 4 7.55228 4 7ZM4 11C4 10.4477 4.44772 10 5 10H7C7.55228 10 8 10.4477 8 11C8 11.5523 7.55228 12 7 12H5C4.44772 12 4 11.5523 4 11ZM4 15C4 14.4477 4.44772 14 5 14H9C9.55228 14 10 14.4477 10 15C10 15.5523 9.55228 16 9 16H5C4.44772 16 4 15.5523 4 15Z"
          fill="white"
        />
      </svg>
      <AnimatePresence>
        {shown && <PingJobMonitor {...props} />}
      </AnimatePresence>
    </div>
  );
}