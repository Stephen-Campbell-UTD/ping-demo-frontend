import { useContext } from "react";
import { ColorScheme, THEME, ThemeContext } from "../ColorScheme";
import day_icon from "../icons/day_icon.svg";
import night_icon from "../icons/night_icon.svg";

export default function ThemeToggle(props) {
  const theme = useContext(ThemeContext);
  // let borderRadius = props.theme === THEME.TI ? 0 : 9;

  const is_ti_themed = theme === THEME.TI;
  let borderRadius = 9;
  const boxShadow = is_ti_themed
    ? "0px 0px 11px rgba(0, 0, 0, 0.4)"
    : undefined;

  let displayElement = null;
  let slider_background = null;
  if (is_ti_themed) {
    slider_background = ColorScheme.get_color("red_dark", theme);
    displayElement = (
      <>
        <img alt="day theme" src={day_icon}></img>
        <div
          style={{
            backgroundColor: ColorScheme.get_color("bg3", THEME.TI),
            width: 32,
            height: 32,
            borderRadius,
          }}
        ></div>
      </>
    );
  } else {
    slider_background = ColorScheme.get_color("bg1", theme);

    displayElement = (
      <>
        <div
          style={{
            backgroundColor: ColorScheme.get_color("bg2", theme),
            width: 32,
            height: 32,
            borderRadius,
          }}
        ></div>
        <img alt="night theme" src={night_icon}></img>
      </>
    );
  }

  return (
    <div
      style={{
        width: 64,
        height: 32,
        backgroundColor: slider_background,
        borderRadius,
        display: "flex",
        cursor: "pointer",
        flexDirection: "row",
        boxShadow,
      }}
      onClick={() => {
        const new_is_ti_themed = !is_ti_themed;
        props.handle_new_theme(new_is_ti_themed ? THEME.TI : THEME.GRUVBOX);
      }}
    >
      {displayElement}
    </div>
  );
}
