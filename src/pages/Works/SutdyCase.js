import works from '../../data/works'
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';

const Studycase = () => {
   
    const { work } = useParams();
    const [currentCase, setCurrentCase] = useState([])

    useEffect(() => {
        const foundCase = works.find((book) => book.name === work);
        setCurrentCase(foundCase);
      }, [work])
      
      console.log(work)
    
    
    return (
        
        <div className = 'body'>

        
        <h2>Projet {work}</h2>
{console.log(currentCase.title)}
 <p>{currentCase.title}</p>
  
       <p> {currentCase.description}</p> 
        
    
       
        </div>
    )
}


        

export default Studycase