import BackButton from '../_component/_backButton/BackButton';
import PostItem from '../_component/_postItem/PostItem';
import SearchForm from '../_component/_searchForm/SearchForm';
import SearchResult from './_component/_searchResult/SearchResult';
import Tab from './_component/_tab/Tab';
import style from './search.module.css';

type SearchProps = {
  searchParams: {
    q: string,
    f?: string,
    pf?: string,
  };
}

const Search = ({ searchParams }: SearchProps) => {
  return (
    <main className={style.main}>
      <div className={style.searchTop}>
        <div className={style.searchZone}>
          <div className={style.buttonZone}>
            <BackButton />
          </div>
          <div className={style.formZone}>
            <SearchForm q={searchParams.q}/>
          </div>
        </div>
        <Tab />
      </div>
      <div className={style.list}>
        <SearchResult searchParams={searchParams} />
      </div>
    </main>
  )
}

export default Search