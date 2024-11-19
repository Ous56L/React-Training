import profilePic from './assets/G-ALMIGHTY.jpg'

function Card(){

    return(
        <div className="card">
            <img className="card-image" src={profilePic} alt="profile picture" />
            <h2 className='card-title'>YHWACH</h2>
            <p className='card-text'>The King of Cunicy AKA (G-ALMIGHTY) The Strongest And The Greatest</p>
        </div>
    );
}

export default Card