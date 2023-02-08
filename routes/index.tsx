import { Head } from "$fresh/runtime.ts";
import SubmitForm from "../islands/SubmitForm.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Hypr</title>
      </Head>
      <div class="p-4 mx-auto max-w-screen-md">
        <SubmitForm />

        <a href="https://fresh.deno.dev">
          <img
            width="197"
            height="37"
            src="https://fresh.deno.dev/fresh-badge.svg"
            alt="Made with Fresh"
          />
        </a>
      </div>
    </>
  );
}
