import Card1 from "./Card1";
import Image1 from '../components/b1.jpg';
import Image2 from '../components/b2.jpg';
import Image3 from '../components/b3.jpg';
import Image4 from '../components/b4.jpeg';
import Image5 from '../components/b5.jpeg';
import Image6 from '../components/b6.jpg';
import Image7 from '../components/b7.jpeg';
import Image8 from '../components/b8.jpg';

function Gallery(){
    return(
        <div>
        <div style={{display:'flex'}}>
            <Card1 Image={Image1}/>
            <Card1 Image={Image2}/>
            <Card1 Image={Image3}/>
            <Card1 Image={Image4}/>

        </div>
        <div style={{display:'flex'}}>
            <Card1 Image={Image5}/>
            <Card1 Image={Image6}/>
            <Card1 Image={Image7}/>
            <Card1 Image={Image8}/>

        </div>
        </div>
        

    );
}
export default Gallery;