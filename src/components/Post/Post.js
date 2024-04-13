import React, { useState } from 'react';
import "../Post/post.css";
import sample from "../../assests/soon.png";

const Post = (props) => {
    const [liked, setLiked] = useState(false);
    const [comment, setcomment] = useState(false);
    const [saved, setsave]= useState(false);


    const toggleLike = () => {
        setLiked(!liked);
    };

    const toggleComment = () => {
        setcomment(!comment);
    }

    const toggleSave = () => {
        setsave(!saved);
    }

    return (
        <div className="post">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
            <div className="post-head">
                <div className="profile">
                    <img src={sample} className="profile-img"></img>
                    <a href="#">Tanay Naik</a>
                </div>
                <div className="follow-btn">
                    <button>Follow</button>
                </div>
            </div>

            <div className="post-body">
                <img src={sample} className="post-img"></img>
            </div>

            <div className="inter-section">
                {liked ? (
                    <i class="fa-solid fa-heart" style={{ color: "#63E6BE" }} onClick={toggleLike}></i>
                ) : (
                    <i className="fa-regular fa-heart" onClick={toggleLike}></i>
                )}

                {comment ? (
                    <i class="fa-solid fa-comment" onClick={toggleComment}></i>
                    
                ) : (
                    <i class="fa-regular fa-comment" onClick={toggleComment}></i>
                )
                }


                {saved ? (
                    <i class="fa-solid fa-bookmark" onClick={toggleSave}></i>
                    
                ) : (
                    <i class="fa-regular fa-bookmark"  onClick={toggleSave}></i>
                )
                }
            </div>
        </div>
    );
}

export default Post;
