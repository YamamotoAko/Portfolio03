import { useState } from 'react';
import WorkWrap from '../_workWrap/WorkWrap';
import workList from './../workList';
import styles from './WorkWraper.module.css';
import WorkModal from '../_workModal/WorkModal';

export default function WorkWraper() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const openModal = (item) => {
    setSelectedItem(item);
    setIsOpen(true);
  };

  return (
    <div className={styles.wraper}>
      {workList.map((item) => (
        <WorkWrap
          key={item.id}
          onClick={() => openModal(item)}
          firstImg={item.firstImg}
          name={item.name}
          subName={item.subName}
        />
      ))}

      {isOpen && selectedItem && (
        <WorkModal item={selectedItem} setIsOpen={setIsOpen} />
      )}
    </div>
  );
}
