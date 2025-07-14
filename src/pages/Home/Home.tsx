import Profile from "../../components/Profile/Profile";

export default function Home() {
  return (
    <div id="content-border">
      <div id="content-holder">
        <div className="left-cont">
          <Profile/>
        </div>
        <div className="right-cont">
          <p>Hello there fine reader! I am a <strong>Software Engineer</strong> currently working at the Digital Learning Lab in UCI with <strong>~3 years</strong> of professional coding experience. I studied in UCI for a <strong>Bachelors in Mathematics</strong> with a strong emphasis in AI in Education. I did research under Dr. Mark Warschauer and with Ph.D candidate Daniel Ritchie where we developed AI tools for students in UCI. Previously, I was a <strong>Data Analyst</strong> in the <strong>CP-LEADS</strong>, focusing on analyzing student engagements with our AI tools. Early in my research, I found myself drawn more and more to the technical side of things, which eventually led to my paid role in software development.
          </p>

          <p>My current focus is building <strong>automated data pipelines</strong>, <strong>cloud-based applications</strong>, and <strong>AWS-hosted tools </strong> that keep our research moving smoothly. I design backend systems that handle <strong>massive datasets</strong>, run performance tests on AI models, and create internal tools to speed up analysis. By using <strong>AWS resources</strong>, I'm able to create scalable software solutions to solve unique issues proposed by our research team. Additionally, I was able to integrate our custom website into Canvas using <strong>LTI 1.3</strong>  tested in <strong>Docker.</strong>
          </p>

          <p>Before transitioning into software engineering, I conducted <strong>research</strong> on AI in education, <strong>co-authoring</strong> studies that explored student engagement with AI-driven learning tools. As part of CP-LEADS, a fellowship that prepares students for Ph.D. programs, I developed experience in <strong>data analytics using R</strong>. My work involved analyzing user engagement patterns, applying <strong>Natural Language Processing (NLP) techniques</strong>, and creating visual models to interpret data trends in educational research.
          </p>

          <p>In my spare time, I enjoy playing video games whenever possible. I used to stream my games on twitch, but now I find myself simply enjoying 1 or 2 games whenever I get the chance. I am also involved in the stock market, if not financially than simply intellectually. My favorite small talk is talking about the current market and strategies to ride whichever wave we are in.
          </p>
        </div>
      </div>
    </div>
  );
}