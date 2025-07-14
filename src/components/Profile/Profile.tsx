export default function Profile() {
  const profilePicture = "../../assets/profile_pic.png"
  return (
    <>
      <img id="selfie" src={profilePicture} alt="Gerardo Selfie"/>
      <p><strong>Gerardo Lopez Jr.</strong></p>
      <p><em>Bachelors Mathematics</em></p>
      <p><em>Minor in Computer Science</em></p>
      <p><em>University of California, Irvine</em></p>
      <p className="silent">gjlopez2@uci.edu</p>
    </>
  );
}