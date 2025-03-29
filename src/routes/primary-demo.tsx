import { Title } from "@solidjs/meta";
import { createSignal, Switch, Match } from "solid-js";

const STYLES = {
  container: 'min-h:screen bg:gray-100 p:4',
  content: 'max-w:4xl mx:auto',
  nav: 'bg:white shadow:md mb:6',
  navList: 'f:flex gap:4 p:4',
  navItem: 'px:4 py:2 rounded cursor:pointer transition:all duration:200',
  navItemActive: 'bg:primary text:white',
  navItemInactive: 'hover:bg:gray-100',
  mainContent: 'bg:white p:6 rounded shadow:md',
  card: 'bg:primary text:white p:4 rounded mb:4',
  title: 'text:2xl font:bold mb:4',
  text: 'text:gray-600'
} as const;

export default function PrimaryDemo() {
  const [activeMenu, setActiveMenu] = createSignal('home');

  return (
    <div class={STYLES.container}>
      <div class={STYLES.content}>
        <Title>Primary Color Demo</Title>
        
        <nav class={STYLES.nav}>
          <ul class={STYLES.navList}>
            <li>
              <button 
                class={`${STYLES.navItem} ${activeMenu() === 'home' ? STYLES.navItemActive : STYLES.navItemInactive}`}
                onClick={() => setActiveMenu('home')}
              >
                Home
              </button>
            </li>
            <li>
              <button 
                class={`${STYLES.navItem} ${activeMenu() === 'about' ? STYLES.navItemActive : STYLES.navItemInactive}`}
                onClick={() => setActiveMenu('about')}
              >
                About
              </button>
            </li>
            <li>
              <button 
                class={`${STYLES.navItem} ${activeMenu() === 'contact' ? STYLES.navItemActive : STYLES.navItemInactive}`}
                onClick={() => setActiveMenu('contact')}
              >
                Contact
              </button>
            </li>
          </ul>
        </nav>

        <main class={STYLES.mainContent}>
          <Switch fallback={<div>Page not found</div>}>
            <Match when={activeMenu() === 'home'}>
              <h1 class={STYLES.title}>Welcome to Primary Color Demo</h1>
              <div class={STYLES.card}>
                <h2 class="text:xl font:bold mb:2">Featured Content</h2>
                <p>This card uses the primary background color to stand out.</p>
              </div>
              <div class={STYLES.card}>
                <h2 class="text:xl font:bold mb:2">Another Section</h2>
                <p>Another example of using the primary background color.</p>
              </div>
            </Match>

            <Match when={activeMenu() === 'about'}>
              <h1 class={STYLES.title}>About Us</h1>
              <div class={STYLES.card}>
                <h2 class="text:xl font:bold mb:2">Our Mission</h2>
                <p>We strive to create beautiful and functional web applications using modern technologies.</p>
              </div>
              <div class={STYLES.text}>
                <p>Our team is dedicated to:</p>
                <ul class="list:disc pl:6 mt:2">
                  <li>Creating exceptional user experiences</li>
                  <li>Building performant applications</li>
                  <li>Maintaining high code quality</li>
                </ul>
              </div>
            </Match>

            <Match when={activeMenu() === 'contact'}>
              <h1 class={STYLES.title}>Contact Us</h1>
              <div>
                <h2 class="text:xl font:bold mb:2">Get in Touch</h2>
                <p>We'd love to hear from you! Here's how you can reach us:</p>
              </div>
              <div class={STYLES.text}>
                <ul class="list:disc pl:6 mt:2">
                  <li>Email: contact@example.com</li>
                  <li>Phone: (555) 123-4567</li>
                  <li>Address: 123 Demo Street, Web City</li>
                </ul>
              </div>
            </Match>
          </Switch>
        </main>
      </div>
    </div>
  );
} 