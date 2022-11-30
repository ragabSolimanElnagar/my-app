import { connect } from 'react-redux';
import { Card } from './Card';
import styles from '../../../styles/Home.module.css'

const SearchResult = ({ data }: any) => {

    const result = data.data.items?.map((item: any) => {
        return (
            <Card
                avatar_url={item.avatar_url}
                name={item.name}
                score={item.score}
                site_admin={item.site_admin}
                type={item.type}
                key={item.id}
            />
        )
    })

    return (
        <div className={styles.searchResult}>
            {result}
        </div>
    )
}

const mapStateToProps = (state: any) => {
    return {
        data: state.data
    }
}


export default connect(mapStateToProps)(SearchResult) 
