import Profile from "../../components/Profile/Profile";

export default function Home() {
  return (
    <div id="content-border">
      <div id="content-holder">
        <div className="left-cont">
          <Profile/>
        </div>
        <div className="right-cont">
          <p>I am a Bachelor's student in Mathematics at the University of California,
            Irvine, with a strong interest in software engineering. Currently,
            I work as a <strong>Software Engineer</strong> at the Digital Learning Lab in UCI,
            under Dr. Mark Warschauer and with Ph.D candidate Daniel Ritchie.
            Previously, I was a <strong>research assistant</strong> on the <strong>CodeAI project</strong>,
            focusing on creating software to enhance AI literacy among students. Early in my
            research, I found myself drawn more and more to the technical side of things,
            which eventually led to a paid role in software development.
          </p>

          <p>My current focus is building <strong>automated data pipelines</strong>,
            <strong>cloud-based applications</strong>, and <strong>AWS-hosted tools
            </strong> that keep our research moving smoothly. I design backend systems
            that handle <strong>massive datasets</strong>, run performance tests on AI
            models, and create internal tools to speed up analysis. By using
            <strong>AWS resources</strong>, I'm able to create scalable
            software solutions to solve unique issues proposed by our research team.</p>

          <p>Before transitioning into software engineering, I conducted <strong>research</strong> on AI in education,
            <strong>co-authoring</strong> studies that explored student engagement with AI-driven learning tools.
            As part of CP-LEADS, a fellowship that prepares students for Ph.D. programs,
            I developed experience in <strong>data analytics using R</strong>. My work involved analyzing
            user engagement patterns, applying <strong>Natural Language Processing (NLP) techniques</strong>,
            and creating visual models to interpret data trends in educational research.</p>

          <p>In my spare time, I enjoy playing video games whenever possible. I used to stream
            my games on twitch, but now I find myself simply enjoying 1 or 2 games whenever I
            get the chance. I am also involved in the stock market, if not financially than simply
            intellectually. My favorite small talk is talking about the current market and
            strategies to ride whichever wave we are in.
          </p>
        </div>
      </div>
    </div>
  );
}