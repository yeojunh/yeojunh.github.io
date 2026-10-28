import { SkyScene } from "@/components/SkyScene";

export default function Home() {
  return (
    <SkyScene>
      <header>
        <h1>Yeojun Han</h1>
        <p>
          Software Engineer II working on AI tooling
          <br />
          at Microsoft.
        </p>
      </header>
      <section aria-labelledby="about">
        <h2 id="about">About</h2>
        <p>
          I work on Visual Studio Copilot at Microsoft. Previously, I worked on
          Azure SDK tools and Ansys OpticStudio, and did HCI research at UBC.
        </p>
        <p>
          I studied Computer Science at UBC. Outside of work, I like traveling,
          rock climbing, surfing, and pottery.
        </p>
      </section>
      <section aria-labelledby="projects">
        <h2 id="projects">Projects</h2>
        <ul>
          <li>
            <a href="https://github.com/emmahuang03/trash-identifier" target="_blank" rel="noopener noreferrer">
              WAiSTE
            </a>
            <p>An AI waste-sorting app. First place at the Microsoft Intern Hackathon.</p>
          </li>
          <li>
            <a href="https://github.com/yeojunh/amplifAI" target="_blank" rel="noopener noreferrer">
              AmplifAI
            </a>
            <p>Real-time speech augmentation for people with dysarthria.</p>
          </li>
          <li>
            <a href="https://devpost.com/software/aktually" target="_blank" rel="noopener noreferrer">
              Actually
            </a>
            <p>Real-time fact checking for livestreams.</p>
          </li>
        </ul>
      </section>
      <section aria-labelledby="experience">
        <h2 id="experience">Experience</h2>
        <dl>
          <div>
            <dt>Microsoft</dt>
            <dd>2025 - present</dd>
            <dd>Software Engineer II, Visual Studio Copilot</dd>
          </div>
          <div>
            <dt>Ansys</dt>
            <dd>2024</dd>
            <dd>Software engineering intern, OpticStudio</dd>
          </div>
          <div>
            <dt>Microsoft</dt>
            <dd>2022 - 2024</dd>
            <dd>Internships, Azure SDK &amp; Visual Studio Copilot</dd>
          </div>
          <div>
            <dt>UBC</dt>
            <dd>2021 - 2025</dd>
            <dd>Teaching assistant &amp; HCI research assistant</dd>
          </div>
        </dl>
      </section>
    </SkyScene>
  );
}
