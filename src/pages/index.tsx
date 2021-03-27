import React, { useState } from 'react';
import styles from './index.less';

const data = Array.from({ length: 1000000 }, (_, i) => ({
  id: i,
  content: `data ${i + 1}`,
}));

export default function IndexPage() {
  const [showListData, setShowListData] = useState(data.slice(0, 20));
  const [top, setTop] = useState(0);
  const handleListScroll = (e: any) => {
    const scrollTop = e.target.scrollTop;
    const start = scrollTop / 20;
    setTop(scrollTop);
    console.log(start);
    setShowListData(data.slice(Math.floor(start), Math.floor(start + 40)));
  };

  return (
    <div>
      <div className={styles.list} onScroll={handleListScroll}>
        <div style={{ height: data.length * 20 - top, marginTop: top }}>
          {showListData.map(({ id, content }) => (
            <div className={styles.listItem} key={id} style={{ height: 20 }}>
              {content}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
