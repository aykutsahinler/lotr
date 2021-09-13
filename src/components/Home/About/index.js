import "./style.css";

function About() {
  return (
    <main className="about-main">
      <div className="about-container">
        <h1>About</h1>
        <p>
          The main purpose of this page is to comprehend the goals and events in
          the Middle-earth Universe without reading a book. in this page
          <a href="https://github.com/aykutsahinler">
           {" "} who created very big fan of LOTR{" "}
          </a>{" "}
          you can find many things you are looking for about the Middle-earth
          Universe, as well as send me the information you want to be added.
        </p>
        <h2>Bu sayfada neler bulabileceksiniz?</h2>
        <ul>
          <li>- Photos of the Middle-earth Universe</li>
          <li>- Books describing the Middle-earth Universe.</li>
          <li>- Films about the Middle-earth Universe.</li>
          <li>- Basic information about J.R.R. Tolkien.</li>
          <li>- Characters in the Middle-earth Universe.</li>
          <li>- Useful links</li>
        </ul>
        <h3>I wish you a pleasant time in advance.</h3>
      </div>
    </main>
  );
}

export default About;
