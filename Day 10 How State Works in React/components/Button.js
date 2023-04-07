
const Button = ({ imageUrl, title,clickHandler }) => {
  return (
    <button>
      <img src={imageUrl} alt="Button" title={title} onClick={clickHandler}/>
    </button>
  );
};

export default Button;
