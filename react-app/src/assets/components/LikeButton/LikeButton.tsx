import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useState } from "react";

interface Props {
  onClick: () => void;
}
const LikeButton = ({ onClick }: Props) => {
  const [isLike, setIsLike] = useState(true);
  const toggle = () => {
    setIsLike(!isLike);
    onClick();
  };
  return (
    <>
      {isLike ? (
        <AiFillHeart color="#f00" size={30} onClick={toggle} />
      ) : (
        <AiOutlineHeart size={30} onClick={toggle} />
      )}
    </>
  );
};

export default LikeButton;
