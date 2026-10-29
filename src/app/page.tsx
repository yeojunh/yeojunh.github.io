import { SkyScene } from "@/components/SkyScene";
import styles from "@/components/SkyScene.module.css";

export default function Home() {
  return (
    <SkyScene>
      <header>
        <h1>Yeojun Han</h1>
        <p>
          Building AI developer tools at Microsoft.
        </p>
      </header>
      <section aria-labelledby="about">
        <h2 id="about">About</h2>
        <p>
          I work on Visual Studio Copilot at Microsoft, with a focus in AI model integration, evaluation, and AI governance for developer tools.
        </p>
        <p>
          Recently, I was a speaker at{" "}
          <a href="https://vslive.com/events/microsofthq-2026/sessions/wednesday/w11-ai-in-vs.aspx" target="_blank" rel="noopener noreferrer">
            VSLive 2026
          </a>{" "}
          about practical AI workflows in Visual Studio.
        </p>
        <p>
          I graduated from UBC in 2025 with a B.Sc. in Computer Science with Distinction. 
          Along the way, I helped organize the sixth iteration of cmd-f hackathon with nwPlus for over 200 underrepresented students, held finance and marketing roles with UBC Women in Computer Science, and held an internal executive role in the Undergraduate Statistics Society. 
        </p>
        <p>
          I received the Bit Quill Women in Computer Science Award in 2023 and 2025, and the Community Service Award in 2024. 
        </p>
        <p>
          Outside of work, I like rock climbing, and pottery.
        </p>
      </section>
      <section aria-labelledby="projects">
        <h2 id="projects">Projects</h2>
        <ul>
          <li>
            <a href="https://github.com/yeojunh/Adversarial-Examples-DNN" target="_blank" rel="noopener noreferrer">
              Noise in the Network
            </a>
            <p>Trained and evaluated image classifiers on CIFAR-10 using ensemble adversarial training to improve robustness to adversarial attacks.</p>
          </li>
          <li>
            <a href="https://github.com/emmahuang03/trash-identifier" target="_blank" rel="noopener noreferrer">
              WAiSTE
            </a>
            <p>First place at the Microsoft Intern Hackathon. Point, identify, and sort with your phone camera.</p>
          </li>
          <li>
            <a href="https://github.com/yeojunh/amplifAI" target="_blank" rel="noopener noreferrer">
              AmplifAI
            </a>
            <p>Real time speech augmentation for people with speech disorders, bridging the communication gap.</p>
          </li>
          <li>
            <a href="https://devpost.com/software/aktually" target="_blank" rel="noopener noreferrer">
              Actually
            </a>
            <p>Real time fact checking to counter misinformation in livestreams.</p>
          </li>
        </ul>
      </section>
      <section aria-labelledby="experience">
        <h2 id="experience">Experience</h2>
        <dl>
          <div className={styles.experienceGroup}>
            <dt>Microsoft / Visual Studio Copilot</dt>
            <dd>
              <dl>
                <div>
                  <dt>Software Engineer II</dt>
                  <dd>Sep 2026 - present</dd>
                </div>
                <div>
                  <dt>Software Engineer I</dt>
                  <dd>Aug 2025 - Aug 2026</dd>
                </div>
              </dl>
            </dd>
          </div>
          <div>
            <dt>UBC, Undergraduate HCI research assistant</dt>
            <dd>Jan 2025 - May 2025</dd>
          </div>
          <div>
            <dt>UBC, Undergraduate teaching assistant</dt>
            <dd>Jan 2022 - May 2025</dd>
            <dd>
              <ul>
                <li>CPSC 425: Computer vision</li>
                <li>CPSC 330: Applied machine learning</li>
                <li>CPSC 210: Software construction</li>
              </ul>
            </dd>
          </div>
          <div className={styles.experienceGroup}>
            <dt>Ansys / OpticStudio</dt>
            <dd>
              <dl>
                <div>
                  <dt>Software engineering intern</dt>
                  <dd>Sep 2024 - Dec 2024</dd>
                </div>
              </dl>
            </dd>
          </div>
          <div className={styles.experienceGroup}>
            <dt>Microsoft / Visual Studio Copilot</dt>
            <dd>
              <dl>
                <div>
                  <dt>Software engineering intern</dt>
                  <dd>May 2024 - Aug 2024</dd>
                </div>
              </dl>
            </dd>
          </div>
          <div className={styles.experienceGroup}>
            <dt>Microsoft / Azure SDK / API Reviewer</dt>
            <dd>
              <dl>
                <div>
                  <dt>Software engineering intern</dt>
                  <dd>May 2023 - Aug 2023</dd>
                </div>
              </dl>
            </dd>
          </div>
          <div className={styles.experienceGroup}>
            <dt>Microsoft / Azure SDK / Engineering Systems</dt>
            <dd>
              <dl>
                <div>
                  <dt>SWE &amp; PM intern</dt>
                  <dd>May 2022 - Aug 2022</dd>
                </div>
              </dl>
            </dd>
          </div>
        </dl>
      </section>
    </SkyScene>
  );
}
