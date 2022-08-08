const PhoneSVG = ({ size }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Phone"
    viewBox="0 0 512 512"
    width={size}
    height={size}
  >
    <rect width="512" height="512" rx="15%" fill="#000" />
    <path
      fill="#fff"
      d="M395 338c-10-9-22-17-33-23-23-16-43-17-59 6-10 14-23 16-37 10-39-18-68-43-84-82-8-16-8-31 10-42 9-6 19-14 18-28-1-18-44-78-62-84-8-2-14-2-22 0-41 14-57 46-42 85a451 451 0 0 0 251 248l17 5c26 0 57-25 67-50 9-24-10-34-24-45z"
    />
    <path
      fill="none"
      stroke="#fff"
      strokeLinecap="round"
      strokeWidth={17}
      d="M268 138s41-1 72 30c31 30 27 74 27 74m-87-63s18-2 33 14c15 15 13 34 13 34M255 98s64-3 111 44c47 48 43 114 43 114"
    />
  </svg>
);

export default PhoneSVG;