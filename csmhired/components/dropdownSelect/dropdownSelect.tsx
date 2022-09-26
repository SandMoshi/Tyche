// import styles
import styles from './dropwdownSelect.module.css'


type Props = {
    placeholder?: string,
    children?: JSX.Element | JSX.Element[]
}

function DropdownSelect(props:Props){
    return(
        <select className={styles.dropdownSelect}>
            {props.placeholder && <option hidden selected disabled value="">{props.placeholder}</option>}
            {props.children}
        </select>
    )
}

export default DropdownSelect;