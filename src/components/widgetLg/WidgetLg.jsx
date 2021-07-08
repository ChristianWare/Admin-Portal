import "./widgetLg.css";

export default function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className='widgetLg'>
      <h3 className='widgetLgTitle'>Latest Transactions</h3>
      <table className='widgetLgTable'>
        <tr className='widgetLgTr'>
          <th className='widgetLgTh'>Customer</th>
          <th className='widgetLgTh'>Date</th>
          <th className='widgetLgTh'>Amount</th>
          <th className='widgetLgTh'>Status</th>
        </tr>
        <tr className='widgetLgTr'>
          <td className='widgetLgUser'>
            <img
              src='https://images.unsplash.com/photo-1573497491207-618cc224f243?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
              alt='womanii'
              className='widgetLgImg'
            />
            <span className='widgetLgName'>Susan Carol</span>
          </td>
          <td className='widgetLgDate'>June 2nd, 2021</td>
          <td className='widgetLgAmount'>$122</td>
          <td className='widgetLgStatus'>
            <Button type='Approved' />
          </td>
        </tr>
        <tr className='widgetLgTr'></tr>
        <tr className='widgetLgTr'>
          <td className='widgetLgUser'>
            <img
              src='https://images.unsplash.com/photo-1573497491207-618cc224f243?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
              alt='womanii'
              className='widgetLgImg'
            />
            <span className='widgetLgName'>Susan Carol</span>
          </td>
          <td className='widgetLgDate'>June 2nd, 2021</td>
          <td className='widgetLgAmount'>$122</td>
          <td className='widgetLgStatus'>
            <Button type='Declined' />
          </td>
        </tr>
        <tr className='widgetLgTr'></tr>
        <tr className='widgetLgTr'>
          <td className='widgetLgUser'>
            <img
              src='https://images.unsplash.com/photo-1573497491207-618cc224f243?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
              alt='womanii'
              className='widgetLgImg'
            />
            <span className='widgetLgName'>Susan Carol</span>
          </td>
          <td className='widgetLgDate'>June 2nd, 2021</td>
          <td className='widgetLgAmount'>$122</td>
          <td className='widgetLgStatus'>
            <Button type='Pending' />
          </td>
        </tr>
        <tr className='widgetLgTr'></tr>
        <tr className='widgetLgTr'>
          <td className='widgetLgUser'>
            <img
              src='https://images.unsplash.com/photo-1573497491207-618cc224f243?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
              alt='womanii'
              className='widgetLgImg'
            />
            <span className='widgetLgName'>Susan Carol</span>
          </td>
          <td className='widgetLgDate'>June 2nd, 2021</td>
          <td className='widgetLgAmount'>$122</td>
          <td className='widgetLgStatus'>
            <Button type='Approved' />
          </td>
        </tr>
      </table>
    </div>
  );
}
