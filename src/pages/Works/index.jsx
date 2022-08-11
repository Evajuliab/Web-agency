import { Routes, Route } from 'react-router-dom';
import Studycase from './SutdyCase';
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import works from '../../data/works'
import './works.css'

const Works = () => {
    const { name } = useParams();
    return ( 
        <div className = 'body'>
    <h1>Au fil des années, nous avons pu accompagner les meilleurs.</h1>

    <h3>Découvrez pas à pas comment nous avons été présents pour lancer vos marques préférées.
</h3>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam atque eaque reprehenderit sapiente! Esse nisi aperiam dicta molestiae praesentium id et ea, hic placeat ex ab ipsum fugit voluptatem. Autem quod in dignissimos vel libero eum, rerum natus deserunt fugit ducimus incidunt id distinctio. Quas explicabo libero vero natus nostrum.
    </p>

<h2> Nos projets </h2>
<div className = 'project'>

  



    {works.map((item) => 
           
           
         <div className = 'card'>  <Link className = 'link' to= {`${item.name}`}> {item.name}
            </Link> </div>
    
           )}
           
<Routes>
<Route path="/works/:work" element = {<Studycase />} />
</Routes>

         
</div>
    </div>
    
    )
    };
export default Works;