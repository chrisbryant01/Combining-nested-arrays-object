import "./styles.css";

const person = {
  firstName: ["Chris", "John", "Madison", "Todd", "Dale"],
  lastName: ["Bryant", "Bond", "Bryant", "Williamson", "Sparks"],
  score: [88, 98, 99, 76, 67],
};

let combinedArray = [];
for (let i = 0; i < person.firstName.length; i++) {
  combinedArray.push(i);
}

const personArray = (() => {
  const { firstName, lastName, score } = person;

  return combinedArray.map((i) => {
    const format = i + 1 + ": " + firstName[i] + " " + lastName[i] + " ";

    return (
      <li key={i}>
        <span>{format}</span>
        <span>
          Score: <strong>{score[i]}</strong>]
        </span>
      </li>
    );
  });
})();

export default function App() {
  return (
    <div className="App">
      <h2>
        <u>People List:</u>
      </h2>
      <ul className="list">{personArray}</ul>
    </div>
  );
}
