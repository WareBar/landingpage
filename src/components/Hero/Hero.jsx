import './Hero.css';
import Card from './Card/Card';




function Hero() {
  return (
    <div className="Hero">

      <p>This is Hero Section</p>

      <div className="Cards">

        <Card 
          name="STUDENT 1"
          author="Barry Adam"
        />

        <Card 
          name="STUDENT 2"
          author="Peter Paul"
        />  

        <Card 
          name="STUDENT 3"
          author="Carl Menard"
        />  

        <Card 
          name="STUDENT 4"
          author="John Benedict"
        />

        <Card
          name="STUDENT 5"
          author="Karl Domanais"
        />         

      </div>




    </div>
  );
}

export default Hero;