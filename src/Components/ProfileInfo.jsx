
function ProfileInfo() {
  return (
    <div className="profile-container">
      <img src="../Pictures/portal-img.jpg" alt="" className="profile-img" />
      <span className="name-span">Mantas Januška</span>
      <div>
        <div className="progress">
          <div
            className="progress-bar"
            role="progressbar"
            aria-label="Basic example"
            aria-valuenow="50"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>
    </div>
  );
}

export default ProfileInfo;
