// imports
import DropdownSelect from '../dropdownSelect/dropdownSelect';

// style imports
import styles from './quickFiltersRow.module.css';

function QuickFiltersRow(){

    return(
        <div className={styles.container}>
            <DropdownSelect
            placeholder='Location'
            >
                <option value="usa">United States</option>
                <option value="can">Canada</option>
                <option value="oth">Other</option>
            </DropdownSelect>
            <DropdownSelect
            placeholder='Date Posted'
            >
                <option value={1}>1 Day</option>
                <option value={2}>2 Days</option>
                <option value={7}>7 Days</option>
                <option value={14}>14 Days</option>
                <option value={21}>21 Days</option>
            </DropdownSelect>
            <DropdownSelect
            placeholder='Remote'
            >
                <option value="rem">Fully Remote</option>
                <option value="hyb">Hybrid</option>
                <option value="per">In Person</option>
            </DropdownSelect>
            <DropdownSelect
            placeholder='Salary'
            >
                <option value="30">$30k+</option>
                <option value="50">$50k+</option>
                <option value="75">$75k+</option>
                <option value="100">$100k+</option>
                <option value="125">$125k+</option>
            </DropdownSelect>
            <DropdownSelect
            placeholder='Experience'
            >
                <option value="1">Entry Level</option>
                <option value="2">Junior</option>
                <option value="3">Intermediate</option>
                <option value="4">Senior</option>
            </DropdownSelect>
        </div>
    )

}

export default QuickFiltersRow