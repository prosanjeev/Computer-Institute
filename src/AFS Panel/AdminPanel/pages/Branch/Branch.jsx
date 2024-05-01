// BranchPage.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBranches, selectBranches } from '../../../redux/admin/branchSlice';

const BranchPage = () => {
  const branches = useSelector(selectBranches);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBranches());
  }, [dispatch]);

  return (
    <div>
      {branches.map(branch => (
        <div key={branch.id}>
          <p>{branch.centername}</p>
          {/* Add update and delete buttons */}
        </div>
      ))}
    </div>
  );
};

export default BranchPage;
