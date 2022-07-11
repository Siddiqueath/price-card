import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

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
    <div className='container my-2 px-3 py-4 bg-primary'>
      <div className='row'>
        {cards.map((item, index) => (
          <Deck card={item} key={index} />
        ))}
      </div>
    </div>
  );
}

function Deck({ card }) {
  return (
    <div className='col col-12 col-md-6 col-lg-4'>
      <div className='card mx-auto my-4 mx-lg-3'>
        <div className='card-body'>
          <h6 class="card-title bg-warning px-3 py-1 text-center text-muted">{card.name}</h6>
          <h5 className="card-price my-3 text-center">{card.price} <span>/month</span></h5>
          <hr></hr>
          
          <ul className='list-unstyled ms-3 mt-4'>
            <li className='mb-3'>{card.user}</li>
            <li className='mb-3'>{card.storage}</li>
            <li className='mb-3'>{card.publics}</li>
            <li className='mb-3'>{card.access}</li>
            <li className='mb-3'>{card.privates}</li>
            <li className='mb-3'>{card.support}</li>
            <li className='mb-3'>{card.subdomain}</li>
            <li className='mb-3'>{card.report}</li>
          </ul>
          
          <button type='button' className='btn w-100 py-2 btn-lg btn-primary rounded-pill'>Button</button>
        </div>
      </div>
    </div>
  );
}