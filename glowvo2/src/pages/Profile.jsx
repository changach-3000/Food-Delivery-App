import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { ReviewContext } from "../context/ReviewContext";
import { Link } from "react-router-dom";

function Profile() {
  const { currentuser } = useContext(AuthContext);
  const { deleteReview,updateReview } = useContext(ReviewContext);

  return (
    <div className="profile-page row py-5 px-4">
      <div className="col-md-5 mx-auto">
        <div className="bg-white shadow rounded overflow-hidden">
          <div className="px-4 pt-0 pb-4 cover">
            <div className="media align-items-end profile-head">
              <div className="profile mr-3">
                <img
                  src={currentuser && currentuser.profile_picture}
                  alt="..."
                  width="130"
                  className="rounded mb-2 img-thumbnail"
                />
              </div>{" "}
              <div className="media-body">
                <h4 className="mt-0">{currentuser && currentuser.username}</h4>
                <p className="mt-0">{currentuser && currentuser.email}</p>
              </div>
            </div>
          </div>
          <div className="bg-light p-4 d-flex justify-content-end text-center"></div>
          <div className="py-4 px-4">
            <div className="d-flex align-items-center justify-content-between mb-3">
              <h5 className="mb-0">My Reviews</h5>
            </div>
            <div className="row">
              <div className="col-lg-6 pl-lg-1">
                {currentuser &&
                  currentuser.reviews &&
                  currentuser.reviews.map((review) => (
                    <div key={review.id}>
                      <p>
                        {review.comment}
                        <br />
                        {review.food_name}
                      </p>
                      <div>
                       <Link to="/updatereview"><button className="btn btn-outline-warning me-2" >edit</button></Link> 
                        <button className="btn btn-outline-danger" onClick={() => {deleteReview(review.id);}}>delete</button>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;