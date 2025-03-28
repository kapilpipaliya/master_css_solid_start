import { createSignal } from "solid-js";
import { useCSSRuntime } from "./CSSRuntimeProvider";

export default function Counter() {
  const [count, setCount] = createSignal(0);
  return (
    <button 
      class="bg:blue-50 hover:bg:blue-60 text:white p:10 r:5 font:bold transition:all cursor:pointer" 
      onClick={() => setCount(count() + 1)} 
      type="button"
    >
      Clicks: {count()}
    </button>
  );
}
