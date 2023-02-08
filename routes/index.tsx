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
      </div>
    </>
  );
}
