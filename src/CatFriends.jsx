import { useRef } from 'react';

export default function CatFriends() {
  const firstCatRef = useRef(null);
  const secondCatRef = useRef(null);
  const thirdCatRef = useRef(null);

  function handleScrollToFirstCat() {
    firstCatRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
    });
  }

  function handleScrollToSecondCat() {
    secondCatRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
    });
  }

  function handleScrollToThirdCat() {
    thirdCatRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
    });
  }

  return (
    <>
      <nav className="text-center">
        <button className="m-1 rounded border px-3 py-1" onClick={handleScrollToFirstCat}>
          Neo
        </button>
        <button className="m-1 rounded border px-3 py-1" onClick={handleScrollToSecondCat}>
          Millie
        </button>
        <button className="m-1 rounded border px-3 py-1" onClick={handleScrollToThirdCat}>
          Bella
        </button>
      </nav>
      <div className="mx-auto w-full max-w-md overflow-hidden">
        <ul className="list-none whitespace-nowrap">
          <li className="inline-block p-2">
            <img
              src="https://placecats.com/neo/300/200"
              alt="Neo"
              ref={firstCatRef}
            />
          </li>
          <li className="inline-block p-2">
            <img
              src="https://placecats.com/millie/200/200"
              alt="Millie"
              ref={secondCatRef}
            />
          </li>
          <li className="inline-block p-2">
            <img
              src="https://placecats.com/bella/199/200"
              alt="Bella"
              ref={thirdCatRef}
            />
          </li>
        </ul>
      </div>
    </>
  );
}
