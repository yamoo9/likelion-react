import { useRecoilState, useResetRecoilState } from 'recoil';
import { playListState } from './@store/playListState';

export default function PlayList() {
  const [playList, setPlaylist] = useRecoilState(playListState);

  const handleDeleteGenre = (index) => {
    setPlaylist(playList.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h2>플레이리스트 장르</h2>
      <ul>
        {playList.map((genre, index) => (
          <li key={index} style={listStyle}>
            {genre}
            <button
              type="button"
              onClick={() => {
                handleDeleteGenre(index);
              }}
            >
              삭제
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

const listStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: 20,
  marginBottom: 20,
};

export function RestPlayListButton() {
  const handleRestPlayList = useResetRecoilState(playListState);

  return (
    <button type="button" style={buttonStyle} onClick={handleRestPlayList}>
      플레이리스트 초기화
    </button>
  );
}

const buttonStyle = {
  position: 'fixed',
  right: 20,
  top: '50%',
  translate: '0 -50%',
};
