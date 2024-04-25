const Searcher = ({searchChange}) => {
    return ( <div className='pa2 bg-lightest-blue'>
        <input
            className='ba b--blue bg-light-green pa3 br3 w-20'
            type='search'
            placeholder='search contacts'
            onChange={searchChange}
        />
    </div> );
};
    
export default Searcher;
