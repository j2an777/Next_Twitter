import SearchForm from '../_component/_searchForm/SearchForm';
import Trend from '../_component/_trend/Trend';
import style from './explore.module.css';

const Explore = () => {
    return (
        <main className={style.main}>
            <div className={style.formZone}>
                <SearchForm />
            </div>
            <div className={style.trend}>
                <h3>나를 위한 트렌드</h3>
                <Trend />
                <Trend />
                <Trend />
                <Trend />
                <Trend />
                <Trend />
                <Trend />
            </div>
        </main>
    )
}

export default Explore;