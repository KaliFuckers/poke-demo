import { useState } from 'react';
import { FiHeart } from 'react-icons/fi';

interface Props {
  onClick: () => void;
}

export default function LikeButton({ onClick }: Props) {
  const [hover, setHover] = useState(false);
  const [liked, setliked] = useState(false);
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/mouse-events-have-key-events
    <div
      role="button"
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
      tabIndex={0}
      onClick={() => {
        setliked(!liked);
        onClick();
      }}
      className="like-container"
    >
      <FiHeart
        fill={liked ? '#dc2626' : 'transparent'}
        style={liked ? { border: 'none' } : {}}
        color={liked && !hover ? 'transparent' : !liked && hover ? 'white' : ''}
      />
    </div>
  );
}

// hover: animate - heartBeat;
