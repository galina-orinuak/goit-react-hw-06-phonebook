import { Watch } from  'react-loader-spinner';
import styles from './Loder.module.css'

export const Loader = () => {
    return <div className={styles.loader}>
        <Watch
          height="100"
          width="100"
          radius="48"
          color="#dfdf49"
          ariaLabel="watch-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={false}        />
    </div>
}