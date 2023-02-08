import { useState } from "preact/hooks";

import { JSX } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";

const SubmitForm = (props: JSX.HTMLAttributes<HTMLInputElement>) => {
  const [text, setText] = useState<string>("");

  const doSubmit = async (event: any) => {
    event.preventDefault();
    // Do something here
    console.log(text);
    const data = await fetch("https://api.phocks.org/", {}).then((res) =>
      res.json()
    );
    console.log(data);
    setText(data.random_name);
  };

  const doType = (event: any) => {
    // event.preventDefault();
    console.log(event.target.value);
    setText(event.target.value);
  };

  return (
    <form
      onSubmit={doSubmit}
    >
      <div class="mb-4">
        <input
          {...props}
          disabled={!IS_BROWSER || props.disabled}
          class={`px-3 py-2 bg-white rounded border(gray-500 2) w-full disabled:(opacity-50 cursor-not-allowed) ${
            props.class ?? ""
          }`}
          onInput={doType}
          placeholder="URL"
          value={text}
        />
      </div>
    </form>
  );
};

export default SubmitForm;
