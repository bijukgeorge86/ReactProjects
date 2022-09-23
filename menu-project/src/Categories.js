import React from 'react';

const Categories = ({ categories, filterItems }) => {
    return (
        <div className="btn-container">
            {categories.map((category, index) => {
                return (
                    <button
                        type="button"
                        className="filter-btn"
                        key={index}
                        onClick={() => filterItems(category)}
                    >
                        {category}
                    </button>
                );
            })}
            {/* Manual Adding below and commenting and making dynamic
            <button
                className="filter-btn"
                onClick={() => filterItems('breakfast')}
            >
                Breakfast
            </button>
            <button className="filter-btn" onClick={() => filterItems('all')}>
                All
            </button> */}
        </div>
    );
};

export default Categories;

// import React from 'react';

// const Categories = ({ categories, filterItems }) => {
//   return (
//     <div className="btn-container">
//       {categories.map((category, index) => {
//         return (
//           <button
//             type="button"
//             className="filter-btn"
//             key={index}
//             onClick={() => filterItems(category)}
//           >
//             {category}
//           </button>
//         );
//       })}
//     </div>
//   );
// };

// export default Categories;
