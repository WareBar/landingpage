import './Card.css';




function Card(props){
	return (

		<div className='Card'>
			<h1>{props.name}</h1>
			<p>See More <a href="#">info</a></p>

			<hr />
			<pre>{props.author}</pre>
		</div>

		);
}

export default Card;