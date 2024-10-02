//page goes to layout and is displayed from there
import Image from 'next/image';
import developerImage from '../data/developer-image.png';

export default function Home() {    
  return (
    <div className="parent">
      <div className="description">
          Hello, my name is Muhammad Uzair Hussain and I am a student at GIAIC. I am a web developer and this is my first next.js project. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga tenetur quam voluptates pariatur praesentium placeat natus quidem deserunt in esse.
      </div>
      <div className="image">
      <Image
          src={developerImage} 
          alt="Developer Image" 
          width={500} 
          height={500} 
        />
      </div>
    </div>
  );
}
