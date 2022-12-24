import { useRef } from 'react';

const Search = ({searchedUsername, isSuccessful}) =>{

  const inputRef = useRef();
  const searched = e => {
    e.preventDefault();
    const searchedKeyword = (inputRef.current.value);
    searchedUsername(searchedKeyword);
  }
    return(
        <div className="card search">
          <h1>Search For GitHub Username</h1>
          <form onSubmit={searched}>
          <input type="search" ref={inputRef} 
            className={isSuccessful === false ? "incorrect-input" : ""}
          />
          <button>Search</button>
          </form>
          {isSuccessful === false ? <p className="incorrect">Invalid Username</p> : false}
        </div>
    )
}

export default Search;