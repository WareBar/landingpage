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
          name="STUDENT 1"
          author="Carl Menard"
        />  

        <Card 
          name="STUDENT 1"
          author="John Benedict"
        />

        <Card
          name="STUDENT 1"
          author="Karl Domanais"
        />         

      </div>




    </div>
  );
}

export default Hero;