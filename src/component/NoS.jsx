import React from "react";
import TimerOutlinedIcon from "@mui/icons-material/TimerOutlined";

function NoS(props) {
  return (
    <div class="nos">
      <TimerOutlinedIcon />
      <h3>Number of Set</h3>
      <p>Adjust your number of set</p>
      <form action="" class="buttons">
        <button class="decrease"> ﹤ </button>
        <input class="inputBox" type="text" value="0" />
        <button class="increase"> ﹥ </button>
      </form>
    </div>
  );
}

export default NoS;
