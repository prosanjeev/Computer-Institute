import "./EventBox.css";
import Event from "../../../components/PagesComponents/Event/Event";

function EventBox() {
  return (
    <div className="EventBox-1">
      <div className="EventBox-2">
        <Event text="Recently Join Centres"  />
        <Event text="Recently Join Student" />
        <Event text="News & Events" />
      </div>
    </div>
  );
}

export default EventBox;
