import React from "react";

import "./favorite-icon.scss";

interface Props {
  isFavorite: boolean;
}

const FavoriteIcon: React.FC<Props> = ({ isFavorite }) => {
  return (
    <svg
      data-testid="favorite-icon"
      className={`favorite-icon ${isFavorite && "favorite-icon--active"}`}
      viewBox="0 0 24 22"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.074 1.633C11.394 0.789 12.605 0.789 12.926 1.633L14.996 7.367C15.141 7.747 15.51 8 15.922 8H21.009C21.949 8 22.359 9.17 21.62 9.743L18 13C17.8378 13.1247 17.7193 13.2975 17.6615 13.4937C17.6036 13.6898 17.6094 13.8993 17.678 14.092L19 19.695C19.322 20.595 18.28 21.368 17.492 20.814L12.575 17.694C12.4066 17.5757 12.2058 17.5122 12 17.5122C11.7942 17.5122 11.5934 17.5757 11.425 17.694L6.508 20.814C5.721 21.368 4.678 20.594 5 19.695L6.322 14.092C6.39058 13.8993 6.39636 13.6898 6.33851 13.4937C6.28066 13.2975 6.16216 13.1247 6 13L2.38 9.743C1.64 9.17 2.052 8 2.99 8H8.077C8.27729 8.00067 8.47307 7.9405 8.63842 7.82747C8.80377 7.71444 8.9309 7.55387 9.003 7.367L11.073 1.633H11.074Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default FavoriteIcon;
