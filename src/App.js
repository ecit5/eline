import './App.css';

function App() {
  return (  
      
    <div className="App">
      
      <div className='app-inner-container'>

        <div className='cards-container'>
              <div className='card'>
                <div className='card-guest'>
                  guest
                </div>
                <div className='card-topic'>
                  topic
                </div>
                <button className='delete-card'>
                
                </button>          
              </div>
        </div>


        <div className='tools-side'>


          <div className='form'>
            <input className='get-name'>

            </input>
            <input className='get-topic'>

            </input>
            <button className='add-card'>

            </button>
          </div>


          <div className='history-container'>
            <div className='history-label'>
              history
            </div>
            <div className='cards-history-container'>
            <div className='card-history'>
                <div className='card-guest'>
                  guesthistory
                </div>
                <div className='cardhistory-topic'>
                  topichistory
                </div>
                <button className='delete-cardhistory'>
                
                </button>          
              </div>
            </div>
          </div>
        </div>



      </div>

    </div>  
  );
}

export default App;
