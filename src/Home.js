import './App.css';
import Layout from './Layout';
import Weather from './Weather';



function Home() {

    const deafultCity = "Tel Aviv";
    let defaultKey = 215854;
  
    
 

  return (
    
 

    <Layout>
                
              <Weather defaultKey={defaultKey} deafultCity={deafultCity}/>
              
    </Layout>
    
    
  );
}

export default Home;
