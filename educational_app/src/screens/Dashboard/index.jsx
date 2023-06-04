import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '../../slices/category/categorySlice';
import { CategoryCard } from '../../components';
import avatar from '../../../public/image/Profile-image.png';
import './style.css';

function DashBoard() {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.auth);
  const { categories, loading, error } = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(fetchCategories()); // Dispatch the action creator to fetch categories
  }, [dispatch]);

  const uniqueCategories = categories ? [...new Set(categories.map((item) => item?.name))] : [];

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <div className='dashboard-container'>
        <div className='avatar'>
          <img className='avatar-img' src={avatar} alt='Profile image' />
        </div>
        <h1 className='dashboard-title' id='name'>
          Welcome {userInfo.name}
        </h1>

        <div className='dashboard-categories-container'>
          {uniqueCategories.map((name, idx) => {
            const categoryDecks = categories.filter((item) => item.name === name);
            if (categoryDecks.length > 0) {
              return <CategoryCard key={idx} name={name} />;
            }
            return null;
          })}
        </div>
      </div>
    </>
  );
}

export default DashBoard;

