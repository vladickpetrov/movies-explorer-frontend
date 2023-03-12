import "./MoreButton.css";

function MoreButton({ loadMorePictures, buttonIsShowed }) {
  return (
    <div className={buttonIsShowed ? "more-button" : "more-button_hidden"}>
      <button
        className="more-button__button clearbutton"
        onClick={loadMorePictures}
      >
        Ещё
      </button>
    </div>
  );
}

export default MoreButton;
