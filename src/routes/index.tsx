import { Title } from "@solidjs/meta";

export default function Home() {
  return (
    <div class="flex min-h-screen items-center justify-center bg-gray-100">
      <div class="rounded-lg bg-white p-8 shadow-lg">
        <Title>Home - SolidStart with Master CSS</Title>
        <h1 class="text-3xl font-bold text-gray-800">Welcome to SolidStart</h1>
        <p class="mt-4 text-gray-600">
          This is a demo of Master CSS with SolidStart
        </p>
      </div>
    </div>
  );
}
