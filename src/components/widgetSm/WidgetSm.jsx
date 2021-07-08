import { Visibility } from '@material-ui/icons';
import './widgetSm.css';

export default function WidgetSm() {
    return (
      <div className='widgetSm'>
        <span className='widgetSmTitle'>New Memebers</span>
        <ul className='widgetSmList'>
          <li className='widgetSmListItem'>
            <img
              src='https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
              alt='woman'
              className='widgetSmImg'
            />
            <div className="widgetSmUser">
                <span className="widgetSmUsername">Anna Keller</span>
                <span className="widgetSmUserTitle">Software Engineer</span>
            </div>
            <button className="widgetSmButton">
                <Visibility />
                Display
            </button>
          </li>
          <li className='widgetSmListItem'>
            <img
              src='https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
              alt='woman'
              className='widgetSmImg'
            />
            <div className="widgetSmUser">
                <span className="widgetSmUsername">Anna Keller</span>
                <span className="widgetSmUserTitle">Software Engineer</span>
            </div>
            <button className="widgetSmButton">
                <Visibility />
                Display
            </button>
          </li>
          <li className='widgetSmListItem'>
            <img
              src='https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
              alt='woman'
              className='widgetSmImg'
            />
            <div className="widgetSmUser">
                <span className="widgetSmUsername">Anna Keller</span>
                <span className="widgetSmUserTitle">Software Engineer</span>
            </div>
            <button className="widgetSmButton">
                <Visibility />
                Display
            </button>
          </li>
          <li className='widgetSmListItem'>
            <img
              src='https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
              alt='woman'
              className='widgetSmImg'
            />
            <div className="widgetSmUser">
                <span className="widgetSmUsername">Anna Keller</span>
                <span className="widgetSmUserTitle">Software Engineer</span>
            </div>
            <button className="widgetSmButton">
                <Visibility />
                Display
            </button>
          </li>
          <li className='widgetSmListItem'>
            <img
              src='https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
              alt='woman'
              className='widgetSmImg'
            />
            <div className="widgetSmUser">
                <span className="widgetSmUsername">Anna Keller</span>
                <span className="widgetSmUserTitle">Software Engineer</span>
            </div>
            <button className="widgetSmButton">
                <Visibility className='widgetSmIcon' />
                Display
            </button>
          </li>
        </ul>
      </div>
    );
}
