import React from 'react';
import './DescriptionBox.css';

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur est eveniet amet doloremque necessitatibus laboriosam atque quae, libero quas? Veniam iure officia doloremque impedit adipisci nesciunt vel rerum! Pariatur, libero.</p>
        <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate nobis architecto molestiae, omnis laudantium nostrum quia modi aliquam porro. Sit fugiat voluptatibus at maxime exercitationem porro modi magnam molestiae natus.</p>
      </div>
    </div>
  )
}

export default DescriptionBox;
