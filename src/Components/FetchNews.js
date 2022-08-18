import React ,{useState} from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';


const FetchNews = () => {

    const [news,setNews]=useState([]);

    const fetchNews=()=>{
        axios.get("https://newsapi.org/v2/everything?q=keyword&apiKey=cf4fada18c8941ecaef7c1dbf173469f")
        .then((response)=>{
            console.log(response);
           setNews(response.data.articles)
        })
    }
  return (
    <>
    <div className="container my-3">
      <div className="row">
        <div className="col-4">
          <button className='btn btn-primary' onClick={fetchNews}>FetchNews</button>
        </div>
      </div>
    </div>

    <div className="container">
      <div className="row">
        {
          news.map((value,index) => {
            return (
              <div key={index} className="col-4">
                <div className="card" style={{ width: "18rem" }}>
                  <img src={value.urlToImage} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{value.title}</h5>
                    <p className="card-text">{value.description}</p>
                    <a href="https://www.youtube.com/" className="btn btn-primary">Main</a>
                  </div>
                </div>
              </div>
            );
          })
        }
      </div>
    </div>
  </>
  )
}

export default FetchNews