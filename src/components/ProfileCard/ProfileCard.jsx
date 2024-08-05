import "./ProfileCard.css";
import profilePicture from "../../assets/images/image-victor.jpg"

export default function ProfileCard() {
  const user = {
    name: "Victor Crest",
    age: 26,
    location: "London",
    profilePicture: profilePicture,
    followers: "80K",
    likes: "803K",
    photos: "1.4K",
  };

  return (
    <div className="profile-card">
      <div className="card-top">
        <img
          src={user.profilePicture}
          alt={user.name}
          className="profile-picture"
        />
      </div>

      <div className="profile-info">
        <h1 className="name">
          {user.name} <span className="age">{user.age}</span>
        </h1>
        <h2 className="location">{user.location}</h2>

        <div className="stats">
          <div className="stat">
            <span className="value">{user.followers}</span>
            <span className="label">Followers</span>
          </div>
          <div className="stat">
            <span className="value">{user.likes}</span>
            <span className="label">Likes</span>
          </div>
          <div className="stat">
            <span className="value">{user.photos}</span>
            <span className="label">Photos</span>
          </div>
        </div>
      </div>
    </div>
  );
}
