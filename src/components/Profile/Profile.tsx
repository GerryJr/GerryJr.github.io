import profilePicture from "../../assets/profile_pic.png";

export default function Profile() {
  return (
    <>
      <img id="selfie" src={profilePicture} alt="Gerardo Selfie"/>
      <p><strong>Gerardo Lopez Jr.</strong></p>
      <p><em>Bachelors Mathematics</em></p>
      <p><em>Emphasis in AI in Education</em></p>
      <p><em>University of California, Irvine</em></p>
      <p className="silent">gerardolopezjr1178@gmail.com</p>
    </>
  );
}