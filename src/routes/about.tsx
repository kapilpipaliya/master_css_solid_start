import { Title } from "@solidjs/meta";

export default function About() {
  return (
    <div class="f:flex min-h:screen items:center justify:center bg:gray-10">
      <div class="r:lg bg:white p:8 shadow:lg">
        <Title>About - SolidStart with Master CSS</Title>
        <h1 class="text:3xl font:bold text:gray-80">About Us</h1>
        <p class="mt:4 text:gray-600">
          This is the about page demonstrating Master CSS styling
        </p>
      </div>
    </div>
  );
} 