import { useState } from "react";

function useFormInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const reset = (v = "") => setValue(v);

  return { value, onChange, reset };
}

export default useFormInput;
