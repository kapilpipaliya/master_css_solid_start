import { MetaProvider, Title } from "@solidjs/meta";
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";

import config from "../master.css";
import { CSSRuntimeProvider } from "./components/CSSRuntimeProvider";
import { Navigation } from "./components/Navigation";

export default function App() {
  return (
    <Router
      root={props => (
        <CSSRuntimeProvider config={config}>
          <MetaProvider>
            <Title>SolidStart - Basic</Title>
            <Navigation />
            <Suspense>{props.children}</Suspense>
          </MetaProvider>
        </CSSRuntimeProvider>
      )}
    >
      <FileRoutes />
    </Router>
  );
}


