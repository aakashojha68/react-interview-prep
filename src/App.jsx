import { Provider } from "react-redux";
import CursorTrackingWithThrottle from "./01-cursor-tracking-with-throttle/CursorTrackingWithThrottle";
import Chips from "./02-chips/Chips";
import DynamicGreetingApp from "./03-dynamic-greeting-app/DynamicGreetingApp";
import SideMenu from "./04-sidebar-menu/SideMenu";
import ProgressBar from "./05-progress-bar/ProgressBar";
import RenderAccordians from "./06-accordian/Accordian";
import Accordion from "./06-accordian/Accordian";
import TabSwitcher from "./07-tab-switcher/TabSwitcher";
import BlogPosts from "./08-blog-post/BlogPost";
import DebounceInputSearch from "./09-debounce-input-search/DebounceInputSearch";
// import MultiselectDropdown from "./10-multiselect-dropdown/MultiselectDropdown";
import InfiniteScroll from "./11-infinite-scroll-list/InfiniteScroll";
import Question from "./question/Question";
import Redux from "./12-redux/Redux";
import { store } from "./12-redux/store/store";

function App() {
  return (
    <Provider store={store}>
      <Redux />
    </Provider>
  );
}

export default App;
