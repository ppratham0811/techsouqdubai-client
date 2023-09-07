import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  getAllProducts,
  getChildCategories,
  getNavBarLink,
} from '../../actions';
import Products from '../../Components/Dashboard/Products/Products';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import ErrorPage from '../ErrorPage/ErrorPage';
import Loading from '../../utils/Loading';

const GroupPage = ({ products, relations }) => {
  const { groupID } = useParams();
  const [groupData, setGroupData] = useState([]);
  const [navlinkexits, setExists] = useState(true);
  const [navlink, setNavLink] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      await getNavBarLink(groupID).then((response) => {
        if(response?.categories?.length < 1) setExists(false);
        setNavLink(response);
        const cats = response?.categories;
        var data = [];
        if (cats) {
          cats.map((cat) => {
            data.push(cat);
            const related = relations.filter(
              (relation) => relation.parent.$id === cat.$id
            );
            related.map((x) => data.push(x?.child));
          });
        }

        setGroupData(data);
      });
    };
    if (groupID) {
      fetchDetails();
    }
  }, [groupID]);


  if (!navlinkexits) {
    return <ErrorPage />;
  } else if (groupData.length<1) {
    return <Loading />;
  }


  return (
    <div>
      <Navbar />
    <p className='px-3 md:px-8 text-3xl font-semibold py-3'>{navlink?.name}</p>
      {groupData &&
        groupData.map((cat, idx) => {
          let relevantProducts = [];
          for (let prod of products) {
            if (prod.category.$id === cat.$id) {
              relevantProducts.push(prod);
            }
          }

          if (relevantProducts.length)
            return <Products title={cat.name} products={relevantProducts} />;
        })}
        <Footer/>
    </div>
  );
};

export default GroupPage;
