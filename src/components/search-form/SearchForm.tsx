/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { ChangeEvent } from 'react'
import { connect } from 'react-redux';
import { fetchData, resetStore } from '../../utils/redux/action';
import styles from '../../styles/Home.module.css'

const SearchForm = ({ fetchData, resetStore }: any) => {
    const [searchValue, setSearchValue] = React.useState('');
    const [selectedValue, setSelectedValue] = React.useState('users');

    const handelChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value)
        if (event.target.value.length > 2) {
            fetchData(selectedValue, event.target.value)
        }
        else {
            resetStore();
        }
    }

    const handelSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedValue(event.target.value)
    }

    useEffect(() => {
        if (searchValue.length > 2) {
            fetchData(selectedValue, searchValue)
        }
    }, [selectedValue])

    return (
        <div className={styles.form}>
            <input onChange={(event) => handelChange(event)} type="text" id="first_name" className={`${styles.input} bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-6/12 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`} placeholder="Start typing to search" required />
            <div className="relative lg:max-w-sm">
                <select onChange={(event) => handelSelect(event)} className="w-300 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
                    <option value='users'>Users</option>
                    <option value='issues'>issues</option>
                    <option value='repositories'>repositories</option>
                </select>
            </div>
        </div>
    )
}
const mapStateToProps = (state: any) => {
    return {
        data: state.data
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        fetchData: (selectedValue: string, searchValue: string) => dispatch(fetchData(selectedValue, searchValue)),
        resetStore: () => dispatch(resetStore())

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm) 