import React, { useState } from "react";
import styled from "styled-components";
import { SunIcon, MoonIcon } from "../assets";

const ToggleSwitch = ({ toggleTheme }) => {
  const [isToggled, setIsToggled] = useState(false);
  const onToggle = () => {
    setIsToggled(!isToggled);
    toggleTheme();
  };
  return (
    <ToggleSwitchContainer>
      <IconContainer>
        <IconSlider isToggled={isToggled}>
          <SunIcon />
          <MoonIcon />
        </IconSlider>
      </IconContainer>

      <label className="toggle-switch">
        <input type="checkbox" checked={isToggled} onChange={onToggle} />
        <span className="switch" />
      </label>
    </ToggleSwitchContainer>
  );
};

export default ToggleSwitch;

const ToggleSwitchContainer = styled.div`
  position: fixed;
  bottom: 2vh;
  right: 2vw;
  z-index: 200;
  overflow-x: hidden;
  width: 50px;

  .toggle-switch {
    position: relative;
    display: inline-block;
    width: 50px;
    height: 25px;
  }
  .toggle-switch input[type="checkbox"] {
    display: none;
  }
  .toggle-switch .switch {
    position: absolute;
    cursor: pointer;
    background-color: ${(props) => props.theme.overlay};
    border-radius: 25px;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transition: background-color 0.2s ease;
  }
  .toggle-switch .switch::before {
    position: absolute;
    content: "";
    left: 2px;
    top: 2px;
    width: 21px;
    height: 21px;
    background-color: ${(props) => props.theme.subtle};
    border-radius: 50%;
    transition: transform 0.3s ease;
  }
  .toggle-switch input[type="checkbox"]:checked + .switch::before {
    transition: ease 0.5s;
    transform: translateX(25px);
    /* background-color: #6699cc; */
  }
  .toggle-switch input[type="checkbox"]:checked + .switch {
    /* background-color: #336699; */
  }
`;

const IconContainer = styled.div`
  position: relative;
  height: 25px;
`;

const IconSlider = styled.div`
  position: absolute;
  width: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  right: ${(props) => (props.isToggled ? "-50px" : "0px")};
  transition: ease 0.5s;
`;
