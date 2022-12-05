import React from "react";

function RestDuration(props) {
  return (
    <div class="RD">
      <h3>Rest Duration</h3>
      <p>Adjust your rest duration</p>
      <form action="" class="buttons">
        <button class="decrease"> ﹤ </button>
        <input class="inputBox" type="text" value="0" />
        <button class="increase"> ﹥ </button>
      </form>
    </div>
  );
}

export default RestDuration;
