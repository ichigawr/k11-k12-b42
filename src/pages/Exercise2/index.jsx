import useLocalStorage from "../../hooks/useLocalStorage";

function Exercise2() {
  const [name, setName] = useLocalStorage("name", "F8 User");
  const [age, setAge] = useLocalStorage("age", 18);
  const [country, setCountry] = useLocalStorage("country", "Việt Nam");
  const [job, setJob] = useLocalStorage("job", "Lập trình viên");

  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <p>Xin chào, {name}!</p>

      <input value={age} onChange={(e) => setAge(e.target.value)} />
      <p>{age} tuổi.</p>

      <input value={country} onChange={(e) => setCountry(e.target.value)} />
      <p>Đến từ {country}.</p>

      <input value={job} onChange={(e) => setJob(e.target.value)} />
      <p>Nghề nghiệp: {job}.</p>
    </div>
  );
}

export default Exercise2;
