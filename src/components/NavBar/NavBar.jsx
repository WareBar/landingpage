import './NavBar.css'

const Tag = ['Home','About','Contact']


function NavBar() {
  return (
    <div className="NavBar">
      <h1>Logo</h1>
      <ul>
        {Tag.map((item) => <li><a href="#">{item}</a></li>)}
      </ul>
    </div>
  );
}



export default NavBar;