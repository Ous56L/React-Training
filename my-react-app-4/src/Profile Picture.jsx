
function ProfilePicture(){

    const imagUrl = './src/assets/G-ALMIGHTY.jpg';

    const handleClick = (e) => e.target.style.display = "none";

    return(<img onClick={(e) => handleClick(e)} src={imagUrl}></img>);
}
export default ProfilePicture