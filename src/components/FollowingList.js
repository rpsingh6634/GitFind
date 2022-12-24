const FollowingList = ({data}) => {
    return (
        <div className="card following-list">
          <h2>Following List</h2>
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th colSpan={2}>Name</th>
              </tr>
            </thead>
            <tbody>
              {data.map((elem, idx) =>{
                return(
                  <tr>
                    <td>{idx + 1}</td>
                    <td>
                      <img src={elem.avatar_url} alt="Profile"/>
                    </td>
                    <td>
                      <a href={elem.html_url} target="_blank" rel="noreferrer">{elem.login}
                      </a>
                    </td>
                  </tr>
                );
               })}
            </tbody>
          </table>
        </div>
        
    )
}

export default FollowingList;
