import React, { useState, useEffect, useMemo, useCallback, Dispatch } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useQuery } from '../../hooks/useQuery';
import SearchInput from '../UI/SearchInput';
import { searchItem } from '../../redux/actions/items';
import debounce from 'lodash.debounce';

type HeaderProps = {
  searchItem(query: string): void
}

const Header: React.FC<HeaderProps> = ({ 
  searchItem,
}) => {
  const history = useHistory(); 
  const query = useQuery();
  const [item, setItemName] = useState('');

  useEffect(() => {
    setTimeout(() => {
      onChange(query.get('search'))
    })
  }, [])

  const onChange = (value: string | null) => {
    setItemName(value ? value : '');
    if (value) {
      debouncedSearch(value);
    }
  }

  const search = useCallback((value: string) => {
    searchItem(value);
    history.push(`/items?search=${value}`)
  }, [searchItem])

  const debouncedSearch = useMemo(() => debounce(search, 1000), [search]); 

  return (
    <header className="header">
      <Link to="/">
        <img 
          src="https://i.ibb.co/Yy5y9gB/logo.png" 
          alt="Logo de mercadolibre" 
          className="header__logo"
        />
      </Link>
      <SearchInput
        value={item ? item : ''}
        onChange={onChange}
      />
    </header>
  )
};

// Map Redux actions with dispatch funcion to component props
const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  searchItem(query: string) {
    dispatch(searchItem({ query }))
  }
});

export default connect(null, mapDispatchToProps)(Header);