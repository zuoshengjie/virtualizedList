import React, { useMemo, useState } from 'react';
import styles from './index.less';

const baseData = Array.from({ length: 100000 }, (_, i) => ({
  id: i,
  content: `data ${i + 1}`,
}));

const itemHeight = 30;

// 基于marginTop的虚拟滚动
// export default function IndexPage() {
//   const [showListData, setShowListData] = useState(data.slice(0, 20));
//   const [top, setTop] = useState(0);

//   const handleListScroll = (e: any) => {
//     const scrollTop = e.target.scrollTop;
//     const start = Math.max(Math.floor(scrollTop / itemHeight) - 5, 0);
//     const end = start + 20;
//     setTop(start * itemHeight);
//     setShowListData(data.slice(start, end));
//   };

//   return (
//     <div>
//       <div className={styles.list} onScroll={handleListScroll}>
//         <div style={{ height: data.length * itemHeight - top, marginTop: top }}>
//           {showListData.map(({ id, content }) => (
//             <div
//               className={styles.listItem}
//               key={id}
//               style={{ height: itemHeight }}
//             >
//               {content}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// 基于position定位虚拟滚动
export default function IndexPage() {
  const data = useMemo(() => {
    return baseData.map((item, index) => ({ ...item, index }));
  }, []);

  const [showListData, setShowListData] = useState(data.slice(0, 20));

  const handleListScroll = (e: any) => {
    const scrollTop = e.target.scrollTop;
    const start = Math.max(Math.floor(scrollTop / itemHeight) - 5, 0);
    const end = start + 20;
    setShowListData(data.slice(start, end));
  };

  return (
    <div>
      <div className={styles.list} onScroll={handleListScroll}>
        <div style={{ height: data.length * itemHeight, position: 'relative' }}>
          {showListData.map(({ id, content, index }) => (
            <div
              className={styles.listItem}
              key={id}
              style={{
                height: itemHeight,
                position: 'absolute',
                top: itemHeight * index,
                width: '100%',
              }}
            >
              {content}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
