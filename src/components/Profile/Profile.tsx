import profilePicture from "../../assets/profile_pic.png";

export default function Profile() {
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