import styles from '../../../styles/Home.module.css'

export interface CardProps {
    avatar_url: string;
    score: string;
    type: string;
    name: string;
    site_admin: boolean
}

export const Card = (props: CardProps) => {
    const { avatar_url, name, score, site_admin, type } = props;

    const isAdmin=(value:boolean)=>{
        if(value){
            return 'Yes'
        }
        else return 'No'
    }
    return (
        <div className={styles.card}>
            <img className={styles.img} src={avatar_url} alt=''/>
            <div>score:{score}</div>
            <div>site_admin:{isAdmin(site_admin)}</div>
            <div>type:{type}</div>
        </div>
    )
}