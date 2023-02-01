import "./MoreButton.css";

function MoreButton({ loadMorePictures }) {
  return (
    <div className="more-button">
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
