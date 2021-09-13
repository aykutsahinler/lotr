import "./style.css";

import a from "../../../assets/Tolkien/tolkien.jpg";
import b from "../../../assets/Tolkien/tolkien2.jpg";

function Tolkien() {
  return (
    <main className="tolkien">
      <h1>J.R.R. Tolkien</h1>
      <div className="tolkien-container">
        <div className="tolkien-card">
          <img src={a} alt="" />
          <p className="tolkien-about">
            <span>
              John Ronald Reuel Tolkien was born on January 3, 1892, in South
              Africa, which was a British colony at that time. Author, poet,
              philologist, and professor, Ronald Tolkien is known for works of
              fantasy fiction such as The Hobbit, The Lord of the Rings, and The
              Silmarillion. <br /> <br />
              Born in Bloemfontein, South Africa, a British colony, Tolkien
              lived with his family in Sarehole after losing his father, Arthur,
              in 1896. Sarehole is known to have had a profound effect on
              Tolkien and was instrumental in constructing the Hobbit realm.{" "}
              <br /> <br />
              While at King Edward's School, Tolkien was revealed to have a
              great aptitude for languages, and it was during this period that
              he began to devise a language of his own. Thus the foundations of
              the Elvish languages ​​were laid.
              <br /> <br />
              Ronald Tolkien, who went to Exeter College to study classical
              languages ​​in 1911, met Edith Bratt at the age of 16. On March
              22, 1916, Ronald and Edith got married.
            </span>
          </p>
        </div>
        <div className="tolkien-card">
          <p>
            <span>
              Meanwhile, World War I began and Tolkien joined the army soon
              after. Losing two of his close friends in this war, Tolkien
              returned to England because of a bomb that exploded very close to
              him. But the war left an unforgettable impression on Tolkien. When
              the war was over, Tolkien got a job at the Oxford English
              Dictionary, and after returning from the war he spent most of his
              life in Oxford. <br /> <br />
              Until he became a professor at Oxford in 1945, his gigantic
              fantasy world continued to form Middle-earth. His first book, Sir
              Gawain and The Green Knight, was published as a translation. He
              published The Hobbit in 1937. The novel received both positive and
              negative reviews.
              <br /> <br />
              Middle-earth appeared for the first time in The Hobbit, the
              beginning of the Lord of the Rings series. After that, Tolkien
              started working for The Lord of the Rings.
            </span>
          </p>
          <img src={b} alt="" />
        </div>
      </div>
      <h1>Works</h1>
      <div className="tolkien-container">
        <div className="tolkien-card">
          <ul>
            <h2>Before Death</h2>
            <hr />
            <br />
            <li>
              1925 - Sir Gawain And The Green Knight (editör, E.V. Gordon ile
              birlikte)
            </li>
            <li>1936 - Beowulf: The Monsters And The Critics</li>
            <li>1937 - Hobbit</li>
            <li>1939 - Fairy Stories</li>
            <li>1949 - Farmer Giles Of Ham</li>
            <li>1957 - Lord Of The Rings</li>
            <li>1962 - The Adventures Of Tom Bombadil</li>
            <li>1967 - Smith Of Wootton Major, The Road Goes Ever On</li>
          </ul>

          <ul>
            <h2>After Death</h2>
            <hr />
            <br />
            <li>1976 - The Father Christmas Letters</li>
            <li>1977 - Silmarillion</li>
            <li>1980 - Unfinished Tales</li>
            <li>1981 - The Letters of J.R.R. Tolkien</li>
            <li>1982 - Mr. Bliss</li>
            <li>
              1983 - The Monsters And The Critics And Other Essays, Kayıp
              Öyküler Kitabı 1
            </li>
            <li>1984 - Unfinished Tales 2</li>
            <li>1985 - The Lays Of Beleriand</li>
            <li>1986 - The Shaping of Middle-Earth</li>
            <li>1987 - The Lost Road and Other Writings</li>
            <li>1988 - The Return Of The Shadow</li>
            <li>1989 - The Treason Of Isengard , The War Of The Ring</li>
            <li>1998 - Roverandom</li>
            <li>2007 - Sons of Húrin</li>
            <li>2008 - Stories from the Dangerous Land</li>
            <li>2012 - Unfinished Tales</li>
            <li>2016 - Story of Beren and Lúthien</li>
            <li>2018 - Fall Of Gondolin</li>
          </ul>
        </div>
      </div>
    </main>
  );
}

export default Tolkien;
