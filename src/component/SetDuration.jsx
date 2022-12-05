import React from "react";

function SetDuration(props) {
  return (
    <div class="SD">
      <h3>Set Duration</h3>
      <p>Adjust your set duration</p>
      <form action="" class="buttons">
        <button class="decrease"> ﹤ </button>
        <input class="inputBox" type="text" value="0" />
        <button class="increase"> ﹥ </button>
      </form>
    </div>
  );
}

export default SetDuration;
