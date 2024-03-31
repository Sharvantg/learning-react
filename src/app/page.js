import { Visitor } from "../../public/Visitor";
import { people } from "../../Helpers/mapAndFilterData";

// const people = [
//   {
//     id: 0,
//     name: "Creola Katherine Johnson",
//     profession: "mathematician",
//   },
//   {
//     id: 1,
//     name: "Mario José Molina-Pasquel Henríquez",
//     profession: "chemist",
//   },
//   {
//     id: 2,
//     name: "Mohammad Abdus Salam",
//     profession: "physicist",
//   },
//   {
//     id: 3,
//     name: "Percy Lavon Julian",
//     profession: "chemist",
//   },
//   {
//     id: 4,
//     name: "Subrahmanyan Chandrasekhar",
//     profession: "astrophysicist",
//   },
// ];

const person = {
  name: "Tim David",
  Work: {
    Company: "Plum",
    Location: "BLR",
  },
};

function Card({ children }) {
  return (
    <div style={{ padding: "40px", backgroundColor: "pink" }}>{children}</div>
  );
}
const BLRTheme = { backgroundColor: "black", color: "white" };
const CheThe = { backgroundColor: "red", color: "black" };
const isBLR = false;

export default function Home() {
  const chemists = people.filter((peoples) => {
    return peoples.profession === "chemist";
  });

  return (
    <div style={isBLR ? BLRTheme : CheThe}>
      {chemists.map((chemist) => {
        return (
          <Card key={chemist.id}>
            <Visitor person={chemist.name}></Visitor>
          </Card>
        );
      })}
    </div>
  );
}
