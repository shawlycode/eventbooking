import "./fancyButton.css";

const FancyButton = () => {
  return (
    <div className="fancyBtn">
      <a class="fancy" href="/register">
        <span class="top-key"></span>
        <span class="text">Register</span>
        <span class="bottom-key-1"></span>
        <span class="bottom-key-2"></span>
      </a>
      <a class="fancy" href="/signin">
        <span class="top-key"></span>
        <span class="text">Sign In</span>
        <span class="bottom-key-1"></span>
        <span class="bottom-key-2"></span>
      </a>
    </div>
  );
};

export default FancyButton;
