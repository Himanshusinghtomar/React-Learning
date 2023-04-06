
const Button = ({ imageUrl, title }) => {
  return (
    <button>
      <img src={imageUrl} alt="Button" title={title} />
    </button>
  );
};

export default Button;
