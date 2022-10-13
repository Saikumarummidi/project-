import '../App.css';
import React from 'react'
 
const News = ({ news }) => {
    return (
        <div >
            <center><h1><b>Latest News</b></h1></center>
            <div>
                {news.map((news) => (
                  <div>
                     <div>
                        <div>
                            <h5>{news.title}</h5>
                            <h6>{news.author}</h6>
                            <p>{news.description}</p><br/>
                            <p>{news.source}</p>
                            <p>{news.publishedAt}</p>
                        </div>
                     </div>
                  </div>
                ))}
            </div>
        </div>
    )
};
 
export default News;