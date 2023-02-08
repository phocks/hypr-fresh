import { useState } from "preact/hooks";

import { JSX } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";

// export default function Input(props: JSX.HTMLAttributes<HTMLInputElement>) {
//   return (
//     <input
//       {...props}
//       disabled={!IS_BROWSER || props.disabled}
//       class={`px-3 py-2 bg-white rounded border(gray-500 2) disabled:(opacity-50 cursor-not-allowed) ${
//         props.class ?? ""
//       }`}
//     />
//   );
// }

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
        {
          /* <label
          class="block text-gray-700 text-sm font-bold mb-2"
          for="username"
        >
          Username
        </label> */
        }
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
        {
          /* <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          type="text"
          placeholder="URL"
          onInput={doType}
        //   value={text + 1}
        /> */
        }
      </div>
    </form>
  );
};

export default SubmitForm;
