import { useState } from "react";

function InputLogger() {
  const [value, setValue] = useState("");

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => {
            setValue(e.target.value);
            console.log(e);
        }}
      />
      <p>{value}</p>
    </div>
  );
}

export default InputLogger;
