import { useContext } from "react";
import { ThemeContext } from "../../Context/ThemeContext";
import { ButtonTheme } from "../Buttons/ButtonTheme";
import { themes } from "../../Styles/Themes";

export const ThemeTogglerButton = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    setTheme(theme === themes.light ? themes.dark : themes.light);
  };

  return (
    <div>
      <ButtonTheme onClick={toggleTheme}>
        Click here to change the page theme.
      </ButtonTheme>
    </div>
  );
};
