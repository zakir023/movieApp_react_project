
import styles from "./Navbar1.module.css"

function Navbar1(props) {
      const { cartCount } = props;
      return (
            <>
                  <div className={styles.nav}>
                        <div className={styles.title}>Movie-App</div>
                        <div className={styles.CartIconContainer}>
                              <img className={styles.CartImg} alt="cart icon " src="https://cdn-icons-png.flaticon.com/128/891/891462.png" />
                              <div className={styles.CartCount} color="yellow" show="true"> {cartCount} </div>
                        </div>
                  </div>
            </>
      )
}


export default Navbar1;