import Card1 from "./Card1";
import Image1 from '../components/b1.jpeg';
import Image2 from '../components/b2.jpeg';
import Image3 from '../components/b3.jpeg';
import Image4 from '../components/b4.jpeg';
import Image5 from '../components/b5.jpeg';
import Image6 from '../components/b6.jpeg';
import Image7 from '../components/b7.jpeg';
import Image8 from '../components/b8.jpeg';
import Image9 from '../components/b9.jpeg';
import Image10 from '../components/b10.jpeg';
import Image11 from '../components/b11.jpeg';
import Image12 from '../components/b12.jpeg';
import Image13 from '../components/b13.jpeg';
import Image14 from '../components/b14.jpeg';
import Image15 from '../components/b15.jpeg';
import './Gallery.css';
import CustomNavBar from "./CustomNavBar";

function Gallery(){
    return(
        <div>
            <header>
                <CustomNavBar/>
            </header>
            <br></br>
            <br></br>
            <br></br>
        <div style={{display:'flex'}}>
            <div style={{marginRight:150,marginLeft:150}}>
            <Card1 Image={Image1} />

            </div>
            <div style={{marginRight:150}}>
            <Card1 Image={Image2}/>
                
            </div>
            <div style={{marginRight:150}}>
            <Card1 Image={Image3}/>
                
            </div>
        </div>
        <br></br>
        <br></br>
        <div style={{display:'flex'}}>
            <div style={{marginRight:150,marginLeft:150}}>
            <Card1 Image={Image4} />

            </div>
            <div style={{marginRight:150}}>
            <Card1 Image={Image5}/>
                
            </div>
            <div style={{marginRight:150}}>
            <Card1 Image={Image6}/>
                
            </div>
        </div>
        <br></br>
        <br></br>
        <div style={{display:'flex'}}>
            <div style={{marginRight:150,marginLeft:150}}>
            <Card1 Image={Image7} />

            </div>
            <div style={{marginRight:150}}>
            <Card1 Image={Image8}/>
                
            </div>
            <div style={{marginRight:150}}>
            <Card1 Image={Image9}/>
                
            </div>
        </div>
        <br></br>
        <br></br>
        <div style={{display:'flex'}}>
            <div style={{marginRight:150,marginLeft:150}}>
            <Card1 Image={Image10} />

            </div>
            <div style={{marginRight:150}}>
            <Card1 Image={Image11}/>
                
            </div>
            <div style={{marginRight:150}}>
            <Card1 Image={Image12}/>
                
            </div>
        </div>
        <br></br>
        <br></br>
        <div style={{display:'flex'}}>
            <div style={{marginRight:150,marginLeft:150}}>
            <Card1 Image={Image13} />

            </div>
            <div style={{marginRight:150}}>
            <Card1 Image={Image14}/>
                
            </div>
            <div style={{marginRight:150}}>
            <Card1 Image={Image15}/>
                
            </div>
            <br></br>
        <br></br>
        <div style={{display:'flex'}}>
            <div style={{marginRight:150,marginLeft:150}}>
            <Card1 Image={Image4} />

            </div>
            <div style={{marginRight:150}}>
            <Card1 Image={Image5}/>
                
            </div>
            <div style={{marginRight:150}}>
            <Card1 Image={Image6}/>
                
            </div>
        </div>
        </div>


        </div>
            

        

    );
}
export default Gallery;