import "./App.css";
export default function App() {
  const cards = [
    {
      name: "FREE",
      price: "$0",
      user: "✔ Single User",
      storage: "✔ 5GB Storage",
      publics: "✔ Unlimited publics publics",
      access: "✔ Community Access",
      privates: "✖ Unlimited privates publics",
      support: "✖ support Phone Support",
      subdomain: "✖ Free Subdomain",
      report: "✖ report Status Reports"
    },
    {
      name: "PLUS",
      price: "$9",
      user: "✔ 5 User",
      storage: "✔ 50GB Storage",
      publics: "✔ Unlimited publics publics",
      access: "✔ Community Access",
      privates: "✔ Unlimited privates publics",
      support: "✔ support Phone Support",
      subdomain: "✔ Free Subdomain",
      report: "✖ report Status Reports"
    },
    {
      name: "PRO",
      price: "$49",
      user: "✔ Unlimited Users",
      storage: "✔ 150GB Storage",
      publics: "✔ Unlimited publics publics",
      access: "✔ Community Access",
      privates: "✔ Unlimited privates publics",
      support: "✔ support Phone Support",
      subdomain: "✔ Free Subdomain",
      report: "✔ report Status Reports"
    }
  ];
  return (
    <div className="deck">
      {cards.map((item, index) => (
        <Deck card={item} key={index} />
      ))}
    </div>
  );
}
//continue fromremoving div
function Deck({ card }) {
  return (
    <div className="card">
      <h4 className="title">{card.name}</h4>
      <h5 className="price">
        {card.price}
        <span className="month">/month</span>
      </h5>

      <ul>
        <li>{card.user}</li>
        <li>{card.storage}</li>
        <li>{card.publics}</li>
        <li>{card.access}</li>
        <li>{card.privates}</li>
        <li>{card.support}</li>
        <li>{card.subdomain}</li>
        <li>{card.report}</li>
      </ul>
      <button className="btn">Button</button>
    </div>
  );
}