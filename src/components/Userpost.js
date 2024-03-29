import React from 'react'
import './style/Userpost.css'

const Userpost = (props) => {

const {post} = props;

  return (
    <div>
             <div className='Useritem-main-container'>
            <div className="postitem-first-container">
                <div className="postitem-subfirst-container">
                                <ul>
                                    <li id='name'> <div className="circle"></div>{post.username}</li>
                                    {/* <li id='name'> <div className="circle"></div>r3d-slayer</li> */}
                                </ul>
                </div>

                <div className="postitem-subsecond-container">
                    <ul>
                        <li id='Title'>{post.title}</li>
                        {/* <li id='Title'>Backend Developer</li> */}
                        <li id='Description'>{post.description}</li>
                        {/* <li id='Description'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias autem, quod aperiam veritatis aspernatur saepe optio magnam libero tenetur asperiores quaerat doloribus labore eligendi blanditiis sapiente. Suscipit dolorem magni exercitationem, quas magnam nam obcaecati! Consectetur consequatur iusto ea explicabo vitae! Et mollitia delectus iste eveniet culpa doloribus qui est recusandae?</li> */}
                    </ul>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Userpost
