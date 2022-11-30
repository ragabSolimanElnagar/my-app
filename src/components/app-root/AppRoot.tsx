import SearchForm from "../search-form/SearchForm"
import SearchResult from "../search-result/SearchResult"
import styles from '../../styles/Home.module.css'
import { connect } from "react-redux"

const AppRoot = ({ data }: any) => {
    return (
        <div className={`${data.data.items?.length > 0 ? styles.dataResult : styles.appContainer} container mx-auto`}>
            <SearchForm />
            <SearchResult />
        </div>
    )
}

const mapStateToProps = (state: any) => {
    return {
        data: state.data
    }
}


export default connect(mapStateToProps)(AppRoot) 
