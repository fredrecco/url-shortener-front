type Props = {
  className: string;
}

const GreaterThan = (props: Props) => (
  <svg
    className={props.className}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    version="1.1"
    x="0px"
    y="0px"
    width="30px"
    height="30px"
    viewBox="0 0 100 125"
    xmlSpace="preserve"
    fill="#fefefe"
  >
    <g>
      <path d="M22.1,95.7c-3,0-5.9-1.5-7.6-4.2c-2.7-4.2-1.4-9.8,2.8-12.4L63.1,50L17.3,21.9c-4.2-2.6-5.6-8.1-3-12.4 c2.6-4.2,8.1-5.6,12.4-3l58,35.7c2.6,1.6,4.3,4.5,4.3,7.6s-1.6,6-4.2,7.7l-58,36.8C25.4,95.3,23.7,95.7,22.1,95.7z" />
    </g>
  </svg>
);

export default GreaterThan;