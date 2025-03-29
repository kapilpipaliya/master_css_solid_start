import { A } from "@solidjs/router";

export function Navigation() {
  return (
    <nav class="fixed top-0 left-0 right-0 bg-white shadow-md">
      <div class="container mx-auto px-4">
        <div class="flex h-16 items-center justify-between">
          <div class="flex space-x-4">
            <A class="text-gray-800 hover:text-gray-600" href="/">
              Home
            </A>
            <A class="text-gray-800 hover:text-gray-600" href="/about">
              About
            </A>
            <A class="text-gray-800 hover:text-gray-600" href="/primary-demo">
              Primary Demo
            </A>
          </div>
        </div>
      </div>
    </nav>
  );
} 