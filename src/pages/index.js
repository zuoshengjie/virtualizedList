import { jsx as _jsx } from "react/jsx-runtime";
import { useState } from 'react';
import styles from './index.less';
const data = Array.from({ length: 1000000 }, (_, i) => ({
    id: i,
    content: `data ${i + 1}`,
}));
export default function IndexPage() {
    const [showListData, setShowListData] = useState(data.slice(0, 20));
    const [top, setTop] = useState(0);
    const handleListScroll = (e) => {
        const scrollTop = e.target.scrollTop;
        const start = scrollTop / 20;
        setTop(scrollTop);
        console.log(start);
        setShowListData(data.slice(Math.floor(start), Math.floor(start + 40)));
    };
    return (_jsx("div", { children: _jsx("div", Object.assign({ className: styles.list, onScroll: handleListScroll }, { children: _jsx("div", Object.assign({ style: { height: data.length * 20 - top, marginTop: top } }, { children: showListData.map(({ id, content }) => (_jsx("div", Object.assign({ className: styles.listItem, style: { height: 20 } }, { children: content }), id))) }), void 0) }), void 0) }, void 0));
}
//# sourceMappingURL=index.js.map