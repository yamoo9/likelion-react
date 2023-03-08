import { useEffect, useLayoutEffect, useState } from 'react';
import { useGotoRecoilSnapshot, useRecoilSnapshot } from 'recoil';

export default function TimeTravelObserver({
  visible: initialVisible = false,
  shortcut: shortcutKey = 'z',
}) {
  const [snapshots, setSnapshots] = useState([]);
  const [visible, setVisible] = useState(initialVisible);

  const snapshot = useRecoilSnapshot();

  useEffect(() => {
    if (snapshots.every((s) => s.getID() !== snapshot.getID())) {
      setSnapshots([...snapshots, snapshot]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [snapshot]);

  useLayoutEffect(() => {
    document.addEventListener('keydown', (e) => {
      if (
        e.shiftKey &&
        e.altKey &&
        e.code.toLowerCase().replace(/key/, '') === shortcutKey
      ) {
        setVisible((visible) => !visible);
      }
    });
  }, [shortcutKey]);

  const gotoSnapshot = useGotoRecoilSnapshot();

  return (
    <div style={containerStyle} hidden={!visible}>
      <div>
        <h2 style={headingStyle}>
          Recoil — Time Travel Observer
          <span style={infoStyle}>
            <span style={iconStyle}>⌨️</span> 토글 :{' '}
            <b>Shift + Alt + {shortcutKey}</b>
          </span>
        </h2>
      </div>
      <ol style={listStyle}>
        {snapshots.map((snapshot, i) => (
          <li key={i} style={itemStyle}>
            스냅샷 (Snapshot) <b>{i}</b>
            <button style={buttonStyle} onClick={() => gotoSnapshot(snapshot)}>
              복구
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}

/* Styles ------------------------------------------------------------------- */

const containerStyle = {
  position: 'fixed',
  bottom: 0,
  left: 0,
  right: 0,
  borderTop: '2px solid rgba(130 130 160 / 60%)',
  padding: '12px 20px 12px 32px',
  background: 'rgba(10 10 30 / 72%)',
  backdropFilter: 'blur(2px)',
  color: '#fff',
  textAlign: 'left',
};

const headingStyle = {
  fontWeight: 300,
  fontSize: 20,
  paddingBottom: 12,
  borderBottom: '0.1px solid rgba(255 255 255 / 30%)',
};

const infoStyle = {
  float: 'right',
  fontSize: 12,
  fontWeight: 400,
  translate: '0 2px',
};

const iconStyle = {
  fontSize: 18,
  verticalAlign: -3,
};

const listStyle = {
  overflowY: 'auto',
  listStyle: 'none',
  padding: 0,
  fontSize: 12,
  height: 120,
};

const itemStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: 8,
  padding: '8px 4px',
};

const buttonStyle = {
  padding: '0.26em 0.8em',
  borderRadius: 4,
};
